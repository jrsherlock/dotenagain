/**
 * IAYPAA X PWA - From Muck to Miracle
 * Iowa City, IA 2026
 */

// Conference Schedule Data
const scheduleData = {
    friday: [
        {
            id: 'fri-1',
            time: '3:00 PM',
            endTime: '6:00 PM',
            title: 'Registration Open',
            venue: 'registration',
            venueLabel: 'Main Lobby',
            type: 'registration',
            description: 'Check in, pick up your name badge, and get your conference materials.'
        },
        {
            id: 'fri-2',
            time: '4:00 PM',
            endTime: '5:00 PM',
            title: 'Welcome to IAYPAA Panel',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'panel',
            description: 'New to IAYPAA? Join us for an introduction to what Iowa Young People in AA is all about!'
        },
        {
            id: 'fri-3',
            time: '5:00 PM',
            endTime: '6:00 PM',
            title: 'Supper Break',
            venue: 'outside',
            venueLabel: 'Various',
            type: 'social',
            description: 'Take a break and grab some food. Check out local restaurants nearby!'
        },
        {
            id: 'fri-4',
            time: '6:00 PM',
            endTime: '6:30 PM',
            title: 'Registration Close',
            venue: 'registration',
            venueLabel: 'Main Lobby',
            type: 'registration',
            description: 'Last chance for evening registration.'
        },
        {
            id: 'fri-5',
            time: '6:30 PM',
            endTime: '7:00 PM',
            title: 'Hype',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Get hyped for the conference! Energy, music, and excitement!'
        },
        {
            id: 'fri-6',
            time: '7:00 PM',
            endTime: '8:00 PM',
            title: 'State Roll Call',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Represent where you\'re from! Cheer for your home group and state.'
        },
        {
            id: 'fri-7',
            time: '8:00 PM',
            endTime: '9:30 PM',
            title: 'Main Speaker',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'speaker',
            description: 'Friday night main speaker sharing their experience, strength, and hope.',
            featured: true
        },
        {
            id: 'fri-8',
            time: '9:30 PM',
            endTime: '11:00 PM',
            title: 'Dance - Primordial Ooze Party',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Get your glow on at the ooze-themed dance! Neon, glow sticks, and good vibes in recovery.',
            featured: true
        },
        {
            id: 'fri-9',
            time: '9:30 PM',
            endTime: '10:30 PM',
            title: 'Outside Meeting',
            venue: 'outside',
            venueLabel: 'Patio Area',
            type: 'meeting',
            description: 'Casual outdoor meeting. Cigar friendly.'
        },
        {
            id: 'fri-10',
            time: '11:00 PM',
            endTime: '12:00 AM',
            title: 'All the Desperation Panel',
            venue: 'hideout',
            venueLabel: 'The Hideout',
            type: 'panel',
            description: 'Late night panel discussing the desperation that brought us to recovery.'
        }
    ],
    saturday: [
        {
            id: 'sat-1',
            time: '8:00 AM',
            endTime: '10:00 AM',
            title: 'Bid Skits',
            venue: 'loft',
            venueLabel: 'The Loft',
            type: 'social',
            description: 'Cities bidding to host next year\'s IAYPAA present their creative skits!'
        },
        {
            id: 'sat-2',
            time: '10:00 AM',
            endTime: '11:00 AM',
            title: 'Working with the Newcomer Panel',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'panel',
            description: 'Discussion on sponsorship and helping those new to the program.'
        },
        {
            id: 'sat-3',
            time: '10:00 AM',
            endTime: '11:00 AM',
            title: 'Al-Anon Panel',
            venue: 'hideout',
            venueLabel: 'The Hideout',
            type: 'panel',
            description: 'Panel for friends and family members of alcoholics.'
        },
        {
            id: 'sat-4',
            time: '10:00 AM',
            endTime: '1:00 PM',
            title: 'Field Day - Outside',
            venue: 'outside',
            venueLabel: 'Outdoor Area',
            type: 'social',
            description: 'Fun outdoor activities, games, and fellowship in the fresh air!'
        },
        {
            id: 'sat-5',
            time: '11:00 AM',
            endTime: '12:00 PM',
            title: 'Service Panel',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'panel',
            description: 'Getting involved in AA service at all levels - from group to GSO.'
        },
        {
            id: 'sat-6',
            time: '11:00 AM',
            endTime: '12:00 PM',
            title: 'Dating in AA Panel',
            venue: 'hideout',
            venueLabel: 'The Hideout',
            type: 'panel',
            description: 'Navigating relationships in sobriety - the good, the bad, and the awkward.'
        },
        {
            id: 'sat-7',
            time: '12:00 PM',
            endTime: '1:00 PM',
            title: 'Noon Speaker',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'speaker',
            description: 'Midday speaker sharing their journey in recovery.'
        },
        {
            id: 'sat-8',
            time: '1:00 PM',
            endTime: '2:00 PM',
            title: 'Lunch Break',
            venue: 'outside',
            venueLabel: 'Various',
            type: 'social',
            description: 'Grab lunch and recharge for the afternoon!'
        },
        {
            id: 'sat-9',
            time: '2:00 PM',
            endTime: '3:00 PM',
            title: 'Spiritual Solutions Panel',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'panel',
            description: 'Exploring the spiritual side of the program and finding what works for you.'
        },
        {
            id: 'sat-10',
            time: '2:00 PM',
            endTime: '3:00 PM',
            title: 'Taking the Message into H&I Settings',
            venue: 'hideout',
            venueLabel: 'The Hideout',
            type: 'panel',
            description: 'Hospitals & Institutions service - carrying the message behind walls.'
        },
        {
            id: 'sat-11',
            time: '3:00 PM',
            endTime: '4:00 PM',
            title: 'Young in AA Panel',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'panel',
            description: 'Unique challenges and joys of getting sober young.'
        },
        {
            id: 'sat-12',
            time: '3:00 PM',
            endTime: '4:00 PM',
            title: 'Outside Issues Panel',
            venue: 'hideout',
            venueLabel: 'The Hideout',
            type: 'panel',
            description: 'How we handle outside issues while keeping our primary purpose.'
        },
        {
            id: 'sat-13',
            time: '3:30 PM',
            endTime: '5:30 PM',
            title: 'Sober Fortune Teller',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Fun entertainment — what does your sober future hold? Come get a lighthearted reading!'
        },
        {
            id: 'sat-14',
            time: '5:30 PM',
            endTime: '6:30 PM',
            title: 'Supper Break',
            venue: 'outside',
            venueLabel: 'Various',
            type: 'social',
            description: 'Dinner time! Fuel up for the evening activities.'
        },
        {
            id: 'sat-15',
            time: '6:30 PM',
            endTime: '7:00 PM',
            title: 'Hype',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Saturday night energy boost!'
        },
        {
            id: 'sat-16',
            time: '7:00 PM',
            endTime: '8:00 PM',
            title: 'Sobriety Countdown',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'meeting',
            description: 'Celebrate sobriety milestones together - from 24 hours to decades!',
            featured: true
        },
        {
            id: 'sat-17',
            time: '8:00 PM',
            endTime: '10:00 PM',
            title: 'Main Speaker',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'speaker',
            description: 'Saturday night main speaker - the highlight of the conference!',
            featured: true
        },
        {
            id: 'sat-18',
            time: '10:00 PM',
            endTime: '12:00 AM',
            title: 'Dance - From Muck to Miracle',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'The main event dance — celebrate the miracle! Get your groove on at the primordial ooze themed dance party!',
            featured: true
        },
        {
            id: 'sat-19',
            time: '10:00 PM',
            endTime: '12:00 AM',
            title: 'Karaoke',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'social',
            description: 'Show off your singing skills (or lack thereof) at late night karaoke!'
        }
    ],
    sunday: [
        {
            id: 'sun-1',
            time: '12:00 AM',
            endTime: '1:00 AM',
            title: 'Lack of Power Panel',
            venue: 'hideout',
            venueLabel: 'The Hideout (TBD)',
            type: 'panel',
            description: 'Late night/early morning panel on powerlessness and surrender.'
        },
        {
            id: 'sun-2',
            time: '7:30 AM',
            endTime: '8:30 AM',
            title: 'Upon Awakening Meditation',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'meeting',
            description: 'Start your morning with mindful meditation and reflection.'
        },
        {
            id: 'sun-3',
            time: '9:00 AM',
            endTime: '9:30 AM',
            title: 'Farewell',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Closing remarks and announcements for next year\'s conference.'
        },
        {
            id: 'sun-4',
            time: '9:30 AM',
            endTime: '10:30 AM',
            title: 'Spiritual Speaker',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'speaker',
            description: 'Sunday morning spiritual speaker to close out the conference.'
        },
        {
            id: 'sun-5',
            time: '10:30 AM',
            endTime: '12:00 PM',
            title: 'Final Clean Up & Send Off',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Help clean up and say goodbye. See you next year!'
        }
    ]
};

