function submitTopup() {
  const userid = document.getElementById("userid").value;
  const diamonds = document.getElementById("diamonds").value;
  const payment = document.getElementById("payment").value;

  if (!userid) {
    alert("User ID tidak boleh kosong!");
    return;
  }

  const result = document.getElementById("result");
  result.style.display = "block";
  result.innerHTML = `
    ✅ Pesanan berhasil dibuat! <br><br>
    User ID: <b>${userid}</b> <br>
    Paket: <b>${diamonds} Diamonds</b> <br>
    Pembayaran via: <b>${payment}</b> <br><br>
    Silakan lanjutkan pembayaran sesuai instruksi.
  `;
}
