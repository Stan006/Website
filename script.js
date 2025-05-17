// Scroll To Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Theme Switcher
const themeSwitcher = document.getElementById('themeSwitcher');
let darkMode = localStorage.getItem('darkMode') === 'true';

if (darkMode) {
  document.body.classList.add('dark-mode');
  themeSwitcher.textContent = 'Switch to Light Mode';
} else {
  themeSwitcher.textContent = 'Switch to Dark Mode';
}

themeSwitcher.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  themeSwitcher.textContent = darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  localStorage.setItem('darkMode', darkMode);
});

// Cookie Consent
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-consent-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  const consent = localStorage.getItem('cookieConsent');

  if (consent === 'accepted') {
    banner.style.display = 'none';
    enableGoogleTracking();
  } else if (consent === 'rejected') {
    banner.style.display = 'none';
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
    enableGoogleTracking();
    console.log('Cookies accepted');
  });

  rejectBtn.addEventListener("click", function () {
    localStorage.setItem('cookieConsent', 'rejected');
    banner.style.display = 'none';
    console.log('Cookies rejected');
  });

  function enableGoogleTracking() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2FD0X1BBMS';
    document.head.appendChild(script);

    script.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-2FD0X1BBMS');
      console.log('Google Analytics tracking enabled');
    };
  }
});
