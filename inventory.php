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

    <!-- contact -->
    <div id="contact">
        <p><i class="fas fa-phone-alt"></i> Call Us: 864-555-1234</p>
    </div>
    <!-- contact -->

    <!-- header -->
    <div id="header" class="flex">
        <div id="logo">
            <img src="dist/images/logo.png" />
        </div>

        <div id="nav">
            <ul>
                <li><a href="#">Entrance Modal</a></li>
                <li><a href="#">Exit Modal</a></li>
                <li><a href="#">Scratch-off Modals</a></li>
                <li><a href="#">Video Modals</a></li>
                <li><a href="#">Hover Buttons</a></li>
                <li><a href="#">Insertion Buttons</a></li>
                <li><a href="#">Database Email Campaigns</a></li>
            </ul>
                
        </div>
    </div>
    <!-- header -->



    <!-- inventory -->
    <div id="inventory">
        <div id="results">
            <div id="vehicle-count">
                <h1><span id="count">195</span> Vehicles Found</h1>
            </div>
    
            <div id="search">
			    <ul>
				    <li><a class="control" data-filter="all" href="#"><i class="far fa-ballot"></i></a></li>
				    <li><a class="control" class="control" data-sort="default:asc" href="#"><i class="far fa-sort-amount-up-alt"></i></a></li>
				    <li><a class="control" data-sort="default:desc" href="#"><i class="far fa-sort-amount-down-alt"></i></a></li>
                    <li><input type="text" class="input" data-ref="input-search" placeholder="Vehicle Search"/></li>

                </ul>

            </div>
        </div>
        
        <div id="inventory-wrapper">
            <?php include("services/partials/vehicle-multi.php"); ?>        
        </div>
    </div>
    <!-- inventory -->

</div>
<!-- app -->













<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="dist/js/all-min.js"></script>
<!--<script src="dist/js/chatus-min.js"></script>-->
<script src="dist/js/reader-min.js"></script>

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