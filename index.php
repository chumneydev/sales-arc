<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ABC Motors Sales</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" href="dist/css/home.css">
    <link rel="stylesheet" href="dist/css/slick-theme.css">
    <link rel="stylesheet" href="dist/css/main.css">
    <link rel="stylesheet" href="dist/css/url-switcher.css">
</head>
<body>



<!-- app -->
<div id="home">

   <?php include("partials/header.php"); ?>


    <!-- main -->
    <div id="main">
        
        <!-- search -->
        <div id="search">
            <form>
                <div class="item">
                    <select class="ca-select" name="make">
                        <option>Category</option>
                        <option value="fair">Fair</option>
                        <option value="good">Good</option>
                        <option value="excellent">Excellent</option>
                    </select>
                </div>
                <div class="item">
                    <select class="ca-select" name="make">
                        <option>Year</option>
                        <option value="fair">Fair</option>
                        <option value="good">Good</option>
                        <option value="excellent">Excellent</option>
                    </select>
                </div>

                <div class="item">
                    <select class="ca-select" name="make">
                        <option>Make</option>
                        <option value="fair">Fair</option>
                        <option value="good">Good</option>
                        <option value="excellent">Excellent</option>
                    </select>
                </div>

                <div class="item">
                    <select class="ca-select" name="make">
                        <option>Model</option>
                        <option value="fair">Fair</option>
                        <option value="good">Good</option>
                        <option value="excellent">Excellent</option>
                    </select>
                </div>

                <div class="item">
                    <button>Search Inventory</button>
                </div>
            </form>


        </div>
        <!-- search -->



        <!-- slides -->
        <div id="slides">
            <div class="inner">
            <div><img src="./dist/images/slides/slides-corolla.jpg" /></div>
            <div><img src="./dist/images/slides/slides-crv.jpg" /></div>
            <div><img src="./dist/images/slides/slides-nautilus.jpg" /></div>
            <div><img src="./dist/images/slides/slides-xc40.jpg" /></div>


            </div>
        </div>
        <!-- slides -->

        
        <!-- featured -->
        <div id="featured">
        
        </div>
        <!-- featured -->

        <!-- copy -->
        <div id="copy">
            <p>We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new and used inventory, as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing.</p>

            <p>At our dealership, we have devoted ourselves to helping and serving our customers to the best of our ability. We believe the cars we offer are the highest quality and ideal for your life needs. We understand that you rely on our web site for accurate information, and it is our pledge to deliver you relevant, correct, and abundant content.</p>

            <p>Please do not hesitate to contact us with any questions you may have. Our staff is happy to answer any and all inquiries in a timely fashion. We look forward to doing business with you!</p>
        </div>
        <!-- copy -->



    </div>
    <!-- main -->




</div>
<!-- app -->


   <?php include("partials/urls.php"); ?>











<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="dist/js/all-min.js"></script>
<script src="dist/js/chatus-min.js"></script>
<script src="dist/js/modals-min.js"></script>
<script src="dist/js/url-switcher.js"></script>
<!--<script src="dist/js/inventory-min.js"></script>-->



<script type="text/javascript">
    $('.inner').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        arrows: true,
        autoplay: true
    });


</script




</body>
</html>