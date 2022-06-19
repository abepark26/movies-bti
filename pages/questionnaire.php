<!DOCTYPE html>
<html>

<head>
    <title>Movies-BTI</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no">
    <link rel="stylesheet" href="/styles/reset.css">
    <link rel="stylesheet" href="/styles/questionnaire.css">

    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/config/load_db.php");
    ?>

    <div class="main-container">
        <header><span class='gauge-bar'><span class='gauge'></span></span></header>
        <div class="carousel"></div>
    </div>
    <script type='text/javascript'>
        var questions = <?php echo json_encode($questions); ?>;
    </script>
    <script src="/scripts/mbtiContext.js">
    </script>
</body>

</html>