// Conference dates (update when confirmed — month is 0-indexed: 7 = August)
// Using mid-August as placeholder until exact dates are set
const CONFERENCE_START = new Date(2026, 7, 14, 15, 0, 0); // Friday 3 PM CT
const CONFERENCE_END = new Date(2026, 7, 16, 12, 0, 0);   // Sunday noon CT

// Speaker Data
const speakersData = [
    {
        id: 'speaker-fri-night',
        slot: 'Friday Night Speaker',
        time: 'Friday 8:00 PM',
        venue: 'Grand Ballroom',
        name: null,
        homegroup: null,
        bio: null,
        photoUrl: null
    },
    {
        id: 'speaker-sat-noon',
        slot: 'Saturday Noon Speaker',
        time: 'Saturday 12:00 PM',
        venue: 'Grand Ballroom',
        name: null,
        homegroup: null,
        bio: null,
        photoUrl: null
    },
    {
        id: 'speaker-sat-night',
        slot: 'Saturday Night Speaker',
        time: 'Saturday 8:00 PM',
        venue: 'Grand Ballroom',
        name: null,
        homegroup: null,
        bio: null,
        photoUrl: null
    },
    {
        id: 'speaker-sun-spiritual',
        slot: 'Sunday Spiritual Speaker',
        time: 'Sunday 9:30 AM',
        venue: 'Grand Ballroom',
        name: null,
        homegroup: null,
        bio: null,
        photoUrl: null
    }
];

