function order(product) {
  const phone = "97798XXXXXXXX"; // your WhatsApp number
  const msg = `Hello, I want to top up: ${product}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
}

function scrollToStore() {
  document.getElementById("store").scrollIntoView({ behavior: "smooth" });
}
