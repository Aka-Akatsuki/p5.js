<style>
    body {
        background-color: black;
        color: white;
    }
    p,form {
       font-family: "ＭＳ ゴシック",sans-serif; 
       font-size: 13px;
    }
    form {
       font-size: 16px;
    }
</style>


<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
    <title> aka.Akatsuki Project -- Make a wish on a star -- </title>
    <meta name="discription" content="流れ星 Make a wish on a star" >
  </head>

<body>

<form action="shooting-star.php" method="post">
	<?php 
	    $msg = "Ver を えらんで Change を おすと まえの ばーじょん がみれます   ";
	    if (isset($_POST['version'])) {
	      if ($_POST['version'] == 1) {$msg = $msg . ">> Version 1  「ほし が えがけるようになる」";}
	      if ($_POST['version'] == 2) {$msg = $msg . ">> Version 2  「ほし が いくつも えがけるようになる」";}
	      if ($_POST['version'] == 3) {$msg = $msg . ">> Version 3  「ほし に いろをつけ、かいてん させる」";}
	      if ($_POST['version'] == 4) {$msg = $msg . ">> Version 4  「ほし が いどうする」";}
	    }
	    echo("<p>" . $msg . "</p>");
   ?>
   

	<input type="radio" name="version" value="1" 
	<?php 
	  if (isset($_POST['version'])) {
	    if ($_POST['version'] == 1) {echo("checked='Checked'");}
	  }
   ?>
	>Ver.1
	
	<input type="radio" name="version" value="2" style="margin-left:20px;"
	<?php 
	  if (isset($_POST['version'])) {
	    if ($_POST['version'] == 2) {echo("checked='Checked'");}
	  }
   ?>
	>Ver.2
	
	<input type="radio" name="version" value="3" style="margin-left:20px;"
	<?php 
	  if (isset($_POST['version'])) {
	    if ($_POST['version'] == 3) {echo("checked='Checked'");}
	  }
   ?>
	>Ver.3
	
	<input type="radio" name="version" value="4" style="margin-left:20px;"
	<?php 
	  if (isset($_POST['version'])) {
	    if ($_POST['version'] == 4) {echo("checked='Checked'");}
	  }
   ?>
	>Ver.4

	<input type="submit" value="Change" style="margin-left:40px;">

	
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
		case 4:
    		echo('<script src="shooting-star-004.js"></script>');
			break;
    }    

  } else {
    echo('<script src="shooting-star-004.js"></script>');
  }
?>


</body>
</html>