// App State
const state = {
    currentView: 'home',
    currentDay: 'friday',
    mySchedule: {
        friday: [],
        saturday: [],
        sunday: []
    },
    venueFilter: 'all',
    typeFilter: 'all'
};

// Load saved schedule from localStorage
function loadSavedSchedule() {
    const saved = localStorage.getItem('iaypaa-x-schedule');
    if (saved) {
        try {
            state.mySchedule = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading saved schedule:', e);
        }
    }
}

// Save schedule to localStorage
function saveSchedule() {
    localStorage.setItem('iaypaa-x-schedule', JSON.stringify(state.mySchedule));
}

// DOM Elements
const elements = {
    splashScreen: document.getElementById('splash-screen'),
    mainContent: document.getElementById('main-content'),
    searchModal: document.getElementById('search-modal'),
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),
    eventsList: document.getElementById('events-list'),
    myScheduleList: document.getElementById('my-schedule-list'),
    emptySchedule: document.getElementById('empty-schedule'),
    currentEvents: document.getElementById('current-events'),
    eventModal: document.getElementById('event-modal'),
    eventDetail: document.getElementById('event-detail'),
    moreDrawer: document.getElementById('more-drawer'),
    toastContainer: document.getElementById('toast-container'),
    venueFilter: document.getElementById('venue-filter'),
    typeFilter: document.getElementById('type-filter')
};

// Initialize App
function init() {
    loadSavedSchedule();
    setupEventListeners();
    renderCurrentEvents();
    renderCountdown();
    renderSpeakers();
    scheduleActiveReminders();
    setInterval(renderCountdown, 1000);

    // Hide splash screen after animation
    setTimeout(() => {
        elements.splashScreen.classList.add('hidden');
    }, 2000);
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => handleNavigation(btn.dataset.view));
    });
    
    document.querySelectorAll('[data-view]').forEach(btn => {
        btn.addEventListener('click', () => handleNavigation(btn.dataset.view));
    });
    
    // Day Tabs
    document.querySelectorAll('.day-tab').forEach(tab => {
        tab.addEventListener('click', (e) => handleDayChange(e.target));
    });
    
    // Search
    document.getElementById('search-btn').addEventListener('click', openSearch);
    document.getElementById('close-search').addEventListener('click', closeSearch);
    elements.searchInput.addEventListener('input', handleSearch);
    
    // Filters
    elements.venueFilter?.addEventListener('change', handleFilterChange);
    elements.typeFilter?.addEventListener('change', handleFilterChange);
    
    // More Drawer
    document.querySelector('.close-drawer')?.addEventListener('click', closeDrawer);
    document.querySelector('.drawer-overlay')?.addEventListener('click', closeDrawer);
    
    // Modal Close
    document.querySelector('.modal-close')?.addEventListener('click', closeEventModal);
    elements.eventModal?.addEventListener('click', (e) => {
        if (e.target === elements.eventModal) closeEventModal();
    });
    
    // Install Button
    document.getElementById('install-btn')?.addEventListener('click', handleInstall);
    
    // Share Button
    document.getElementById('share-btn')?.addEventListener('click', handleShare);
}

