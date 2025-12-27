/**
 * RentTech - Mock Data
 * Contains all fake data for the prototype
 * Prices in Tenge (KZT)
 */

const MockData = {
    // Available owners that can accept requests
    owners: [
        {
            id: 1,
            name: 'Damir',
            avatar: 'D',
            phone: '+7 701 987 65 43',
            rating: 4.9,
            reviewsCount: 124,
            totalOrders: 47,
            equipment: { type: 'PlayStation 5', edition: 'Digital Edition', controllers: 2, games: '10+' },
            dailyRate: 15000,
            isOnline: true,
            distance: 2.3
        },
        {
            id: 2,
            name: 'Arman',
            avatar: 'A',
            phone: '+7 702 111 22 33',
            rating: 4.7,
            reviewsCount: 89,
            totalOrders: 32,
            equipment: { type: 'Gaming PC', specs: 'RTX 4070, i7-13700', monitors: 1 },
            dailyRate: 20000,
            isOnline: true,
            distance: 1.8
        },
        {
            id: 3,
            name: 'Yerbol',
            avatar: 'Y',
            phone: '+7 705 444 55 66',
            rating: 4.8,
            reviewsCount: 56,
            totalOrders: 21,
            equipment: { type: 'Meta Quest 3', edition: 'VR Headset', controllers: 2 },
            dailyRate: 12000,
            isOnline: false,
            distance: 3.5
        }
    ],

    // User's past orders
    userOrders: [
        {
            id: 101,
            itemType: 'ps5',
            itemName: 'PlayStation 5',
            duration: 3,
            durationLabel: '3 days',
            total: 52500,
            date: '2024-01-15',
            status: 'completed',
            owner: { name: 'Damir', avatar: 'D', rating: 4.9 },
            userRating: 5,
            delivery: 'delivery'
        },
        {
            id: 102,
            itemType: 'gaming-pc',
            itemName: 'Gaming PC',
            duration: 1,
            durationLabel: '1 day',
            total: 22000,
            date: '2024-01-10',
            status: 'completed',
            owner: { name: 'Arman', avatar: 'A', rating: 4.7 },
            userRating: 4,
            delivery: 'pickup'
        },
        {
            id: 103,
            itemType: 'vr',
            itemName: 'Meta Quest 3',
            duration: 7,
            durationLabel: '1 week',
            total: 70000,
            date: '2024-01-05',
            status: 'completed',
            owner: { name: 'Yerbol', avatar: 'Y', rating: 4.8 },
            userRating: 5,
            delivery: 'delivery'
        },
        {
            id: 104,
            itemType: 'ps4',
            itemName: 'PlayStation 4',
            duration: 3,
            durationLabel: '3 days',
            total: 25500,
            date: '2023-12-28',
            status: 'completed',
            owner: { name: 'Damir', avatar: 'D', rating: 4.9 },
            userRating: 5,
            delivery: 'pickup'
        }
    ],

    // Incoming requests for owner view
    incomingRequests: [
        {
            id: 201,
            user: { name: 'Alikhan', avatar: 'A', rating: 4.8, orders: 12, phone: '+7 707 123 45 67' },
            itemType: 'ps5',
            itemName: 'PlayStation 5',
            duration: 3,
            durationLabel: '3 days',
            delivery: 'delivery',
            distance: 2.3,
            total: 47000,
            earnings: 37600,
            createdAt: Date.now() - 15000,
            location: { lat: 43.2380, lng: 76.9450 }
        },
        {
            id: 202,
            user: { name: 'Madina', avatar: 'M', rating: 4.5, orders: 5, phone: '+7 700 555 66 77' },
            itemType: 'vr',
            itemName: 'Meta Quest 3',
            duration: 1,
            durationLabel: '1 day',
            delivery: 'pickup',
            distance: 1.1,
            total: 12000,
            earnings: 9600,
            createdAt: Date.now() - 45000,
            location: { lat: 43.2420, lng: 76.9520 }
        },
        {
            id: 203,
            user: { name: 'Nursultan', avatar: 'N', rating: 4.9, orders: 28, phone: '+7 708 888 99 00' },
            itemType: 'gaming-pc',
            itemName: 'Gaming PC',
            duration: 7,
            durationLabel: '1 week',
            delivery: 'delivery',
            distance: 4.2,
            total: 142000,
            earnings: 113600,
            createdAt: Date.now() - 90000,
            location: { lat: 43.2300, lng: 76.9300 }
        }
    ],

    // Reviews from owners about users (for the map popup)
    userReviews: {
        'Alikhan': [
            {
                ownerName: 'Damir',
                ownerAvatar: 'D',
                rating: 5,
                comment: 'Great customer! Very careful with the equipment, returned on time.',
                date: 'Dec 15, 2024'
            },
            {
                ownerName: 'Arman',
                ownerAvatar: 'A',
                rating: 5,
                comment: 'Polite and punctual. Would rent again!',
                date: 'Dec 8, 2024'
            },
            {
                ownerName: 'Yerbol',
                ownerAvatar: 'Y',
                rating: 4,
                comment: 'Good customer, returned equipment in good condition.',
                date: 'Nov 20, 2024'
            }
        ],
        'Madina': [
            {
                ownerName: 'Damir',
                ownerAvatar: 'D',
                rating: 4,
                comment: 'Nice person, but was 10 minutes late for pickup.',
                date: 'Jan 5, 2025'
            },
            {
                ownerName: 'Yerbol',
                ownerAvatar: 'Y',
                rating: 5,
                comment: 'Perfect customer! Very respectful.',
                date: 'Dec 22, 2024'
            }
        ],
        'Nursultan': [
            {
                ownerName: 'Damir',
                ownerAvatar: 'D',
                rating: 5,
                comment: 'One of my best customers. Always on time, very careful.',
                date: 'Jan 18, 2025'
            },
            {
                ownerName: 'Arman',
                ownerAvatar: 'A',
                rating: 5,
                comment: 'Excellent! Highly recommended customer.',
                date: 'Jan 10, 2025'
            },
            {
                ownerName: 'Yerbol',
                ownerAvatar: 'Y',
                rating: 5,
                comment: 'Great experience. Very responsible person.',
                date: 'Dec 28, 2024'
            }
        ]
    },

    // Owner's transaction history
    transactions: [
        { id: 301, type: 'earning', title: 'Rental completed - Alikhan', amount: 37600, date: '2024-01-20' },
        { id: 302, type: 'earning', title: 'Rental completed - Madina', amount: 9600, date: '2024-01-19' },
        { id: 303, type: 'withdrawal', title: 'Withdrawal to Kaspi **** 4242', amount: -150000, date: '2024-01-18' },
        { id: 304, type: 'earning', title: 'Rental completed - Nursultan', amount: 56000, date: '2024-01-17' },
        { id: 305, type: 'earning', title: 'Rental completed - Ainur', amount: 28000, date: '2024-01-16' },
        { id: 306, type: 'earning', title: 'Rental completed - Bekzat', amount: 32000, date: '2024-01-15' },
        { id: 307, type: 'withdrawal', title: 'Withdrawal to Kaspi **** 4242', amount: -100000, date: '2024-01-14' },
        { id: 308, type: 'earning', title: 'Rental completed - Saule', amount: 48000, date: '2024-01-13' }
    ],

    // Pricing configuration (in Tenge - KZT)
    pricing: {
        dailyRates: {
            'ps5': 15000,
            'ps4-pro': 10000,
            'ps4': 7000,
            'gaming-pc': 20000,
            'vr': 12000,
            'nintendo-switch': 8000,
            'monitor': 5000
        },
        deliveryFee: 2000,
        platformFee: 0.20 // 20% platform fee for owners
    },

    // Duration options for rental
    durationOptions: [
        { days: 1, label: '1 day', discount: 0 },
        { days: 3, label: '3 days', discount: 0.1 },
        { days: 7, label: '1 week', discount: 0.15 }
    ],

    // Equipment/Item display names
    itemNames: {
        'ps5': 'PlayStation 5',
        'ps4-pro': 'PlayStation 4 Pro',
        'ps4': 'PlayStation 4',
        'gaming-pc': 'Gaming PC',
        'vr': 'VR Headset',
        'nintendo-switch': 'Nintendo Switch',
        'monitor': 'Gaming Monitor'
    },

    // Item categories for filtering
    itemCategories: [
        { id: 'all', name: 'All', icon: 'grid' },
        { id: 'ps5', name: 'PS5', icon: 'gamepad' },
        { id: 'ps4', name: 'PS4', icon: 'gamepad' },
        { id: 'gaming-pc', name: 'PC', icon: 'monitor' },
        { id: 'vr', name: 'VR', icon: 'glasses' },
        { id: 'nintendo-switch', name: 'Switch', icon: 'gamepad' }
    ],

    // Backward compatibility
    consoleNames: {
        'ps5': 'PlayStation 5',
        'ps4-pro': 'PlayStation 4 Pro',
        'ps4': 'PlayStation 4'
    },

    // Rental listings (created by owners) - expanded with new categories
    rentalListings: [
        {
            id: 1,
            title: 'PS5 + FIFA 24 + 2 Controllers',
            description: 'Perfect for football fans! Includes FIFA 24, 2 DualSense controllers, and all cables. Console is in excellent condition.',
            image: '',
            itemType: 'ps5',
            pricePerDay: 15000,
            games: ['FIFA 24', 'Spider-Man 2'],
            controllers: 2,
            delivery: true,
            owner: {
                id: 1,
                name: 'Damir',
                avatar: 'D',
                rating: 4.9,
                reviewsCount: 124,
                phone: '+7 701 987 65 43'
            },
            location: { lat: 43.2380, lng: 76.9450 },
            distance: 2.3,
            createdAt: Date.now() - 86400000
        },
        {
            id: 2,
            title: 'Gaming PC RTX 4070 + Monitor',
            description: 'High-end gaming PC with RTX 4070, Intel i7-13700, 32GB RAM, 1TB SSD. Includes 27" 165Hz monitor. Ready for any game!',
            image: '',
            itemType: 'gaming-pc',
            pricePerDay: 25000,
            specs: ['RTX 4070', 'i7-13700', '32GB RAM', '165Hz Monitor'],
            delivery: true,
            owner: {
                id: 2,
                name: 'Arman',
                avatar: 'A',
                rating: 4.7,
                reviewsCount: 89,
                phone: '+7 702 111 22 33'
            },
            location: { lat: 43.2420, lng: 76.9520 },
            distance: 1.8,
            createdAt: Date.now() - 172800000
        },
        {
            id: 3,
            title: 'Meta Quest 3 VR Full Kit',
            description: 'Latest Meta Quest 3 with elite strap, charging dock, and 10+ VR games. Perfect for immersive gaming experience!',
            image: '',
            itemType: 'vr',
            pricePerDay: 12000,
            specs: ['128GB Storage', 'Elite Strap', 'Charging Dock'],
            games: ['Beat Saber', 'Resident Evil 4', 'Superhot VR'],
            controllers: 2,
            delivery: true,
            owner: {
                id: 3,
                name: 'Yerbol',
                avatar: 'Y',
                rating: 4.8,
                reviewsCount: 56,
                phone: '+7 705 444 55 66'
            },
            location: { lat: 43.2300, lng: 76.9300 },
            distance: 3.5,
            createdAt: Date.now() - 259200000
        },
        {
            id: 4,
            title: 'PS5 + Call of Duty Package',
            description: 'For shooter fans! Includes MW3, Warzone ready. Fast SSD, 2 controllers with custom grips.',
            image: '',
            itemType: 'ps5',
            pricePerDay: 16000,
            games: ['Call of Duty MW3', 'Warzone'],
            controllers: 2,
            delivery: true,
            owner: {
                id: 1,
                name: 'Damir',
                avatar: 'D',
                rating: 4.9,
                reviewsCount: 124,
                phone: '+7 701 987 65 43'
            },
            location: { lat: 43.2380, lng: 76.9450 },
            distance: 2.3,
            createdAt: Date.now() - 345600000
        },
        {
            id: 5,
            title: 'Nintendo Switch OLED + Games',
            description: 'Nintendo Switch OLED model with dock, pro controller. Includes Zelda, Mario Kart, and more!',
            image: '',
            itemType: 'nintendo-switch',
            pricePerDay: 8000,
            games: ['Zelda TOTK', 'Mario Kart 8', 'Pokemon Scarlet'],
            controllers: 2,
            delivery: true,
            owner: {
                id: 2,
                name: 'Arman',
                avatar: 'A',
                rating: 4.7,
                reviewsCount: 89,
                phone: '+7 702 111 22 33'
            },
            location: { lat: 43.2420, lng: 76.9520 },
            distance: 1.8,
            createdAt: Date.now() - 432000000
        },
        {
            id: 6,
            title: 'PS4 Pro + 15 Games Bundle',
            description: 'Huge game collection! Includes Last of Us, Uncharted series, Bloodborne, and more. 2 controllers included.',
            image: '',
            itemType: 'ps4',
            pricePerDay: 10000,
            games: ['Last of Us', 'Uncharted 4', 'Bloodborne', 'God of War'],
            controllers: 2,
            delivery: true,
            owner: {
                id: 1,
                name: 'Damir',
                avatar: 'D',
                rating: 4.9,
                reviewsCount: 124,
                phone: '+7 701 987 65 43'
            },
            location: { lat: 43.2380, lng: 76.9450 },
            distance: 2.3,
            createdAt: Date.now() - 518400000
        },
        {
            id: 7,
            title: 'Gaming PC RTX 3060 Budget Setup',
            description: 'Great budget gaming PC. RTX 3060, Ryzen 5 5600X, 16GB RAM. Perfect for Fortnite, Valorant, CS2!',
            image: '',
            itemType: 'gaming-pc',
            pricePerDay: 15000,
            specs: ['RTX 3060', 'Ryzen 5 5600X', '16GB RAM'],
            delivery: true,
            owner: {
                id: 3,
                name: 'Yerbol',
                avatar: 'Y',
                rating: 4.8,
                reviewsCount: 56,
                phone: '+7 705 444 55 66'
            },
            location: { lat: 43.2300, lng: 76.9300 },
            distance: 3.5,
            createdAt: Date.now() - 604800000
        },
        {
            id: 8,
            title: 'PlayStation VR2 for PS5',
            description: 'Latest PSVR2 headset for PlayStation 5. Includes Horizon Call of the Mountain and GT7 VR mode ready!',
            image: '',
            itemType: 'vr',
            pricePerDay: 14000,
            specs: ['4K HDR OLED', 'Eye Tracking', 'Haptic Feedback'],
            games: ['Horizon VR', 'GT7 VR', 'Resident Evil Village VR'],
            controllers: 2,
            delivery: true,
            owner: {
                id: 1,
                name: 'Damir',
                avatar: 'D',
                rating: 4.9,
                reviewsCount: 124,
                phone: '+7 701 987 65 43'
            },
            location: { lat: 43.2380, lng: 76.9450 },
            distance: 2.3,
            createdAt: Date.now() - 691200000
        }
    ]
};

// Make it available globally
window.MockData = MockData;
