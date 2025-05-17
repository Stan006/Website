<script>
document.addEventListener("DOMContentLoaded", () => {
  // --- Scroll To Top Button ---
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
    scrollToTopBtn.setAttribute("aria-label", "Scroll to top");
    scrollToTopBtn.style.display = "none";

    let scrollTimer;
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollToTopBtn.style.display = scrollY > 20 ? "block" : "none";
      }, 50);
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- Theme Switcher ---
  const themeSwitcher = document.getElementById("themeSwitcher");
  let darkMode = localStorage.getItem("darkMode") === "true";

  if (themeSwitcher) {
    themeSwitcher.setAttribute("role", "button");
    themeSwitcher.setAttribute("tabindex", "0");
    themeSwitcher.setAttribute("aria-pressed", darkMode.toString());
    themeSwitcher.textContent = darkMode
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";

    themeSwitcher.addEventListener("click", toggleTheme);
    themeSwitcher.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  function toggleTheme() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle("dark-mode", darkMode);
    if (themeSwitcher) {
      themeSwitcher.setAttribute("aria-pressed", darkMode.toString());
      themeSwitcher.textContent = darkMode
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
    }
    localStorage.setItem("darkMode", darkMode);
  }

  // --- Cookie Consent Banner ---
  const banner = document.getElementById("cookie-consent-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  if (banner && acceptBtn && rejectBtn) {
    const consent = localStorage.getItem("cookieConsent");

    if (consent === "accepted") {
      banner.style.display = "none";
      loadAnalytics();
    } else if (consent === "rejected") {
      banner.style.display = "none";
    } else {
      banner.classList.add("show");
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted");
      banner.style.display = "none";
      loadAnalytics();
    });

    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "rejected");
      banner.style.display = "none";
    });
  }

  function loadAnalytics() {
    if (document.getElementById("gtag-script")) return;

    const script = document.createElement("script");
    script.id = "gtag-script";
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-2FD0X1BBMS";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-2FD0X1BBMS");
      console.log("Google Analytics tracking enabled");
    };
  }
});
</script>
