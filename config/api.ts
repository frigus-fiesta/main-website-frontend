export const API_BASE_URL = process.env.BACKEND_API_BASE_URL || 'http://127.0.0.1:8787';

export const API_ENDPOINTS = {
    // Admin Endpoints
    createEvent: `${API_BASE_URL}/admin/events`, // Scheduling an event
    updateEventbyId: (eventId: string) => `${API_BASE_URL}/admin/events/update/${eventId}`, // Updating an event by id takes all paramaeters else fails with status 400
    deleteEventbyId: (eventId: string) => `${API_BASE_URL}/admin/events/delete/${eventId}`, // Deleting an event by id
    confirmationEmail: `${API_BASE_URL}/admin/mail/confirmation`, // Sending Confirmation Email
    announcementEmail: `${API_BASE_URL}/admin/mail/announcement`, // Sending Announcement Email
    newsletterEmail: `${API_BASE_URL}/admin/mail/newsletter`, // Sending Newsletter Email
    dataFetch: `${API_BASE_URL}/admin/data`, // Fetching entire Data at once tablewise

    // User Endpoints 
    getEvents: `${API_BASE_URL}/events`, // Fetching all events
    getEventById: (eventId: string) => `${API_BASE_URL}/events/${eventId}`, // Fetching a specific event by ID
    registerForEvent: `${API_BASE_URL}/events/register`, // Registering for an event
    cancelRegistration: `${API_BASE_URL}/events/cancel`, // Cancelling registration for an event
    sendContactForm: `${API_BASE_URL}/contact`, // Sending contact form data
    subscribeNewsletter: `${API_BASE_URL}/newsletter/subscribe`, // Subscribing to the newsletter
    unsubscribeNewsletter: `${API_BASE_URL}/newsletter/unsubscribe`, // Unsubscribing from the newsletter
    bookApointment: `${API_BASE_URL}/appointment`, // Booking an appointment
    getAppointmentById: (appointmentId: string) => `${API_BASE_URL}/appointment/${appointmentId}`, // Fetching a specific appointment by ID
    cancelAppointment: `${API_BASE_URL}/appointment/cancel`, // Canceling an appointment

    // Review Endpoints
    getReviewsbyEventId: (eventId: string) => `${API_BASE_URL}/reviews/${eventId}`, // Fetching reviews for a specific event
    addReview: `${API_BASE_URL}/reviews`, // Adding a review for an event
    updateReview: `${API_BASE_URL}/reviews/update`, // Updating a review for an event
    deleteReview: `${API_BASE_URL}/reviews/delete`, // Deleting a review for an
    event: `${API_BASE_URL}/reviews/delete`, // Deleting a review for an event

}