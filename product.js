let quantity = 1;
let price = 100;

document.getElementById("productTitle").innerText =
  localStorage.getItem("selectedProduct");

function updatePrice() {
  price = parseInt(document.getElementById("package").value);
  calculateTotal();
}

function increase() {
  quantity++;
  document.getElementById("qty").innerText = quantity;
  calculateTotal();
}

function decrease() {
  if (quantity > 1) {
    quantity--;
    document.getElementById("qty").innerText = quantity;
    calculateTotal();
  }
}

function calculateTotal() {
  document.getElementById("price").innerText = price;
  document.getElementById("total").innerText = price * quantity;
}

function checkout() {
  localStorage.setItem("totalAmount", price * quantity);
  localStorage.setItem("productCode", "AP" + Math.floor(Math.random() * 100000));
  window.location.href = "checkout.html";
}
