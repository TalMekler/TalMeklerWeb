<?php

if(isset($_POST['submit-reg-form'])){
    $name = $_POST['reg-name'];
    $phone = $_POST['reg-phone'];
    $email = $_POST['reg-email'];

    $mailTo = "tal.mekler11@gmail.com";
    $mailTxt = "Name: ".$name."\n\nPhone Number: ".$phone."\n\nEmail: ".$email."\n\nLeave his details the website (TM Developer).";

    $headers = "From: ".$email;
    if(mail($mailTo, "New Message From TM Developer", $mailTxt, $headers)){
        header("Location: index.php");
    }
}
if(isset($_POST['submit-open-form'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $mailTo = "tal.mekler11@gmail.com";
    $mailTxt = "Name: ".$name."\n\nPhone Number: ".$phone."\n\nEmail: ".$email."\n\nLeave his details the website (TM Developer).";

    $mailStatus = false;
    $headers = "From: ".$email;
    if(mail($mailTo, "New Message From TM Developer", $mailTxt, $headers)){
        $mailStatus = true;
    }
}


?>

<!-- <!DOCTYPE html> -->
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TM Developer</title>

    <script type="text/javascript" src="jquery-3.5.1.min.js"></script>
    <script src="https://kit.fontawesome.com/3744ced7eb.js" crossorigin="anonymous"></script>


    <link rel="shortcut icon" href="imgs/logo-img.png" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;700&display=swap" rel="stylesheet">

</head>
<body>
    <div id="open-contact-us">
        <div class="open-contact-us-wrapper">
            <i class="fas fa-times" id="close-contact-us-div"></i>
            <h1>Contact Us</h1>
            <form action="" method="post">
                <div class="input-div">
                    <div class="input-title" id="input-name">Name</div><input class="input-field" type="text" name="name" autocomplete="off" required>
                </div>
                <div class="input-div">
                    <div class="input-title" id="input-phone">Phone number</div><input class="input-field" type="tel" name="phone" pattern="[0-9]{10}" autocomplete="off" required>
                </div>
                <div class="input-div">
                    <div class="input-title" id="input-email">email address</div><input class="input-field" type="email" name="email" autocomplete="off" required>
                </div>
                <input id="submit-btn-open-form" type="submit" name="submit-open-form" value="Send">
            </form>
        </div>
    </div>
    <header>
        <div class="header-wrapper">
            <a href="#" id="logo-wrapper-link">
                <div class="logo">
                    <i class="fas fa-play logo-sign"></i>
                    <span class="logo-text">
                        TM Developer
                    </span>
                </div>
            </a>
            
            <div class="nav-bar">
                <i class="fas fa-bars btn" id="bars-btn"></i>
            </div>
            <div id="open-bar">
                <i class="fas fa-times btn" id="close-bar-btn"></i>
                <div class="links">
                    <a href="#features" class="bar-link">Features</a>
                    <a href="#responsive-design" class="bar-link">responsive web design</a>
                    <a href="#" class="bar-link conatct-btn">contact us</a>
                </div>
            </div>
        </div>
    </header>

    <section class="start">
        <h1>be proffesional today</h1>
        <div class="desc">
            every respectful business has to have it's website in order to grow it's audience and to gain more costumers.<br>
            <span>we are here for you</span>
        </div>
        <div class="btn-wrapper">
            <button class="conatct-btn">Get started now</button>
        </div>
    </section>
    <div class="glue light-to-dark"></div>

    <section id="features" class="features">
        <h1>sites features</h1>
        <div class="desc">
            Our sites are built with a combination of several <br>elements and languages
        </div>
        <div class="features-container">
            <div class="feature">
                <i class="fab fa-html5 feature-logo"></i>
                <h3>HTML</h3>
                <p>Today most sites are built in this language, as it carries with it many benefits such as: support for all platforms, a dynamic and attractive site.</p>
            </div>
            <div class="feature">
                <i class="fab fa-sass feature-logo"></i>
                <h3>CSS / SASS</h3>
                <p>The function of the CSS language is to define the appearance of the elements written in the HTML language.<br>
                Sass is an extension to the CSS language.</p>
            </div>
            <div class="feature">
                <i class="fab fa-js-square feature-logo"></i>
                <h3>JavaScript</h3>
                <p>Dynamic programming language adapted for integration in websites. The language expands the capabilities of the HTML language and thus enables the creation of more sophisticated web applications.<br>
                In fact, most modern websites incorporate this language.</p>
            </div>
            <div class="feature">
                <i class="fab fa-php feature-logo"></i>
                <h3>PHP</h3>
                <p>PHP is a powerful, convenient and useful tool for creating dynamic and sophisticated websites.<br>
                Using PHP, all activities are performed on the server.<br>
                This programming method is called server-side programming.</p>
            </div>
            <div class="feature last-feature">
                <i class="fas fa-database feature-logo"></i>
                <h3>SQL - Database</h3>
                <p>Is a declarative computer language for handling and processing information in databases.<br>
                The language allows data to be retrieved and updated.</p>
            </div>
        </div>
    </section>
    <div class="glue dark-to-light"></div>

    <section class="contact-form-wrapper" id="contact-form-wrapper">
        <div class="contact-form">
            <form action="index.php" method="post">
                <input type="text" name="reg-name" placeholder="Enter Your Name" autocomplete="off" required>
                <input type="tel" name="reg-phone" pattern="[0-9]{10}" placeholder="Enter Your Phone Number" autocomplete="off" required>
                <input type="email" name="reg-email" placeholder="Enter Your Email" autocomplete="off" required>
                <input type="submit" name="submit-reg-form" value="Submit">
            </form>
        </div>
    </section>

    <section class="responsive-design" id="responsive-design">
        <h1>responsive web design</h1>
        <div class="desc">
            <img src="imgs/responsive-design.png" class="desc-img">
            <div class="desc-text">
                <h2>adapted for computer and mobile</h2>
                <p>
                    We build the site when it is adapted for both Computer and Mobile.<br>
                    <span class="red">Why Mobile?</span> <span class="green">You already know!<br></span>
                    The whole world is on mobile and we want to reach as many customers as possible.
                </p>
            </div>
        </div>
    </section>
    <div class="glue light-to-dark"></div>

    <section class="leave-your-details">
        <h2>what are you waiting for?</h2>
        <p>Click the button below and leave your details</p>
        <div class="btn">
            <button class="conatct-btn">Click Here</button>    
        </div>
    </section>
    
    <script src="scripts/js-script.js"></script>
</body>
</html>