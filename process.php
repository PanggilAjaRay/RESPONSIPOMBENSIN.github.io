<?php
$tanggal = $_POST['tanggal'];
$jenis_bensin = $_POST['jenis_bensin'];
$jumlah_liter = $_POST['jumlah_liter'];

if ($jenis_bensin == 'Solar') {
  $harga = 6500;
} elseif ($jenis_bensin == 'Pertalite') {
  $harga = 8000;
} elseif ($jenis_bensin == 'Pertamax') {
  $harga = 10000;
}

$total_harga = $harga * $jumlah_liter;

$data = "$tanggal\t$jenis_bensin\t$jumlah_liter\t$total_harga" . PHP_EOL;
file_put_contents('transactions.txt', $data, FILE_APPEND);

echo "success";
?>
