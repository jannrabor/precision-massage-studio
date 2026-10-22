// Paste the Square Appointments booking URL here after setting up your Square calendar.
// Example: const BOOKING_URL = 'https://square.site/book/YOUR-REAL-BOOKING-LINK';
const BOOKING_URL = '';
const liveBooking = BOOKING_URL.startsWith('https://');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Homepage always links to the custom booking page.
// The actual appointment calendar is provided by Square, not static GitHub Pages.
const bookingButton = document.querySelector('#external-booking');
if (bookingButton) {
  if (liveBooking) {
    bookingButton.href = BOOKING_URL;
    bookingButton.textContent = 'View available appointments ↗';
    bookingButton.removeAttribute('aria-disabled');
    bookingButton.target = '_blank';
    bookingButton.rel = 'noopener noreferrer';
    document.querySelector('#calendar-status').textContent = 'You will finish your booking securely on our scheduling provider’s page.';
    document.querySelector('#booking-explainer').textContent = 'Find an available date and time in our secure booking calendar. Select your preferred session and share your areas of focus during booking or your consultation.';
  } else {
    bookingButton.addEventListener('click', (event) => event.preventDefault());
  }
}
const price = {'60':'$95','90':'$135','120':'$175'};
document.querySelectorAll('.book-option').forEach(link => {
  link.addEventListener('click', () => {
    const duration = link.dataset.duration;
    document.querySelector('#selected-session').textContent = `${duration}-minute massage · ${price[duration]}`;
    document.querySelector('#calendar-description').textContent = liveBooking
      ? 'Continue to the calendar and select this service duration. Your chosen focus areas can be discussed before the session.'
      : 'Calendar preview only. Real appointment selection becomes available after connecting a booking provider.';
    document.querySelectorAll('.book-option').forEach(item => item.removeAttribute('aria-current'));
    link.setAttribute('aria-current','true');
  });
});
