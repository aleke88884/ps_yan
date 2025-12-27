/**
 * PS Rent - Main Application Logic
 * Handles state management, navigation, and shared utilities
 */

const App = {
    // ==================== STATE MANAGEMENT ====================

    // Default state structure
    defaultState: {
        isAuthenticated: false,
        role: null, // 'user' or 'owner'

        // Current user data
        user: {
            id: 1,
            name: 'Alikhan',
            phone: '+7 707 123 45 67',
            avatar: 'A',
            rating: 4.8,
            ordersCount: 12,
            isVerified: true,
            paymentCard: '•••• 4242'
        },

        // Owner profile (when role is owner)
        ownerProfile: {
            id: 1,
            name: 'Damir',
            phone: '+7 701 987 65 43',
            avatar: 'D',
            rating: 4.9,
            reviewsCount: 124,
            totalOrders: 47,
            earnings: 524500,
            todayEarnings: 45000,
            todayOrders: 2,
            isOnline: false,
            equipment: {
                type: 'PlayStation 5',
                edition: 'Digital Edition',
                controllers: 2,
                games: '10+'
            }
        },

        // Current order being created (user)
        orderConfig: {
            console: 'ps5',
            duration: 2,
            delivery: 'delivery'
        },

        // Active order (when order is in progress)
        activeOrder: null,

        // Current request being viewed (owner)
        currentRequest: null,

        // Active rental (owner)
        activeRental: null,

        // Phone number entered during auth
        phoneNumber: ''
    },

    // Get state from localStorage or return default
    getState() {
        const saved = localStorage.getItem('psrent_state');
        if (saved) {
            try {
                return { ...this.defaultState, ...JSON.parse(saved) };
            } catch (e) {
                return { ...this.defaultState };
            }
        }
        return { ...this.defaultState };
    },

    // Save state to localStorage
    saveState(state) {
        localStorage.setItem('psrent_state', JSON.stringify(state));
    },

    // Update specific state properties
    updateState(updates) {
        const currentState = this.getState();
        const newState = { ...currentState, ...updates };
        this.saveState(newState);
        return newState;
    },

    // Clear all state (logout)
    clearState() {
        localStorage.removeItem('psrent_state');
    },

    // ==================== NAVIGATION ====================

    // Navigate to a different page
    goTo(page) {
        window.location.href = page;
    },

    // Get base path for navigation
    getBasePath() {
        const path = window.location.pathname;
        if (path.includes('/auth/') || path.includes('/user/') || path.includes('/owner/')) {
            return '../';
        }
        return './';
    },

    // ==================== PRICING CALCULATIONS ====================

    calculatePrice(itemType, durationDays, delivery) {
        const rates = MockData.pricing.dailyRates;
        const dailyRate = rates[itemType] || rates['ps5'];
        const deliveryFee = delivery === 'delivery' ? MockData.pricing.deliveryFee : 0;

        const rentalPrice = dailyRate * durationDays;
        const total = rentalPrice + deliveryFee;

        return {
            dailyRate,
            rentalPrice,
            deliveryFee,
            total
        };
    },

    calculateOwnerEarnings(total) {
        const platformFee = MockData.pricing.platformFee;
        return Math.round(total * (1 - platformFee));
    },

    // ==================== FORMATTING UTILITIES ====================

    formatPrice(amount) {
        return amount.toLocaleString('kk-KZ') + ' ₸';
    },

    formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    },

    formatPhone(value) {
        // Remove non-digits
        let digits = value.replace(/\D/g, '');
        if (digits.length > 10) digits = digits.slice(0, 10);

        // Format: 900 123 45 67
        let formatted = '';
        if (digits.length > 0) formatted = digits.slice(0, 3);
        if (digits.length > 3) formatted += ' ' + digits.slice(3, 6);
        if (digits.length > 6) formatted += ' ' + digits.slice(6, 8);
        if (digits.length > 8) formatted += ' ' + digits.slice(8, 10);

        return formatted;
    },

    getTimeAgo(timestamp) {
        const seconds = Math.floor((Date.now() - timestamp) / 1000);

        if (seconds < 60) return 'Just now';
        if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
        if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
        return Math.floor(seconds / 86400) + 'd ago';
    },

    getItemName(code) {
        return MockData.itemNames[code] || code;
    },

    // Backward compatibility
    getConsoleName(code) {
        return this.getItemName(code);
    },

    // ==================== TOAST NOTIFICATIONS ====================

    showToast(message, type = 'info') {
        // Remove existing toasts
        const existing = document.querySelector('.toast-container');
        if (existing) existing.remove();

        // Create container
        const container = document.createElement('div');
        container.className = 'toast-container';
        container.innerHTML = `
            <div class="toast ${type}">
                <span class="toast-icon">${this.getToastIcon(type)}</span>
                <span class="toast-message">${message}</span>
            </div>
        `;

        document.body.appendChild(container);

        // Remove after 3 seconds
        setTimeout(() => {
            const toast = container.querySelector('.toast');
            if (toast) toast.classList.add('removing');
            setTimeout(() => container.remove(), 300);
        }, 3000);
    },

    getToastIcon(type) {
        const icons = {
            success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
            error: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
            info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
        };
        return icons[type] || icons.info;
    },

    // ==================== BUTTON LOADING STATE ====================

    setButtonLoading(btn, loading) {
        if (!btn) return;

        const textEl = btn.querySelector('.btn-text');
        const loaderEl = btn.querySelector('.btn-loader');

        if (loading) {
            btn.disabled = true;
            btn.classList.add('loading');
            if (textEl) textEl.style.visibility = 'hidden';
            if (loaderEl) loaderEl.classList.remove('hidden');
        } else {
            btn.disabled = false;
            btn.classList.remove('loading');
            if (textEl) textEl.style.visibility = 'visible';
            if (loaderEl) loaderEl.classList.add('hidden');
        }
    },

    // ==================== MODAL HELPERS ====================

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    // ==================== ROLE SWITCHING ====================

    switchRole() {
        const state = this.getState();
        const newRole = state.role === 'user' ? 'owner' : 'user';
        this.updateState({ role: newRole });

        if (newRole === 'user') {
            this.goTo(this.getBasePath() + 'user/home.html');
        } else {
            this.goTo(this.getBasePath() + 'owner/home.html');
        }
    },

    logout() {
        this.clearState();
        this.goTo(this.getBasePath() + 'index.html');
    },

    // ==================== DELAY UTILITY ====================

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

// Make App available globally
window.App = App;
