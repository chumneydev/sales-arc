<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ABC Motors Sales</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="dist/css/home.css">
    <link rel="stylesheet" href="dist/css/inventory.css">
</head>
<body>



<!-- app -->
<div id="home">

   <?php include("partials/header.php"); ?>



    <!-- content -->
    <div id="main">

        <!-- switcher -->
        <div id="switcher">
            <h1>Database Email Campaigns</h1>
            <ul>
                <li><a href="#">Buy Back</a></li>
                <li><a href="#">Competitor's Database</a></li>
                <li><a href="#">Equity High Interest</a></li>
                <li><a href="#">Equity</a></li>
                <li><a href="#">EZ-Upgrade</a></li>
                <li><a href="#">High Interest</a></li>
                <li><a href="#">Lease</a></li>
                <li><a href="#">Lost Customer Scratch-off</a></li>
                <li><a href="#">Top Trades</a></li>
            </ul>
        </div>
        <!-- switcher -->

        <div id="content-wrapper">
            <div id="alert">
                <div id="alert-icon">
                    <i class="far fa-comment-alt"></i> 
                </div>
                <div id="alert-text">
                    <p>Choose your selection on the left to view an example of the campaign</p>
                </div>
            </div>

        </div>
    </div>
    <!-- content -->

</div>
<!-- app -->













<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="dist/js/all-min.js"></script>
<!--<script src="dist/js/chatus-min.js"></script>-->
<script src="dist/js/mix.it.up.js"></script>
<script src="dist/js/mix-min.js"></script>

<script src="dist/js/reader-min.js"></script>
<!--<script src="dist/js/inventory-min.js"></script>-->


<script type="text/javascript">
    $({ VehicleCount: 0 }).animate({
            VehicleCount: $('#count').text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function() {
                $('#count').text(Math.ceil(this.VehicleCount));
            }
        });

</script




</body>
</html>