document.getElementById("code").innerText =
  localStorage.getItem("productCode");

document.getElementById("amount").innerText =
  localStorage.getItem("totalAmount");

function goToQR() {
  let mobile = document.getElementById("mobile").value;

  if (mobile === "") {
    alert("Enter mobile number");
    return;
  }

  localStorage.setItem("customerMobile", mobile);
  window.location.href = "qr.html";
}
