document.getElementById("product").innerText =
  localStorage.getItem("selectedProduct");

document.getElementById("code").innerText =
  localStorage.getItem("productCode");

document.getElementById("price").innerText =
  localStorage.getItem("totalAmount");

document.getElementById("total").innerText =
  localStorage.getItem("totalAmount");

document.getElementById("mobile").innerText =
  localStorage.getItem("confirmMobile");

document.getElementById("txn").innerText =
  localStorage.getItem("transactionId");

document.getElementById("date").innerText =
  localStorage.getItem("orderDate");

document.getElementById("bill").innerText =
  localStorage.getItem("billNumber");

function downloadPDF() {
  let element = document.getElementById("invoice");

  html2pdf().from(element).save(
    localStorage.getItem("billNumber") + ".pdf"
  );
}
