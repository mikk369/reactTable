<?php
//add CORS headers
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Methods: * ");
header("Access-Control-Allow-Headers: * ");

//Get db connection
require_once '../db/db_connect.php';



$query = "SELECT users.*, orders.*
          FROM users
          JOIN orders ON users.id = orders.user_id
          WHERE users.id = 1";

$result = mysqli_query($connection, $query);

if (!$result) {
    die("Database query failed: " . mysqli_error($connection));
}

echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));

mysqli_close($connection);
?>