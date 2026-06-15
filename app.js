// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Offline/Online Detection
window.addEventListener('online', () => {
  document.getElementById('offline-indicator').style.display = 'none';
  console.log('Back online');
});

window.addEventListener('offline', () => {
  document.getElementById('offline-indicator').style.display = 'block';
  console.log('You are offline');
});

// Page Management
const pages = {
  home: `
    <div class="hero">
      <h2>Welcome to Helpers4U</h2>
      <p>Your Trusted Source for Reliable, On-Demand, and Once-Off Labour Solutions</p>
      <button class="cta-button" onclick="navigateTo('services')">Browse Services</button>
    </div>

    <section>
      <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Why Choose Helpers4U?</h2>
      <div class="services-grid" style="margin-bottom: 2rem;">
        <div class="service-card">
          <h3>✓ Reliable</h3>
          <p>Vetted professionals dedicated to quality service</p>
        </div>
        <div class="service-card">
          <h3>⚡ On-Demand</h3>
          <p>Quick booking and flexible scheduling options</p>
        </div>
        <div class="service-card">
          <h3>💰 Affordable</h3>
          <p>Competitive pricing for all your labour needs</p>
        </div>
      </div>
    </section>

    <section style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
      <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Our Commitment</h2>
      <p style="font-size: 1.05rem; line-height: 1.8; color: var(--light-text);">
        At Helpers4U, we understand that finding reliable labour solutions can be challenging. 
        That's why we've built a platform that connects you with skilled, trustworthy professionals 
        for all your domestic, property, and security needs. Whether you need a one-time service 
        or regular support, we're here to help.
      </p>
    </section>
  `,

  services: `
    <div>
      <h1 style="color: var(--primary-color); margin-bottom: 2rem;">Our Services</h1>
      
      <div class="services-grid">
        <div class="service-card">
          <h3>🏠 Domestic Services</h3>
          <p>Professional care and maintenance for your home</p>
          <ul class="service-list">
            <li>Washing & Ironing</li>
            <li>Deep Cleaning</li>
            <li>Au Pair Services</li>
            <li>Routine Maintenance</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>🌳 Property & Garden</h3>
          <p>Skilled manual labor for outdoor spaces</p>
          <ul class="service-list">
            <li>Plumbing Services</li>
            <li>Electrical Wiring</li>
            <li>Gardening & Landscaping</li>
            <li>Lawn Mowing</li>
            <li>Tree Felling</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>🔒 Security Services</h3>
          <p>Comprehensive protection and automation systems</p>
          <ul class="service-list">
            <li>Residential Guarding</li>
            <li>Gate & Garage Automation</li>
            <li>Electric Fencing</li>
            <li>CCTV Installation</li>
          </ul>
        </div>
      </div>

      <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); margin-top: 2rem;">
        <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Service Details</h2>
        
        <h3 style="color: var(--secondary-color); margin-top: 1.5rem; margin-bottom: 0.5rem;">1. Domestic Services</h3>
        <p style="color: var(--light-text); line-height: 1.6;">
          Professional care and maintenance for the interior of your home. Includes expert clothing and linen care, 
          deep cleaning, routine maintenance, post-event cleanup, and dedicated indoor and outdoor childcare tailored 
          to your family's schedule.
        </p>

        <h3 style="color: var(--secondary-color); margin-top: 1.5rem; margin-bottom: 0.5rem;">2. Property & Garden Maintenance</h3>
        <p style="color: var(--light-text); line-height: 1.6;">
          Skilled manual labor to keep your outdoor spaces and home infrastructure in peak condition. Our services include 
          general plumbing maintenance, safe electrical wiring installations, lawn grooming, seasonal weeding, tree felling, 
          and safe branch removal.
        </p>

        <h3 style="color: var(--secondary-color); margin-top: 1.5rem; margin-bottom: 0.5rem;">3. Security Services</h3>
        <p style="color: var(--light-text); line-height: 1.6;">
          Comprehensive protection and automation systems for ultimate peace of mind. We offer specialized security personnel 
          deployment for holidays or when you're away, smart gate and garage automation, electric fencing for secure perimeter 
          protection, and high-definition CCTV camera setups.
        </p>
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <button class="cta-button" onclick="navigateTo('booking')" style="background-color: var(--secondary-color); padding: 1rem 2rem; font-size: 1.1rem;">
          Book a Service
        </button>
      </div>
    </div>
  `,

  booking: `
    <div>
      <h1 style="color: var(--primary-color); margin-bottom: 2rem;">Book a Service</h1>
      
      <form class="booking-form" id="bookingForm">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" required placeholder="Enter your full name">
        </div>

        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email">
        </div>

        <div class="form-group">
          <label for="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number">
        </div>

        <div class="form-group">
          <label for="service">Service Type *</label>
          <select id="service" name="service" required>
            <option value="">Select a service...</option>
            <optgroup label="Domestic Services">
              <option value="washing">Washing & Ironing</option>
              <option value="cleaning">Cleaning</option>
              <option value="au-pair">Au Pair Services</option>
            </optgroup>
            <optgroup label="Property & Garden">
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical Wiring</option>
              <option value="gardening">Gardening & Landscaping</option>
              <option value="lawn">Lawn Mowing</option>
              <option value="tree">Tree Felling</option>
            </optgroup>
            <optgroup label="Security Services">
              <option value="guarding">Residential Guarding</option>
              <option value="automation">Gate & Garage Automation</option>
              <option value="fencing">Electric Fencing</option>
              <option value="cctv">CCTV Installation</option>
            </optgroup>
          </select>
        </div>

        <div class="form-group">
          <label for="date">Preferred Date *</label>
          <input type="date" id="date" name="date" required>
        </div>

        <div class="form-group">
          <label for="time">Preferred Time *</label>
          <input type="time" id="time" name="time" required>
        </div>

        <div class="form-group">
          <label for="description">Service Description *</label>
          <textarea id="description" name="description" required placeholder="Describe the service you need in detail..."></textarea>
        </div>

        <button type="submit" class="submit-btn">Submit Booking Request</button>
      </form>

      <div id="booking-success" style="display: none; margin-top: 2rem; background: var(--success-color); color: white; padding: 2rem; border-radius: 12px; text-align: center;">
        <h2>✓ Booking Submitted Successfully</h2>
        <p>We'll contact you shortly to confirm your booking details.</p>
      </div>
    </div>
  `
};

