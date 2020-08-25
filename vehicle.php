<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ABC Motors Sales</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="dist/css/vehicles.css">
</head>
<body>



<!-- app -->
<div id="home">

   <?php include("partials/header.php"); ?>


    <!-- main -->
    <div id="main">
        
        <!-- banner -->
        <div id="banner">
            <ul>
                <li><a href="#">New Inventory</a></li>
                <li><a href="#">Year</a></li>
                <li><a href="#">Make</a></li>
                <li><a href="#">Model</a></li>
            </ul>

        </div>
        <!-- banner -->



        <!-- vehicle -->
        <div id="vehicle">

            <!-- left -->
            <div id="left">
                <div id="top">
                    <div class="vehicle-image">
                        <img src="https://via.placeholder.com/750x450/000/?text=Vehicle+Image" />
                    </div>
                </div>    
            </div>    
            <!-- left -->

            <!-- right -->
            <div id="right">
                <h1 class="vehicle-title">Year Make Model</h1>
                
                <!-- pricing -->
                <div class="pricing">
                    <div class="price-text"><p>Sales Price</p></div>
                    <div class="price-amnt"><p>$24,000</p></div>
                </div>
                <!-- pricing -->

                <!-- vehicle details -->
                <div class="vehicle-details">
                    
                    <ul>
                        <li>
                            <div class="label">Exterior</div>
                            <div class="description">Red</div>
                        </li>
                        <li>
                            <div class="label">Transmission</div>
                            <div class="description">Automatic</div>
                        </li>
                        <li>
                            <div class="label">Interior</div>
                            <div class="description">Tan</div>
                        </li>
                        <li>
                            <div class="label">MPG</div>
                            <div class="description">32 City / 44 Hwy</div>
                        </li>
                    </ul>        

                </div>
                <!-- vehicle details -->

                <!-- buttons -->
                <div class="buttons">
                    <ul class="button-block">
                        <li class="button-item"><a href="#" class="button">Get Pre-Approved</a></li>
                        <li class="button-item"><a href="#" class="button">Schedule Test Drive</a></li>
                        <li class="button-item"><a href="#" class="button">Reserve This Vehicle</a></li>
                    </ul>
                </div>
                <!-- buttons -->
            
            
            </div>    
            <!-- right -->

           
        </div>
        <!-- vehicle -->

        
        <!-- similar -->
        <div id="similar">
            <?php include("services/partials/vehicle-four.php"); ?>        
        </div>
        <!-- similar -->



    </div>
    <!-- main -->




</div>
<!-- app -->













<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="dist/js/all-min.js"></script>
<script src="dist/js/buttons-min.js"></script>
<script src="dist/js/modals-min.js"></script>
<!--<script src="dist/js/chatus-min.js"></script>-->
<!--<script src="dist/js/inventory-min.js"></script>-->


<script type="text/javascript">


</script




</body>
</html>