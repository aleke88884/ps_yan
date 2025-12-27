# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RentTech is a mobile-first web prototype for a gaming equipment rental marketplace (similar to Yandex Go/Uber model). Users can browse rental listings from owners and rent gaming equipment including PlayStation consoles, Gaming PCs, VR headsets, and Nintendo Switch. Built with vanilla JavaScript, CSS, and HTML - no build tools or frameworks.

## Development

**To run**: Open `index.html` in a browser. No build step required.

**State persistence**: All app state is stored in localStorage. Clear browser storage to reset.

## Architecture

### Directory Structure
- `/auth/` - Authentication flow (phone → OTP → role selection)
- `/user/` - Renter screens (home with listings, listing detail, orders, waiting, active rental, rating)
- `/owner/` - Provider screens (dashboard, my-listings, create-listing, earnings, profile)
- `/js/app.js` - Core state management and utilities
- `/js/mock-data.js` - Fake data for prototype including rental listings
- `/css/styles.css` - Complete design system with gaming-themed dark mode

### State Management
The `App` object in `app.js` manages all state via localStorage:
```javascript
App.getState()        // Retrieve state
App.saveState(state)  // Persist state
App.updateState()     // Merge and save
App.clearState()      // Logout/reset
```

Key state properties: `isAuthenticated`, `role` ('user'|'owner'), `user`, `ownerProfile`, `activeOrder`, `ownerListings`, `currentListingId`

### Navigation
Traditional multi-page navigation using `window.location.href` with relative paths (`../`, `./`). No client-side routing.

### CSS Design System
Uses CSS custom properties with gaming-themed purple/violet dark mode:
- Primary accent: `--accent-primary` (#8B5CF6 vibrant purple)
- Gradient: `--gradient-primary` (purple → pink gradient)
- Dark backgrounds: #0D0D0F, #131316, #1A1A1F, #1E1E24
- Light text on dark: #FFFFFF, #A0A0B0
- Layout: 430px max-width, mobile-first, safe area insets support
- Animations: fadeIn, fadeInUp, scaleIn, slideInRight, glow, float, pulse

### External Dependencies (CDN)
- Leaflet.js v1.9.4 (maps)
- Google Fonts (Inter)

## Key Patterns

- Inline `onclick` for simple navigation, event listeners for complex interactions
- Modal system uses `.active` class toggle
- Toast notifications via `App.showToast(message, type)`
- Loading states via `App.setButtonLoading(btn, loading)`
- Price formatting: `App.formatPrice(amount)` outputs Tenge (₸)
- Item name formatting: `App.getItemName(code)` returns full equipment name
- Geolocation request when owner goes online

## Equipment Categories
- PlayStation 5 (`ps5`)
- PlayStation 4 / PS4 Pro (`ps4`, `ps4-pro`)
- Gaming PC (`gaming-pc`)
- VR Headsets (`vr`) - Meta Quest, PlayStation VR2
- Nintendo Switch (`nintendo-switch`)
- Gaming Monitor (`monitor`)

## User Flow
1. Browse rental listings on home screen with filter by equipment type
2. View listing details (games/specs, controllers, owner info)
3. Select rental duration (1 day, 3 days, or 1 week with discounts)
4. Wait for owner acceptance
5. Track active rental

## Owner Flow
1. Toggle online status (requests geolocation)
2. Create and manage rental listings (My Listings)
3. Accept incoming rental requests
4. Track earnings

## Pricing Logic (Mock) - in Tenge (₸)
- PS5: 15,000 ₸/day
- PS4 Pro: 10,000 ₸/day
- PS4: 7,000 ₸/day
- Gaming PC: 15,000-25,000 ₸/day
- VR Headset: 12,000-14,000 ₸/day
- Nintendo Switch: 8,000 ₸/day
- Delivery: +2,000 ₸
- Duration discounts: 3 days (-10%), 1 week (-15%)
- Platform fee: 20% (deducted from owner earnings)
