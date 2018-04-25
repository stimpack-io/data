<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Creative - Start Bootstrap Theme</title>

    <!-- Custom fonts for this template -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

    <!-- Plugin CSS -->
    <!-- Custom styles for this template -->
    <link href="css/app.css" rel="stylesheet">

  </head>

  <body id="page-top">
    
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
          <img src="img/stimpack_favicon.png">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Laravel Stimpack</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#services">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="https://andersjurisoo.com">Login</a>
              </li>            
          </ul>
        </div>
      </div>
    </nav>

    <header class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong><i>stimpack</i></strong>
            </h1>            
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">Introducing a powerful project manipulation engine for the Laravel community.</p>            
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">What the heck is this?</a>            
          </div>
        </div>
      </div>
    </header>

    <section div class="masthead bg-primary section-video" id="about">
        <iframe width="100%" height="800" src="http://www.youtube.com/embed/C6CluJd9Hy0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </section>

    <section class="bg-dark text-white">
        <div class="container text-center">            
          <h2 class="mb-4">Join us!</h2>
          <p>As of 15:th of april Laravel Stipack is in public beta.</p>
          <img src="img/stimpack_favicon.png" width="400px"><br>
          <a class="btn btn-light btn-xl sr-button" href="http://startbootstrap.com/template-overviews/creative/">Connect with github</a>                    
        </div>
      </section>

    <script src="{{asset('js/marketingPage.js')}}" ></script>
  </body>

</html>
