<?php
$transactions = file('transactions.txt');

foreach ($transactions as $transaction) {
  $fields = explode("\t", $transaction);
  echo "<tr>";
  echo "<td>$fields[0]</td>";
  echo "<td>$fields[1]</td>";
  echo "<td>$fields[2]</td>";
  echo "<td>$fields[3]</td>";
  echo "</tr>";
}
?>
