/* assets/js/main.js */

// 1. Initialize Lenis (Butter Smooth Scroll)
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. Mobile Menu Toggle
function toggleMenu() {
  const overlay = document.getElementById("mobileOverlay");
  const bars = document.querySelectorAll(".bar");

  overlay.classList.toggle("active");

  // Animate Burger Icon
  if (overlay.classList.contains("active")) {
    bars[0].style.transform = "rotate(45deg) translate(5px, 6px)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
  } else {
    bars[0].style.transform = "none";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "none";
  }
}

// 3. WhatsApp Inquiry Logic
function buyOnWhatsapp(productName, productImage) {
  const phoneNumber = "919714154356";
  // Clean URL if it's relative
  const fullImageUrl = productImage.startsWith("http")
    ? productImage
    : window.location.origin + "/" + productImage;

  const message = `Hello Bhakti Decor, I am interested in:%0A%0A*Product:* ${productName}%0A*Link:* ${window.location.href}`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, "_blank");
}
