<!DOCTYPE html>
<html>

<head>
  <title>Movies-BTI</title>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no" />
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" href="/styles/reset.css" />
  <link rel="stylesheet" href="/styles/main.css" />
  <!-- jquery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <!-- google fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab" />
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XZB5YLT59B"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-XZB5YLT59B');
  </script>
</head>

<body>
  <div class="main-wrapper">
    <img src="/svgs/movie.svg" class="logo" />
    <p style="font-size: 24px">What movie genre are you?</p>
    <p style="font-size: 14px">self-recognition test</p>
    <div class="button-wrapper">
      <button onClick="window.location='/questionnaire.php';">
        Begin
      </button>
    </div>
  </div>
</body>

</html>