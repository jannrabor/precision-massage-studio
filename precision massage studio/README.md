# Precision Massage Studio — website update

## What changed
- New 60-minute description emphasizing clients can choose full-body or targeted work.
- Proposed pricing: 60 min $95, 90 min $135, 120 min $175; deep-pressure upgrade +$30.
- Added `booking.html` with service choices and booking provider connection area.
- All booking buttons on the homepage lead to `booking.html`.

## Updating your existing VS Code project
Replace the old `index.html`, `style.css`, `script.js`, and `README.md` with these versions, and ADD `booking.html`. Keep them in the same folder. Open `index.html` with Live Server and test the booking links.

## Connecting real appointments with Square
1. Create a Square Appointments account at https://squareup.com/us/en/appointments.
2. Create three appointment services with durations/prices matching the website; add the $30 deep-pressure enhancement according to your business settings.
3. Set your actual hours and 20-minute cleanup/buffer time; review whether the provider adds buffer time to each appointment.
4. Square Dashboard > Appointments > Online Booking > Channels: enable online booking, then use Get URL for your booking flow.
5. In `script.js`, replace `const BOOKING_URL = '';` with `const BOOKING_URL = 'https://YOUR-ACTUAL-SQUARE-BOOKING-URL';` and save.
6. Test by making a TEST booking, verify calendar blocking and owner notifications, then cancel the test.

IMPORTANT: Until a real provider URL is configured, the calendar button is disabled and no bookings or texts happen. A static website on GitHub Pages cannot securely send you SMS by itself. Square can send customers SMS reminders/notifications (subject to plan/settings), but receiving an SMS on YOUR phone for EVERY new booking is a distinct feature and may require a third-party automation/SMS provider; verify availability/pricing before promising this on your site. Business-owner email or app push alerts are a useful fallback. Do not put SMS API secrets into script.js.

## GitHub Pages
Upload the FIVE files to the repository ROOT, go to Settings > Pages > Deploy from a branch > main > /(root) and save. Do not upload the zip alone.

## Before launch
Confirm your exact business pricing, address/contact info, practitioner credentials, policies, accessibility, and booking provider details. Prices are suggested, not a claim about your real published menu.
