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



    <!-- inventory -->
    <div id="inventory">

        <!-- top -->
        <div id="top">
            <div id="start" class="masthead">
                <h1><span id="count">195</span> Vehicles Found</h1>
            </div>

            <div id="center" class="masthead">
                <div id="search">
                    <input type="text" class="input" data-ref="input-search" placeholder="Search for Vehicles"/>
                </div>    
            </div>

            <div id="end" class="masthead">
                <ul>
				    <li><a class="control" href="#"><i class="far fa-ballot"></i></a></li>
				    <li><a class="control" data-sort="default:asc" href="#"><i class="far fa-sort-alpha-up-alt"></i></a></li>
				    <li><a class="control" data-sort="default:desc" href="#"><i class="far fa-sort-alpha-down"></i></a></li>
				    <li><a class="control" data-sort="price:asc" href="#"><i class="far fa-sort-amount-up"></i></a></li>
				    <li><a class="control" data-sort="price:desc" href="#"><i class="far fa-sort-amount-down-alt"></i></a></li>
                </ul>
            </div>
        
        </div>
        <!-- top -->


        
        <div id="inventory-wrapper" data-ref="container">
            <?php include("services/partials/vehicle-multi.php"); ?>        
        </div>

        <div id="pagination">
            <ul>
                <li><a href="#" class="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
                <li><a href="#">7</a></li>
                <li><a href="#">8</a></li>
                <li><a href="#">9</a></li>
                <li><a href="#">10</a></li>
                <li><a href="#">Next</a></li>
            </ul>
    </div>
    <!-- inventory -->

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