// Navigation
function navigateTo(pageName) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  
  // Show selected page
  let page = document.getElementById(`page-${pageName}`);
  if (!page) {
    page = document.createElement('div');
    page.id = `page-${pageName}`;
    page.className = 'page';
    page.innerHTML = pages[pageName] || '<p>Page not found</p>';
    document.getElementById('page-container').appendChild(page);
  }
  page.classList.add('active');

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-page="${pageName}"]`).classList.add('active');

  // Scroll to top
  window.scrollTo(0, 0);
}

// Event Listeners
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    navigateTo(btn.dataset.page);
  });
});

// Booking Form Handler
document.addEventListener('submit', function(e) {
  if (e.target.id === 'bookingForm') {
    e.preventDefault();
    
    const formData = new FormData(this);
    const booking = Object.fromEntries(formData);
    
    // Save to local storage for offline support
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    booking.id = Date.now();
    booking.submitted_at = new Date().toISOString();
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Show success message
    this.style.display = 'none';
    document.getElementById('booking-success').style.display = 'block';
    
    console.log('Booking saved:', booking);
    
    // Reset form after delay
    setTimeout(() => {
      this.reset();
      this.style.display = 'block';
      document.getElementById('booking-success').style.display = 'none';
      navigateTo('home');
    }, 3000);
  }
});

// Set minimum date to today
const dateInput = document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().split('T')[0];
  const dateInputElement = document.getElementById('date');
  if (dateInputElement) {
    dateInputElement.min = today;
  }
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Set minimum date to today for all future page loads
  const updateMinDate = () => {
    const dateInputElement = document.getElementById('date');
    if (dateInputElement) {
      const today = new Date().toISOString().split('T')[0];
      dateInputElement.min = today;
    }
  };

  updateMinDate();
  navigateTo('home');

  // Watch for page changes and update min date
  const observer = new MutationObserver(updateMinDate);
  observer.observe(document.getElementById('page-container'), { childList: true, subtree: true });
});

// Install prompt for PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // You can show an install button here if desired
  console.log('Install prompt is ready');
});
