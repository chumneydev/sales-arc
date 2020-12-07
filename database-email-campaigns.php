<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ABC Motors Sales</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="dist/css/home.css">
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
                <li><a href="#" class="loader" data-img="./services/emails/buy-back.png">Buy Back</a></li>
                <li><a href="#" class="loader" data-img="./services/emails/competitors-database.png">Competitor's Database</a></li>
                <li><a href="#" class="loader" data-img="./services/emails/equity-high-interest.png">Equity High Interest</a></li>
                <li><a href="#" class="loader" data-img="./services/emails/high-interest.png">High Interest</a></li>
                <li><a href="#" class="loader" data-img="./services/emails/lease-end.png">Lease End</a></li>
                <li><a href="#" class="loader" data-img="./services/emails/lost-customer.png">Lost Customer</a></li>
                <li><a href="#" class="loader" data-img="./services/emails/top-trades.png">Top Trades</a></li>
            </ul>
        </div>
        <!-- switcher -->

        <div id="content-wrapper">
            <div id="alert">
                <div id="alert-icon">
                    <i class="far fa-comment-alt"></i> 
                </div>
                <div id="alert-text">
                    <p>Choose your selection on the left to view an example of the email campaign.</p>
                </div>
            </div>

            <!-- emails -->
            <div id="emails"></div>
            <!-- emails -->


        </div>
    </div>
    <!-- content -->

</div>
<!-- app -->














<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="dist/js/all-min.js"></script>
<!--<script src="dist/js/chatus-min.js"></script>-->

<!--<script src="dist/js/inventory-min.js"></script>-->


<script type="text/javascript">
    $('.loader').click(function (e) {

        $('.loader').removeClass('active');
        $(this).addClass('active');


        //e.preventDefault();
        var dataURL = $(this).data('img');
        console.log(dataURL);

        var imgSrc = '<a href="./custom-landing-page.php"><img src="' + dataURL + '" /></a>';

        $("#emails").hide().html(imgSrc).fadeIn('slow', 'swing');
        $(newImg);




    })



</script




</body>
</html>