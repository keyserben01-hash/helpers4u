# Helpers4U - Progressive Web Application

A modern Progressive Web Application (PWA) for Helpers4U, a specialised labour centre broker offering domestic services, property maintenance, and security solutions.

## Features

- **📱 Progressive Web App**: Install on your home screen for app-like experience
- **🚀 Offline Support**: Browse services and submit bookings even without internet
- **📱 Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **⚡ Fast Performance**: Optimized service worker for quick load times
- **🔐 Secure**: HTTPS required for PWA functionality
- **💾 Local Storage**: Bookings saved locally for later submission

## Services Offered

### 1. Domestic Services
- Washing & Ironing
- Cleaning & Maintenance
- Au Pair Services
- Post-event Cleanup

### 2. Property & Garden Maintenance
- Plumbing Services
- Electrical Wiring
- Gardening & Landscaping
- Lawn Mowing
- Tree Felling & Branch Removal

### 3. Security Services
- Residential Guarding
- Gate & Garage Automation
- Electric Fencing
- CCTV Installation

## Getting Started

### Prerequisites
- Node.js and npm (for development server)
- Modern web browser with PWA support

### Installation

1. Clone the repository:
```bash
git clone https://github.com/keyserben01-hash/helpers4u.git
cd helpers4u
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:8000`

### Deployment

For production deployment:

1. **Ensure HTTPS**: PWAs require HTTPS (except for localhost)
2. **Upload to hosting**: Deploy all files to your web server
3. **Update manifest.json**: Ensure the `start_url` matches your domain
4. **Add icons**: Replace placeholder icons in `/assets/` with your actual icons

## Project Structure

```
helpers4u/
├── index.html              # Main HTML file
├── styles.css             # Global styling
├── app.js                 # Main application logic
├── service-worker.js      # Service worker for offline support
├── manifest.json          # PWA manifest configuration
├── package.json           # Project dependencies
├── README.md              # This file
└── assets/                # Icons and images (placeholder)
    ├── icon-192x192.png
    ├── icon-512x512.png
    └── screenshots/
```

## PWA Features

### Service Worker
- Caches essential resources on first visit
- Provides offline functionality with network-first strategy
- Automatically updates cached content

### Manifest
- Define app name, icons, and display mode
- Set theme colors and orientation
- Configure start URL and scope

### Installation
The app can be installed on:
- **Android**: Chrome, Firefox, Edge browsers
- **iOS**: Safari (iOS 15+)
- **Desktop**: Chrome, Edge, Opera (Windows/Linux/Mac)

Users can:
1. Tap the "Install" prompt in the browser
2. Or use the browser menu → "Install app"

## Usage

### Browse Services
- View all available services organized by category
- Learn about each service in detail

### Book a Service
1. Navigate to the Booking page
2. Fill in your contact information
3. Select the service type
4. Choose preferred date and time
5. Add service description
6. Submit your booking

### Offline Support
- Bookings are saved locally when submitted offline
- They'll be ready to sync when connection is restored
- Check browser console for sync status

## Browser Support

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome  | ✅ 50+  | ✅ 50+ |
| Firefox | ✅ 44+  | ✅ 48+ |
| Safari  | ✅ 11+  | ✅ 15+ |
| Edge    | ✅ 15+  | ✅ 17+ |

## API Integration

Currently, the app uses local storage for bookings. For production:

1. **Backend Integration**: Create API endpoints for:
   - `/api/bookings/create` - Submit booking requests
   - `/api/services/list` - Fetch service list
   - `/api/auth` - User authentication

2. **Update app.js**: Replace localStorage calls with API requests

3. **Background Sync**: Implement workbox library for background sync

## Performance Optimizations

- Lazy loading of pages
- CSS compression and optimization
- Service worker caching strategies
- Minimal JavaScript bundle size

## Security Considerations

- All data transmitted over HTTPS
- No sensitive data stored in local storage
- Service worker validates all cached requests
- Input validation on booking forms

## Development

### Adding New Pages

1. Add page content to the `pages` object in `app.js`:
```javascript
pages.newpage = `<h1>New Page Content</h1>`;
```

2. Add navigation button to `index.html`:
```html
<button class="nav-btn" data-page="newpage">New Page</button>
```

### Customizing Styles

Edit `styles.css` to modify:
- Color scheme (CSS variables in `:root`)
- Responsive breakpoints
- Component styling

### Building for Production

```bash
npm run build
```

## Maintenance

### Icons
Place brand icons in `/assets/`:
- `icon-192x192.png` - Small icon
- `icon-512x512.png` - Large icon
- `icon-maskable-192x192.png` - Maskable format
- `icon-maskable-512x512.png` - Maskable format

### Screenshots
Add app screenshots for the app store:
- `screenshot-540x720.png` - Mobile
- `screenshot-1280x720.png` - Desktop

## Future Enhancements

- [ ] User authentication and accounts
- [ ] Payment integration
- [ ] Booking history and management
- [ ] Push notifications
- [ ] Rating and review system
- [ ] Admin dashboard
- [ ] Real-time booking updates
- [ ] Multiple language support

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test on multiple devices
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Contact

For support or inquiries:
- Email: support@helpers4u.com
- Phone: [Contact number]
- Website: [Your website]

## Changelog

### Version 1.0.0
- Initial PWA setup
- Basic service catalog
- Booking system
- Offline support
- Responsive design

---

**Made with ❤️ for Helpers4U**
