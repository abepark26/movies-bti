<?php
include($_SERVER['DOCUMENT_ROOT']."/config/db.php");
include($_SERVER['DOCUMENT_ROOT']."/config/Question.php");

//select the database
$conn->select_db($db);

//run a query
$sql = "SELECT * FROM questions";
$questions = [];
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $obj = new Question($row);
        array_push($questions, $obj);
    }
} else {
    echo "no results";
}
