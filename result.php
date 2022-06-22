<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<!-- for icons -->
	<script src="https://kit.fontawesome.com/03dc9b7cde.js" crossorigin="anonymous"></script>
	<!-- page styling -->
	<link rel="stylesheet" href="css-result.css">

	<title>Movies-BTI</title>
	<script language="javascript">
		<?php
		// receive the user's mbti type from previous questionnaire page
		$mbti = $_GET['mbti'];
		// get data from a separate json file to match user's mbti type with our database
		$json = file_get_contents("MBTI.json");
		$data = json_decode($json, true);
	
		// since the api address for this page will be different based on user's mbti type (16 possibilities)
		// to make combining process easy,
		// I hardcoded the rest of the api address that does not change

		$url_first_chunk = '"https://unogsng.p.rapidapi.com/search?country_andorunique=or&start_year=1990&end_year=2021&end_rating=10&genrelist=';
		$url_second_chunk = '&type=Movie&audiosubtitle_andor=or&orderby=Date&countrylist=78&limit=1"';

		/*
	// unused feature

	// $anchor_first_chunk = '<a href="/library.html#';
	// $anchor_second_chunk = '"><i class="fas fa-search"></i> Click here to continue browsing ';
	// $anchor_third_chunk = ' films</a>';

	// $anchor = $anchor_first_chunk . $genre . $anchor_second_chunk . $genre . $anchor_third_chunk;
	*/

		foreach ($data as $result) {
			$type = $result['MBTI'];

			// compare current user's mbti type with the mbti types stored in our JSON file
			if ($type == $mbti) {
				// if it matches, store the other information of that personality type
				// to display the result
				$user_type = $type;
				$genre = $result['genre'];
				$header = $result['header'];
				$description = $result['description'];

				// create API url to connect to the server and an address for the anchor tag 
				$url = $url_first_chunk . $result['code'] . $url_second_chunk;

				// since connecting to api will be happening in Javascript,
				// I echoed api url to make it accessible outside of php
				echo "url_api =" . $url . ";";
			}
		}

		?>

		// api to unofficial netflix database
		settings = {
			"async": true,
			"crossDomain": true,
			// each url will be made with a different genre code, based on a user's personality type
			"url": url_api,
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "7bdb253dc3mshc115ce058612866p1973c2jsnaff2114a976a",
				"x-rapidapi-host": "unogsng.p.rapidapi.com"
			}
		};

		// if the setting is finished, get a poster of a movie of the given genre, and display it on this page.
		$.ajax(settings).done(function(response) {

			var image = '<img class="img-fluid mx-auto d-block" src="' + response["results"][0]["poster"] + ' alt="movie poster" />';
			document.getElementById("poster").innerHTML = image;

		});
	</script>
</head>

<body>

	<img class="img-fluid mx-auto d-block" src="/public/icons/movie.svg" style="width:40px; height:40px;" />

	<div id="poster">


	</div>

	<div>
		<p class="characteristic font-weight-bold"><?php echo $header; ?></p>
		<p class="font-weight-bold mbti-header"><?php echo $genre; ?></p>
		<p><?php echo "Your MBTI type is $user_type"; ?></p>
		<p><i class="fas fa-quote-left"></i><?php echo " $description "; ?><i class="fas fa-quote-right"></i></p>

	</div>

	<div>

		<a href="library.html"><i class="fas fa-search"></i> Find more movies on MOVIES-BTI <i class="fas fa-forward"></i></a>

	</div>

</body>

</html>