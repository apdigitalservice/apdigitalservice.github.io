document.getElementById("code").innerText =
  localStorage.getItem("productCode");

document.getElementById("amount").innerText =
  localStorage.getItem("totalAmount");

function payNow() {
  let mobile = document.getElementById("mobile").value;

  if (mobile === "") {
    alert("Enter mobile number");
    return;
  }

  let transactionId = "TXN" + Math.floor(Math.random() * 1000000);

  document.getElementById("status").innerHTML =
    "Payment Successful! <br> Transaction ID: " + transactionId;
}
