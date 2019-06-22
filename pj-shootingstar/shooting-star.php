<style>
    body {
        background-color: black;
        color: white;
    }
</style>


<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
    <title> aka.Akatsuki Project </title>
    <meta name="discription" content="流れ星" >
  </head>

<body>

<form action="shooting-star.php" method="post">
	<input type="radio" name="version" value="1" >Ver.1
	<input type="radio" name="version" value="2" style="margin-left:20px;">Ver.2
	<input type="radio" name="version" value="3" style="margin-left:20px;">Ver.3
	<input type="submit" value="Change" style="margin-left:20px;">
</form>
<div>

<?php 
  if (isset($_POST['version'])) {
    $select = $_POST['version'];
    switch ($select) {
    	case 1:
    		echo('<script src="shooting-star-001.js"></script>');
			break;
		case 2:
    		echo('<script src="shooting-star-002.js"></script>');
			break;
		case 3:
    		echo('<script src="shooting-star-003.js"></script>');
			break;
    }    

  } else {
    echo('<script src="shooting-star-001.js"></script>');
  }
?>


</body>
</html>
