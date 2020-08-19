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
            <div><img src="https://via.placeholder.com/1200x350/000/?text=Vehicle+Image" /></div>
            <div><img src="https://via.placeholder.com/1200x350/000/?text=Vehicle+Image" /></div>
            <div><img src="https://via.placeholder.com/1200x350/000/?text=Vehicle+Image" /></div>
            <div><img src="https://via.placeholder.com/1200x350/000/?text=Vehicle+Image" /></div>


            </div>
        </div>
        <!-- slides -->

        
        <!-- featured -->
        <div id="featured">
        
        </div>
        <!-- featured -->



    </div>
    <!-- main -->




</div>
<!-- app -->













<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="dist/js/all-min.js"></script>
<!--<script src="dist/js/chatus-min.js"></script>-->
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