// Navigation Handler
function handleNavigation(view) {
    if (view === 'more') {
        openDrawer();
        return;
    }
    
    closeDrawer();
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === view);
    });
    
    // Update views
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
    });
    
    const viewElement = document.getElementById(`${view}-view`);
    if (viewElement) {
        viewElement.classList.add('active');
        state.currentView = view;
        
        // Render content based on view
        if (view === 'events') {
            renderEvents();
        } else if (view === 'my-schedule') {
            renderMySchedule();
        }
    }
}

// Day Change Handler
function handleDayChange(tab) {
    const day = tab.dataset.day;
    const container = tab.closest('.day-tabs, .my-schedule-tabs');
    
    container.querySelectorAll('.day-tab').forEach(t => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
    });
    
    state.currentDay = day;
    
    if (state.currentView === 'events') {
        renderEvents();
    } else if (state.currentView === 'my-schedule') {
        renderMySchedule();
    }
}

// Filter Handler
function handleFilterChange() {
    state.venueFilter = elements.venueFilter.value;
    state.typeFilter = elements.typeFilter.value;
    renderEvents();
}

// Render Events List
function renderEvents() {
    const events = scheduleData[state.currentDay] || [];
    let filteredEvents = events;
    
    // Apply filters
    if (state.venueFilter !== 'all') {
        filteredEvents = filteredEvents.filter(e => e.venue === state.venueFilter);
    }
    if (state.typeFilter !== 'all') {
        filteredEvents = filteredEvents.filter(e => e.type === state.typeFilter);
    }
    
    elements.eventsList.innerHTML = filteredEvents.map(event => createEventCard(event, true)).join('');
    
    // Add click handlers
    elements.eventsList.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => openEventModal(card.dataset.id));
    });
}

// Render My Schedule
function renderMySchedule() {
    const myEvents = state.mySchedule[state.currentDay] || [];
    
    if (myEvents.length === 0) {
        elements.myScheduleList.innerHTML = '';
        elements.emptySchedule.classList.remove('hidden');
        return;
    }
    
    elements.emptySchedule.classList.add('hidden');
    
    // Get full event data for saved IDs
    const allEvents = [...scheduleData.friday, ...scheduleData.saturday, ...scheduleData.sunday];
    const scheduleEvents = myEvents
        .map(id => allEvents.find(e => e.id === id))
        .filter(Boolean)
        .sort((a, b) => {
            const timeA = parseTime(a.time);
            const timeB = parseTime(b.time);
            return timeA - timeB;
        });
    
    elements.myScheduleList.innerHTML = scheduleEvents.map(event => 
        createEventCard(event, false, true)
    ).join('');
    
    // Add drag and drop
    setupDragAndDrop();
    
    // Add swipe to delete
    setupSwipeToDelete();
    
    // Add click handlers
    elements.myScheduleList.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!card.classList.contains('swiping')) {
                openEventModal(card.dataset.id);
            }
        });
    });
}

