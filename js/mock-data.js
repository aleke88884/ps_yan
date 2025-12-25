/**
 * PS Rent - Mock Data
 * Contains all fake data for the prototype
 */

const MockData = {
    // Available owners that can accept requests
    owners: [
        {
            id: 1,
            name: 'Dmitry',
            avatar: 'D',
            phone: '+7 900 987 65 43',
            rating: 4.9,
            reviewsCount: 124,
            totalOrders: 47,
            console: { type: 'PlayStation 5', edition: 'Digital Edition', controllers: 2, games: '10+' },
            hourlyRate: 800,
            isOnline: true,
            distance: 2.3
        },
        {
            id: 2,
            name: 'Sergey',
            avatar: 'S',
            phone: '+7 900 111 22 33',
            rating: 4.7,
            reviewsCount: 89,
            totalOrders: 32,
            console: { type: 'PlayStation 4 Pro', edition: 'Standard', controllers: 2, games: '15+' },
            hourlyRate: 600,
            isOnline: true,
            distance: 1.8
        },
        {
            id: 3,
            name: 'Ivan',
            avatar: 'I',
            phone: '+7 900 444 55 66',
            rating: 4.8,
            reviewsCount: 56,
            totalOrders: 21,
            console: { type: 'PlayStation 5', edition: 'Disc Edition', controllers: 1, games: '8+' },
            hourlyRate: 850,
            isOnline: false,
            distance: 3.5
        }
    ],

    // User's past orders
    userOrders: [
        {
            id: 101,
            console: 'PS5',
            consoleFull: 'PlayStation 5',
            duration: 3,
            total: 2900,
            date: '2024-01-15',
            status: 'completed',
            owner: { name: 'Dmitry', avatar: 'D', rating: 4.9 },
            userRating: 5,
            delivery: 'delivery'
        },
        {
            id: 102,
            console: 'PS4 Pro',
            consoleFull: 'PlayStation 4 Pro',
            duration: 2,
            total: 1700,
            date: '2024-01-10',
            status: 'completed',
            owner: { name: 'Sergey', avatar: 'S', rating: 4.7 },
            userRating: 4,
            delivery: 'pickup'
        },
        {
            id: 103,
            console: 'PS5',
            consoleFull: 'PlayStation 5',
            duration: 4,
            total: 3700,
            date: '2024-01-05',
            status: 'completed',
            owner: { name: 'Dmitry', avatar: 'D', rating: 4.9 },
            userRating: 5,
            delivery: 'delivery'
        },
        {
            id: 104,
            console: 'PS4',
            consoleFull: 'PlayStation 4',
            duration: 2,
            total: 1300,
            date: '2023-12-28',
            status: 'completed',
            owner: { name: 'Ivan', avatar: 'I', rating: 4.8 },
            userRating: 5,
            delivery: 'pickup'
        }
    ],

    // Incoming requests for owner view
    incomingRequests: [
        {
            id: 201,
            user: { name: 'Alex', avatar: 'A', rating: 4.8, orders: 12, phone: '+7 900 123 45 67' },
            console: 'PS5',
            consoleFull: 'PlayStation 5',
            duration: 2,
            delivery: 'delivery',
            distance: 2.3,
            total: 2100,
            earnings: 1680,
            createdAt: Date.now() - 15000, // 15 seconds ago
            location: { lat: 55.7558, lng: 37.6173 }
        },
        {
            id: 202,
            user: { name: 'Maria', avatar: 'M', rating: 4.5, orders: 5, phone: '+7 900 555 66 77' },
            console: 'PS5',
            consoleFull: 'PlayStation 5',
            duration: 3,
            delivery: 'pickup',
            distance: 1.1,
            total: 2400,
            earnings: 1920,
            createdAt: Date.now() - 45000, // 45 seconds ago
            location: { lat: 55.7612, lng: 37.6290 }
        },
        {
            id: 203,
            user: { name: 'Pavel', avatar: 'P', rating: 4.9, orders: 28, phone: '+7 900 888 99 00' },
            console: 'PS5',
            consoleFull: 'PlayStation 5',
            duration: 4,
            delivery: 'delivery',
            distance: 4.2,
            total: 3700,
            earnings: 2960,
            createdAt: Date.now() - 90000, // 90 seconds ago
            location: { lat: 55.7480, lng: 37.5950 }
        }
    ],

    // Reviews from owners about users (for the map popup)
    userReviews: {
        'Alex': [
            {
                ownerName: 'Dmitry',
                ownerAvatar: 'D',
                rating: 5,
                comment: 'Great customer! Very careful with the console, returned on time.',
                date: 'Dec 15, 2024'
            },
            {
                ownerName: 'Sergey',
                ownerAvatar: 'S',
                rating: 5,
                comment: 'Polite and punctual. Would rent again!',
                date: 'Dec 8, 2024'
            },
            {
                ownerName: 'Ivan',
                ownerAvatar: 'I',
                rating: 4,
                comment: 'Good customer, returned console in good condition.',
                date: 'Nov 20, 2024'
            }
        ],
        'Maria': [
            {
                ownerName: 'Dmitry',
                ownerAvatar: 'D',
                rating: 4,
                comment: 'Nice person, but was 10 minutes late for pickup.',
                date: 'Jan 5, 2025'
            },
            {
                ownerName: 'Ivan',
                ownerAvatar: 'I',
                rating: 5,
                comment: 'Perfect customer! Very respectful.',
                date: 'Dec 22, 2024'
            }
        ],
        'Pavel': [
            {
                ownerName: 'Dmitry',
                ownerAvatar: 'D',
                rating: 5,
                comment: 'One of my best customers. Always on time, very careful.',
                date: 'Jan 18, 2025'
            },
            {
                ownerName: 'Sergey',
                ownerAvatar: 'S',
                rating: 5,
                comment: 'Excellent! Highly recommended customer.',
                date: 'Jan 10, 2025'
            },
            {
                ownerName: 'Ivan',
                ownerAvatar: 'I',
                rating: 5,
                comment: 'Great experience. Very responsible person.',
                date: 'Dec 28, 2024'
            },
            {
                ownerName: 'Dmitry',
                ownerAvatar: 'D',
                rating: 5,
                comment: 'Repeat customer, always a pleasure!',
                date: 'Dec 1, 2024'
            }
        ]
    },

    // Owner's transaction history
    transactions: [
        { id: 301, type: 'earning', title: 'Rental completed - Alex', amount: 1680, date: '2024-01-20' },
        { id: 302, type: 'earning', title: 'Rental completed - Maria', amount: 1920, date: '2024-01-19' },
        { id: 303, type: 'withdrawal', title: 'Withdrawal to **** 4242', amount: -5000, date: '2024-01-18' },
        { id: 304, type: 'earning', title: 'Rental completed - Ivan', amount: 2400, date: '2024-01-17' },
        { id: 305, type: 'earning', title: 'Rental completed - Elena', amount: 1280, date: '2024-01-16' },
        { id: 306, type: 'earning', title: 'Rental completed - Nikolay', amount: 1600, date: '2024-01-15' },
        { id: 307, type: 'withdrawal', title: 'Withdrawal to **** 4242', amount: -3000, date: '2024-01-14' },
        { id: 308, type: 'earning', title: 'Rental completed - Olga', amount: 2080, date: '2024-01-13' }
    ],

    // Pricing configuration
    pricing: {
        hourlyRates: {
            'ps5': 800,
            'ps4-pro': 600,
            'ps4': 400
        },
        deliveryFee: 500,
        platformFee: 0.20 // 20% platform fee for owners
    },

    // Console display names
    consoleNames: {
        'ps5': 'PlayStation 5',
        'ps4-pro': 'PlayStation 4 Pro',
        'ps4': 'PlayStation 4'
    }
};

// Make it available globally
window.MockData = MockData;
