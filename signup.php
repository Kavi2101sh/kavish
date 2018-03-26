<?php 
error_reporting(E_ALL);
require "connection.php";
$name=htmlspecialchars($_POST["name"]);
$email=htmlspecialchars($_POST["email"]);
$mobile=(int)htmlspecialchars($_POST["mobile"]);
$password=htmlspecialchars($_POST["password"]);
$gender=htmlspecialchars($_POST['gender']);
$dob=date("Y-m-d",strtotime($_POST['dateofbirth']));
$address=htmlspecialchars($_POST['addr']);
$descr=htmlspecialchars($_POST["description"]);
$target_dir = "/var/www/html/hestabook/photo/";
$target_file = $target_dir . basename($_FILES["file_img"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
$x=move_uploaded_file($_FILES["file_img"]["tmp_name"], $target_file);
if ($x) {
   	echo "The file ". basename( $_FILES["file_img"]["name"]). " has been uploaded.";
    }
else {
   	echo "Sorry, there was an error uploading your file.";
}

$sql = "INSERT INTO user (name, email,mobile,password,gender,dob,address,description,picture) VALUES ('$name', '$email',$mobile,'$password','$gender','$dob','$address','$descr','$target_file');";
		if ($conn->query($sql) === TRUE) 
		{
    	echo "New record created successfully";
    	header("location:newlogin.php");
	} 
	else
	 {
    	echo "Error: " . $sql . "<br>" . $conn->error;
		}
	
?>