// Parse time string to minutes for sorting
function parseTime(timeStr) {
    const [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    return hours * 60 + minutes;
}

// Create Event Card HTML
function createEventCard(event, showAddIndicator = false, isDraggable = false) {
    const isAdded = isEventInSchedule(event.id);
    const draggableAttr = isDraggable ? 'draggable="true"' : '';
    const noteIndicator = hasNote(event.id) ? '<span class="note-indicator" title="Has notes">&#9998;</span>' : '';

    return `
        <div class="event-card ${isAdded && showAddIndicator ? 'added' : ''}"
             data-id="${event.id}"
             data-venue="${event.venue}"
             ${draggableAttr}>
            <div class="event-time">${event.time}${event.endTime ? ' - ' + event.endTime : ''}</div>
            <div class="event-title">${event.title} ${noteIndicator}</div>
            <div class="event-meta">
                <span class="event-venue">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${event.venueLabel}
                </span>
                <span class="event-type">${event.type}</span>
            </div>
            ${isDraggable ? '<div class="delete-indicator">&#128465;</div>' : ''}
        </div>
    `;
}

// Check if event is in schedule
function isEventInSchedule(eventId) {
    return Object.values(state.mySchedule).some(day => day.includes(eventId));
}

// Get day for event
function getDayForEvent(eventId) {
    for (const [day, events] of Object.entries(scheduleData)) {
        if (events.some(e => e.id === eventId)) {
            return day;
        }
    }
    return null;
}

// Open Event Modal
function openEventModal(eventId) {
    const allEvents = [...scheduleData.friday, ...scheduleData.saturday, ...scheduleData.sunday];
    const event = allEvents.find(e => e.id === eventId);
    
    if (!event) return;
    
    const isAdded = isEventInSchedule(eventId);
    
    const savedNote = getSavedNote(eventId);
    const day = getDayForEvent(eventId) || '';

    elements.eventDetail.innerHTML = `
        <div class="event-detail-time">${event.time}${event.endTime ? ' - ' + event.endTime : ''}</div>
        <h2 class="event-detail-title">${event.title}</h2>
        <div class="event-detail-info">
            <div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${event.venueLabel}</span>
            </div>
            <div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                </svg>
                <span>${capitalizeFirst(day)}</span>
            </div>
        </div>
        <p class="event-detail-description">${event.description}</p>
        <div class="event-notes">
            <label for="event-notes-input">My Notes</label>
            <textarea id="event-notes-input" placeholder="Add a personal note..." rows="2">${savedNote}</textarea>
        </div>
        <label class="reminder-toggle">
            <input type="checkbox" id="reminder-toggle" ${isReminderSet(eventId) ? 'checked' : ''}>
            <span>Remind me 10 min before</span>
        </label>
        <div class="event-detail-actions">
            <button class="btn-primary" id="toggle-schedule-btn">
                ${isAdded ? '&#10003; In My Schedule' : '+ Add to Schedule'}
            </button>
            <button class="btn-outline" id="share-event-btn">Share</button>
        </div>
    `;

    document.getElementById('toggle-schedule-btn').addEventListener('click', () => {
        toggleEventInSchedule(eventId);
        closeEventModal();
    });

    document.getElementById('share-event-btn').addEventListener('click', () => {
        const text = `${event.title}\n${capitalizeFirst(day)} ${event.time}\n${event.venueLabel}\n\nIAYPAA X - From Muck to Miracle\n${window.location.href}`;
        if (navigator.share) {
            navigator.share({ title: event.title, text: text }).catch(() => {});
        } else {
            navigator.clipboard.writeText(text);
            showToast('Event details copied!', 'success');
        }
    });

    document.getElementById('event-notes-input').addEventListener('blur', (e) => {
        saveNote(eventId, e.target.value);
    });

    document.getElementById('reminder-toggle').addEventListener('change', async () => {
        const granted = await requestNotificationPermission();
        if (granted) {
            toggleReminder(eventId);
        } else {
            document.getElementById('reminder-toggle').checked = false;
            showToast('Notifications blocked by browser');
        }
    });
    
    elements.eventModal.classList.remove('hidden');

    // Focus management
    const closeBtn = elements.eventModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    trapFocus(elements.eventModal);
}

let lastFocusedElement = null;

// Focus trap for modals
function trapFocus(element) {
    lastFocusedElement = document.activeElement;

    element._trapHandler = (e) => {
        if (e.key === 'Escape') {
            closeEventModal();
            return;
        }
        if (e.key !== 'Tab') return;

        const focusable = element.querySelectorAll('button, input, select, a[href], textarea');
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    };

    element.addEventListener('keydown', element._trapHandler);
}

// Close Event Modal
function closeEventModal() {
    elements.eventModal.classList.add('hidden');
    if (elements.eventModal._trapHandler) {
        elements.eventModal.removeEventListener('keydown', elements.eventModal._trapHandler);
    }
    if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

// Toggle Event in Schedule
function toggleEventInSchedule(eventId) {
    const day = getDayForEvent(eventId);
    if (!day) return;
    
    const index = state.mySchedule[day].indexOf(eventId);
    
    if (index > -1) {
        state.mySchedule[day].splice(index, 1);
        showToast('Removed from schedule');
    } else {
        state.mySchedule[day].push(eventId);
        showToast('Added to schedule', 'success');
    }
    
    saveSchedule();
    
    // Re-render if on events or my-schedule view
    if (state.currentView === 'events') {
        renderEvents();
    } else if (state.currentView === 'my-schedule') {
        renderMySchedule();
    }
}

// Remove Event from Schedule
function removeFromSchedule(eventId) {
    const day = getDayForEvent(eventId);
    if (!day) return;
    
    const index = state.mySchedule[day].indexOf(eventId);
    if (index > -1) {
        state.mySchedule[day].splice(index, 1);
        saveSchedule();
        showToast('Removed from schedule');
        renderMySchedule();
    }
}

// Drag and Drop Setup
function setupDragAndDrop() {
    const cards = elements.myScheduleList.querySelectorAll('.event-card');
    
    cards.forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        card.addEventListener('dragover', handleDragOver);
        card.addEventListener('drop', handleDrop);
        card.addEventListener('dragenter', handleDragEnter);
        card.addEventListener('dragleave', handleDragLeave);
    });
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.id);
}

