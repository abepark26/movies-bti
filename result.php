<!DOCTYPE html>
<html>

<head>
	<title>Movies-BTI</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no">
	<link rel="stylesheet" href="/styles/result.css">
	<!-- jquery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<!-- google fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab" />
	<?php
	if (empty($_POST["mbti"])) {
		header("Location: /index.html");
		exit;
	}
	$php_data = $_POST["mbti"];

	?>
	<script type="text/javascript">
		var user_data = "<?php echo $php_data; ?>";
	</script>
</head>

<body>
	<div class="main-container">
		<div class="wrapper">
			<div class="adjectives"></div>
			<div class="genre"></div>
			<div class="description"></div>
			<div class="button-wrapper">
				<button onClick="window.location='/';">
					Restart
				</button>
			</div>
		</div>
	</div>
	<script src="/scripts/resultContext.js"></script>
</body>

</html>