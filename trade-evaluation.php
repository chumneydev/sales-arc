<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ABC Motors Sales</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="dist/css/scratch-off.css">
</head>
<body>



<!-- app -->
<div id="home">

   <?php include("partials/header.php"); ?>

    <div id="wrapper">


    <!-- content -->
    <div id="content">
        <div class="video">
            <video controls  playsinline="playsinline">
                <source src="./video/video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        
        <div class="copy">
        <p>Thanks for visiting our Instant Trade Evaluation site! You’re just a few clicks away from seeing how much your current ride is worth. ABC Motors is eager to replenish our vehicle inventory, and we’re ready to pay you CASH ON THE SPOT for your auto.</p>
                
        <ul>
            <li>Simply go fill out the form on this site, including the details about your vehicle – year, make, model, approximate mileage and condition.</li>
            <li>We’ll come to you to confirm your vehicle’s appraisal and take your auto with us.</li>
            <li>You get a payment on the spot for your ride.</li>
        </ul>
                
        <p>And don’t forget to scratch off your exclusive offer!</p>
                
        <p>The process has never been easier to turn your car into cash! Fill out the form now to get top dollar for your current ride from ABC Motors.</p>
    </div>



    </div>
    <!-- content -->
    
    <!-- contact -->
    <div id="demo">
        
        <div id="scratch">
            <img src="./dist/images/scratchoff-bottom.jpg" alt="scratch" />
        </div>
        
            <h2>Tell Us About Your Vehicle</h2>

        <form method="post" action="mailer-adf.php">
            <div class="column">
                <input type="text" name="fullname" id="fullname" required placeholder="Full Name">
            </div>

            <div class="column">
                <input type="text" name="email" id="email" required placeholder="Email Address">
            </div>
    
            <div class="column">
                <input type="text" name="phone" id="phone" required placeholder="Phone Number">
            </div>
    
            <div class="column">
                <input type="text" name="year" id="year" required placeholder="Year">
            </div>
            <div class="column">
                <input type="text" name="make" id="make" required placeholder="Make">
            </div>
            <div class="column">
                <input type="text" name="model" id="model" required placeholder="Model">
            </div>
            <div class="column">
                <input type="text" name="mileage" id="mileage" required placeholder="Approx. Mileage">
            </div>

            <div class="column">
                <select class="ca-select" name="condition">
                    <option>Select Your Vehicle Condition</option>
                    <option value="fair">Fair</option>
                    <option value="good">Good</option>
                    <option value="excellent">Excellent</option>
                </select>
            </div>

            <div class="column">
                <button type="submit" id="submit" name="submit" class="btn">Yes, Pay Me Top Dollar For My Vehicle!</button>
            </div>
        </form>
    </div>
    <!-- contact -->


    </div>









</div>
<!-- app -->














<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="https://theautohost.com/_assets/coding/custom/database-emails/bundle/dist/js/ScratchIt.min.js"></script>
<script src="dist/js/all-min.js"></script>
<!--<script src="dist/js/chatus-min.js"></script>-->

<!--<script src="dist/js/inventory-min.js"></script>-->


<script type="text/javascript">
        var containerEl = document.getElementById('scratch'),
       overlayImgUrl = './dist/images/scratchoff-top.jpg',
        
        brushImgUrl = './dist/images/brush1.png',
        revealPercent = 50;

        // event handler that fades out the overlay once 50% of it has been removed
        function onReveal() {
            containerEl.className += ' revealed';

            if (window.navigator.userAgent.indexOf("Edge") > -1) {
                document.getElementsByTagName('canvas')[0].style.width = '100%';
            }
        }

        if (ScratchIt.isSupported()) {
            ScratchIt(containerEl, overlayImgUrl, brushImgUrl, onReveal, revealPercent);
        }
</script




</body>
</html>