function handleDragEnd() {
    this.classList.remove('dragging');
    document.querySelectorAll('.event-card').forEach(card => {
        card.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.preventDefault();
    if (this !== draggedElement) {
        this.classList.add('drag-over');
    }
}

function handleDragLeave() {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    
    if (this === draggedElement) return;
    
    const fromId = e.dataTransfer.getData('text/plain');
    const toId = this.dataset.id;
    
    // Reorder in schedule
    const day = state.currentDay;
    const fromIndex = state.mySchedule[day].indexOf(fromId);
    const toIndex = state.mySchedule[day].indexOf(toId);
    
    if (fromIndex > -1 && toIndex > -1) {
        state.mySchedule[day].splice(fromIndex, 1);
        state.mySchedule[day].splice(toIndex, 0, fromId);
        saveSchedule();
        renderMySchedule();
    }
}

// Swipe to Delete Setup
function setupSwipeToDelete() {
    const cards = elements.myScheduleList.querySelectorAll('.event-card');
    
    cards.forEach(card => {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        card.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            currentX = e.touches[0].clientX;
            const diff = startX - currentX;
            
            if (diff > 20) {
                card.classList.add('swiping');
                card.style.transform = `translateX(${-Math.min(diff, 100)}px)`;
            }
        });
        
        card.addEventListener('touchend', () => {
            isDragging = false;
            const diff = startX - currentX;
            
            if (diff > 80) {
                // Delete the event
                removeFromSchedule(card.dataset.id);
            } else {
                card.style.transform = '';
                card.classList.remove('swiping');
            }
        });
    });
}

// Render Current Events (for home page)
function renderCurrentEvents() {
    // For demo purposes, show upcoming events
    const upcomingEvents = scheduleData.friday.slice(0, 3);
    
    elements.currentEvents.innerHTML = `
        <p class="text-muted" style="color: var(--text-secondary); margin-bottom: var(--spacing-md);">
            Conference events coming soon! Check back during the event for live updates.
        </p>
        ${upcomingEvents.map(event => `
            <div class="event-card" data-id="${event.id}" data-venue="${event.venue}" style="cursor: pointer;">
                <div class="event-time">${event.time}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-meta">
                    <span class="event-venue">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${event.venueLabel}
                    </span>
                </div>
            </div>
        `).join('')}
    `;
    
    // Add click handlers
    elements.currentEvents.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => openEventModal(card.dataset.id));
    });
}

// Countdown Timer
function renderCountdown() {
    const container = document.getElementById('countdown');
    if (!container) return;

    const now = new Date();
    const diff = CONFERENCE_START - now;

    if (diff > 0) {
        // Before conference
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        container.innerHTML = `
            <div class="countdown-label">Conference starts in</div>
            <div class="countdown-boxes">
                <div class="countdown-box">
                    <div class="countdown-number">${days}</div>
                    <div class="countdown-unit">Days</div>
                </div>
                <div class="countdown-box">
                    <div class="countdown-number">${hours}</div>
                    <div class="countdown-unit">Hours</div>
                </div>
                <div class="countdown-box">
                    <div class="countdown-number">${minutes}</div>
                    <div class="countdown-unit">Min</div>
                </div>
                <div class="countdown-box">
                    <div class="countdown-number">${seconds}</div>
                    <div class="countdown-unit">Sec</div>
                </div>
            </div>
        `;
    } else if (now <= CONFERENCE_END) {
        // During conference
        const elapsed = now - CONFERENCE_START;
        const dayNum = Math.min(3, Math.floor(elapsed / (1000 * 60 * 60 * 24)) + 1);

        container.innerHTML = `
            <div class="countdown-live">We're Live!</div>
            <div class="countdown-day-indicator">Day ${dayNum} of 3</div>
        `;
    } else {
        // After conference
        container.innerHTML = `
            <div class="countdown-past">Thanks for coming! See you next year!</div>
        `;
    }
}

