<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>The Mommy Network</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="shortcut icon" type="image/x-icon" href="img/fav.png" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">

    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>

    <!--[if IE]>
<style>
    .actual-form table {
         width: 100%;
    }
   
</style>
<![endif]-->
<style type="text/css">
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
     
    }
</style>
</head>

<body class="quiz">
    <main class="cf">
        <nav class="navbar navbar-default navbar-left-fixed">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" id="hamburger">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.php"><img src="img/logo.jpg" class="img-repsonsive"></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="#about-mome-network" rel="about-mome-network">
                        <span class="icon-span menu1">
                        </span>
                        <span class="menu-span">About The  <br/>Mommy Network</span></a></li>
                        <li><a href="#popup-2017" rel="popup-2017"><span class="icon-span menu2">
                        </span><span class="menu-span">The Mommy Network Popup</span></a></li>
                        <li><a href="#"><span class="icon-span menu3">
                        </span><span class="menu-span">Participating Brands</span></a></li>
                        <li><a href="#"><span class="icon-span menu4">
                        </span><span class="menu-span">Our Sponsors</span></a></li>
                        <li><a href="#"><span class="icon-span menu5">
                        </span><span class="menu-span">Take the Quiz</span></a></li>
                        <li><a href="#"><span class="icon-span menu6">
                        </span><span class="menu-span">Testimonials</span></a></li>
                        <li><a href="#"><span class="icon-span menu7">
                        </span><span class="menu-span">Say hello</span></a></li>
                    </ul>
                </div>
                <a href="#">
                    <div class="lucky">
                        <span class="icon-star menu8"></span>
                        <span class="lucky-span">Get Lucky!</span></div>
                </a>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <!-- Main jumbotron for a primary marketing message or call to action -->
        <div class="container-fluid main-container">
            <!-- Example row of columns -->

            <div class="body-content">
                
                <h1>Thank you</h1>

                <?php

                $mysqli = new mysqli('localhost', 'root', '','momi'); 

                if (isset($_POST['contest_form'])) {
                    $fname = $fphone = $email = $age = "";
                    if (isset($_POST['email'])) {
                        $fname = trim($_POST['fname']);
                        $fphone = trim($_POST['fphone']);
                        $email = trim($_POST['email']);
                        $age = trim($_POST['age']);
                        $type_of_mom = 'norm mom';
                        $query_string = "INSERT INTO `contest` (  `fname`,`fphone`,`email`, `age`, `type_of_mom`, `created_at` ) VALUES ( '".$fname."','".$fphone."','".$email."','".$age."','".$type_of_mom."', CURRENT_TIMESTAMP)";

                        if ($mysqli->query($query_string) === TRUE) {
                            echo "New record created successfully";
                          }
                      }

                  }









                 ?>     
                
            </div>

            
          
        </div>
    </main>
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-2">
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <p>All Rights Reserved &copy; The Mommy Network</p>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4 social-box">
                        <a href="#" target="_blank" class="social-media"><span class="facebook">
                        </span></a>
                        <a href="#" target="_blank" class="social-media"><span class="inst">
                        </span></a>
                        <a href="#" target="_blank" class="social-media">  <span class="twitter">
                        </span></a>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <p class="crafted"><a href="https://www.togglehead.in/" target="_blank">Crafted By Togglehead</a></p>
                    </div>
                    <div>
                    </div>
                </div>
    </footer>
    <!-- /container -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>
    window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')
    </script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.min.js"></script>
    <script src="js/validation.js"></script>

    <script src="js/main.js"></script>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <!-- <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script> -->
</body>

</html>