function placeOrder() {

  let mobile = document.getElementById("mobileConfirm").value;
  let txn = document.getElementById("transactionId").value;

  if (mobile === "" || txn === "") {
    alert("Mobile number and Transaction ID are required!");
    return;
  }

  localStorage.setItem("confirmMobile", mobile);
  localStorage.setItem("transactionId", txn);

  // Generate unique bill number
  let billNo = "BILL" + Date.now();
  localStorage.setItem("billNumber", billNo);

  // Save date
  let date = new Date().toLocaleString();
  localStorage.setItem("orderDate", date);

  window.location.href = "success.html";
}