// Render Speakers
function renderSpeakers() {
    const grid = document.querySelector('.speakers-grid');
    if (!grid) return;

    grid.innerHTML = speakersData.map(speaker => {
        const hasPhoto = speaker.photoUrl;
        const hasName = speaker.name;

        return `
            <div class="speaker-card">
                <div class="${hasPhoto ? 'speaker-photo' : 'speaker-photo-placeholder'}">
                    ${hasPhoto
                        ? `<img src="${speaker.photoUrl}" alt="${speaker.name}" class="speaker-img">`
                        : `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                           </svg>`
                    }
                </div>
                <div class="speaker-info">
                    <h3 class="speaker-name">${hasName ? speaker.name : speaker.slot}</h3>
                    ${speaker.homegroup ? `<p class="speaker-homegroup">${speaker.homegroup}</p>` : ''}
                    <p class="speaker-bio">${speaker.bio || 'Speaker to be announced. Check back closer to the conference for details!'}</p>
                    <p class="speaker-time">${speaker.time} &mdash; ${speaker.venue}</p>
                </div>
            </div>
        `;
    }).join('');
}

// Personal Notes
function getSavedNote(eventId) {
    const notes = JSON.parse(localStorage.getItem('iaypaa-x-notes') || '{}');
    return notes[eventId] || '';
}

function saveNote(eventId, text) {
    const notes = JSON.parse(localStorage.getItem('iaypaa-x-notes') || '{}');
    if (text.trim()) {
        notes[eventId] = text.trim();
    } else {
        delete notes[eventId];
    }
    localStorage.setItem('iaypaa-x-notes', JSON.stringify(notes));
}

function hasNote(eventId) {
    const notes = JSON.parse(localStorage.getItem('iaypaa-x-notes') || '{}');
    return !!notes[eventId];
}

// Calendar Export (.ics)
function exportScheduleToICS() {
    const allEvents = [...scheduleData.friday, ...scheduleData.saturday, ...scheduleData.sunday];
    const myEventIds = [
        ...state.mySchedule.friday,
        ...state.mySchedule.saturday,
        ...state.mySchedule.sunday
    ];

    if (myEventIds.length === 0) {
        showToast('Add events to your schedule first');
        return;
    }

    const myEvents = myEventIds.map(id => allEvents.find(e => e.id === id)).filter(Boolean);

    const dayOffsets = { friday: 0, saturday: 1, sunday: 2 };

    let ics = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//IAYPAA X//EN\r\nCALSCALE:GREGORIAN\r\n';

    myEvents.forEach(event => {
        const day = getDayForEvent(event.id);
        const offset = dayOffsets[day] || 0;
        const eventDate = new Date(CONFERENCE_START);
        eventDate.setDate(eventDate.getDate() + offset);

        const startTime = parseTimeToDate(event.time, eventDate);
        const endTime = event.endTime ? parseTimeToDate(event.endTime, eventDate) : new Date(startTime.getTime() + 60 * 60 * 1000);

        // Handle events that cross midnight
        if (endTime <= startTime) {
            endTime.setDate(endTime.getDate() + 1);
        }

        ics += 'BEGIN:VEVENT\r\n';
        ics += `DTSTART:${formatICSDate(startTime)}\r\n`;
        ics += `DTEND:${formatICSDate(endTime)}\r\n`;
        ics += `SUMMARY:${event.title}\r\n`;
        ics += `LOCATION:${event.venueLabel} - Iowa Memorial Union\r\n`;
        ics += `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}\r\n`;
        ics += `UID:${event.id}@iaypaa-x\r\n`;
        ics += 'END:VEVENT\r\n';
    });

    ics += 'END:VCALENDAR';

    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'iaypaa-x-schedule.ics';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Schedule exported!', 'success');
}

