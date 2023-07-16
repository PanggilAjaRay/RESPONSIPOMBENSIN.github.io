window.onload = function() {
    document.getElementById("tanggal").value = getCurrentDate();
    loadTransactions();
    
    document.getElementById("transaction-form").addEventListener("submit", function(event) {
      event.preventDefault();
      submitTransaction();
    });
  };
  
  function getCurrentDate() {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1; // January is 0
    var year = today.getFullYear();
    
    if (date < 10) {
      date = "0" + date;
    }
    
    if (month < 10) {
      month = "0" + month;
    }
    
    return year + "-" + month + "-" + date;
  }
  
  function submitTransaction() {
    var tanggal = document.getElementById("tanggal").value;
    var jenisBensin = document.getElementById("jenis_bensin").value;
    var jumlahLiter = document.getElementById("jumlah_liter").value;
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        loadTransactions();
      }
    };
    xhr.send("tanggal=" + tanggal + "&jenis_bensin=" + jenisBensin + "&jumlah_liter=" + jumlahLiter);
  }
  
  function loadTransactions() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "display_transactions.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("riwayat_transaksi").innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  