function parseTimeToDate(timeStr, baseDate) {
    const [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    const d = new Date(baseDate);
    d.setHours(hours, minutes, 0, 0);
    return d;
}

function formatICSDate(date) {
    const pad = (n) => String(n).padStart(2, '0');
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
}

// Schedule Reminders
function loadReminders() {
    const saved = localStorage.getItem('iaypaa-x-reminders');
    return saved ? JSON.parse(saved) : {};
}

function saveReminders(reminders) {
    localStorage.setItem('iaypaa-x-reminders', JSON.stringify(reminders));
}

function isReminderSet(eventId) {
    return !!loadReminders()[eventId];
}

function toggleReminder(eventId) {
    const reminders = loadReminders();
    if (reminders[eventId]) {
        delete reminders[eventId];
        showToast('Reminder removed');
    } else {
        reminders[eventId] = true;
        showToast('Reminder set for 10 min before', 'success');
    }
    saveReminders(reminders);
    scheduleActiveReminders();
}

async function requestNotificationPermission() {
    if (!('Notification' in window)) return false;
    if (Notification.permission === 'granted') return true;
    if (Notification.permission === 'denied') return false;

    const permission = await Notification.requestPermission();
    return permission === 'granted';
}

let activeTimers = [];

function scheduleActiveReminders() {
    // Clear existing timers
    activeTimers.forEach(t => clearTimeout(t));
    activeTimers = [];

    const reminders = loadReminders();
    const now = new Date();
    const allEvents = [...scheduleData.friday, ...scheduleData.saturday, ...scheduleData.sunday];
    const dayOffsets = { friday: 0, saturday: 1, sunday: 2 };

    Object.keys(reminders).forEach(eventId => {
        const event = allEvents.find(e => e.id === eventId);
        if (!event) return;

        const day = getDayForEvent(eventId);
        const offset = dayOffsets[day] || 0;
        const eventDate = new Date(CONFERENCE_START);
        eventDate.setDate(eventDate.getDate() + offset);
        const eventTime = parseTimeToDate(event.time, eventDate);
        const reminderTime = new Date(eventTime.getTime() - 10 * 60 * 1000);
        const delay = reminderTime - now;

        if (delay > 0 && delay < 3 * 24 * 60 * 60 * 1000) {
            const timer = setTimeout(() => {
                if (Notification.permission === 'granted') {
                    new Notification(`${event.title} starts in 10 minutes`, {
                        body: `${event.venueLabel} \u2014 ${event.time}`,
                        icon: '/icons/icon-192.png'
                    });
                }
            }, delay);
            activeTimers.push(timer);
        }
    });
}

// Navigate to Events filtered by venue (for venue map)
function navigateToVenueEvents(venue) {
    state.venueFilter = venue;
    elements.venueFilter.value = venue;
    handleNavigation('events');
    renderEvents();
}

// Search Functions
function openSearch() {
    elements.searchModal.classList.remove('hidden');
    elements.searchInput.focus();
}

function closeSearch() {
    elements.searchModal.classList.add('hidden');
    elements.searchInput.value = '';
    elements.searchResults.innerHTML = '';
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length < 2) {
        elements.searchResults.innerHTML = '';
        return;
    }
    
    const allEvents = [...scheduleData.friday, ...scheduleData.saturday, ...scheduleData.sunday];
    const results = allEvents.filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.venueLabel.toLowerCase().includes(query) ||
        event.type.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        elements.searchResults.innerHTML = '<div class="no-results">No events found</div>';
        return;
    }
    
    elements.searchResults.innerHTML = results.map(event => createEventCard(event, true)).join('');
    
    // Add click handlers
    elements.searchResults.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
            closeSearch();
            openEventModal(card.dataset.id);
        });
    });
}

// Drawer Functions
function openDrawer() {
    elements.moreDrawer.classList.remove('hidden');
}

function closeDrawer() {
    elements.moreDrawer.classList.add('hidden');
}

// Toast Notifications
function showToast(message, type = '') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// PWA Install
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

function handleInstall() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                showToast('App installed!', 'success');
            }
            deferredPrompt = null;
        });
    } else {
        // Show manual install instructions
        showToast('Add to Home Screen from your browser menu');
    }
    closeDrawer();
}

// Share
async function handleShare() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'IAYPAA X - From Muck to Miracle',
                text: 'Check out the IAYPAA X conference app!',
                url: window.location.href
            });
        } catch (err) {
            console.log('Share cancelled');
        }
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!', 'success');
    }
    closeDrawer();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
