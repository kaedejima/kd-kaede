
function navbar(page) {
  var navbar = "<nav class='navbar navbar-expand-lg navbar-dark static-top fixed-top'> <div class='container'> <a class='navbar-brand' href='./index.html'> <img id='kdlogo' src='./images/kdlogo.png' alt=''> </a> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation' id='hamburger'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarResponsive'> <ul class='navbar-nav ml-auto'> <li class='nav-item'> <a class='nav-link' id='nav-home' href='./index.html'>Home </a> </li> <li class='nav-item'> <a class='nav-link' id='nav-about' href='index.html#about'>About</a> </li> <li class='nav-item'> <a class='nav-link' id='nav-skills' href='index.html#skills'>Skills</a> </li> <li class='nav-item'> <a class='nav-link' id='nav-works' href='index.html#works'>Works </a> </li> <li class='nav-item'> <a class='nav-link' id='nav-sayhi' href='#say-hi'>Say-Hi!</a> </li> </ul> </div> </div> </nav>";
  document.write(navbar);
  (function () {
    document.getElementById("nav-" + page).classList.toggle("active")
  })();
};
function navbarWorks(page) {
  var navbar = "<nav class='navbar navbar-expand-lg navbar-dark static-top fixed-top'> <div class='container'> <a class='navbar-brand' href='../index.html'> <img id='kdlogo' src='../images/kdlogo.png' alt=''> </a> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation' id='hamburger'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarResponsive'> <ul class='navbar-nav ml-auto'> <li class='nav-item'> <a class='nav-link' id='nav-home' href='../index.html'>Home </a> </li> <li class='nav-item'> <a class='nav-link' id='nav-about' href='../index.html#about'>About</a> </li> <li class='nav-item'> <a class='nav-link' id='nav-skills' href='../index.html#skills'>Skills</a> </li> <li class='nav-item'> <a class='nav-link' id='nav-works' href='../index.html#works'>Works </a> </li> <li class='nav-item'> <a class='nav-link' id='nav-sayhi' href='#say-hi'>Say-Hi!</a> </li> </ul> </div> </div> </nav>";
  document.write(navbar);
  (function () {
    document.getElementById("nav-" + page).classList.toggle("active")
  })();
};

function top_area() {
  var top_area = "<div class='jumbotron jumbotron-extend'> <div class='container jumbotron-container'> <div id='top-sq' class='mx-auto text-center'> <div class='py-5'> <h4>KD</h4> <p>1999 May 23</p> <h6>HELL YEAH OR NO. <br> Thinking the implementation of designs/systems. Spent the gap year in the fishery industry.</h6> </div> </div> </div> </div>";
  document.write(top_area);
}

function say_hi() {
  var say_hi = "<div id='say-hi' class='section container-fluid'> <div class='container'> <div class='section-title text-center'> <h3>Hello, this is KD!</h3> <hr> <p>ご挨拶</p> </div> <div class='text-center form links-block'> <h4 class='lang-eng'>Thank you for taking time to visit here. <br>Have a nice day!</h4> <h5 class='lang-jpn inactive'>ご覧いただき、ありがとうございました！ <br>またお会いしましょう</h5> <!-- <div class='row justify-content-center'> <div class='col-2 btn btn-secondary back-yellow btn-mylinks'> <a target='_blank' rel='noopener noreferrer' href='https://github.com/kaedejima/'> <i class='fab fa-github fa-2x' aria-hidden='true'> </i> </a> <br> <a target='_blank' rel='noopener noreferrer' href='https://github.com/kaedejima/'>Github</a> </div> <div class='col-2 btn btn-secondary back-yellow btn-mylinks'> <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kd-kaede/'> <i class='fab fa-linkedin fa-2x' aria-hidden='true'> </i> </a> <br> <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kd-kaede/'>LinkedIn</a> </div> <div class='col-2 btn btn-secondary back-yellow btn-mylinks'> <a target='_blank' rel='noopener noreferrer' href='https://qiita.com/frogie'> <span class='fa-stack'> <i class='fa fa-square fa-stack-2x' aria-hidden='true'></i> <i class='fa fa-search fa-stack-1x fa-inverse fa-2x' style='color: #FDD968;' aria-hidden='true'></i> </span> </a> <br> <a target='_blank' rel='noopener noreferrer' href='https://qiita.com/frogie'>Qiita</a> </div> <div class='col-2 btn btn-secondary back-yellow btn-mylinks'> <a target='_blank' rel='noopener noreferrer' href='https://note.com/soupy'> <i class='far fa-sticky-note fa-2x' aria-hidden='true'> </i> </a> <br> <a target='_blank' rel='noopener noreferrer' href='https://note.com/soupy'>note</a> </div> </div> --> </div> </div> </div>";
  document.write(say_hi);
}

function footer() {
  var footer = "<footer class='font-small pt-4'> <div class='container text-center text-md-left'> <a href='./index.html'> <img id='kdlogo-name' src='./images/kdlogo-name-sm.png' class='d-block mx-auto mb-4'> </a> <!-- <p>Busy doing nothing...</p> --> <div class='row justify-content-center mb-4'> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='./index.html#about' class='text-light'>About</a> </p> </h6> </div> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='./index.html#skills' class='text-light'>Skills</a> </p> </h6> </div> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='works/home.html' class='text-light'>Works</a> </p> </h6> </div> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='#say-hi' class='text-light'>Say-Hi!</a> </p> </h6> </div> </div> </div> <!-- Copyright --> <div class='footer-copyright text-center py-3 back-brown'>© 2023 KD</div> <!-- Copyright --> </footer>";
  document.write(footer);
}
function footerWorks() {
  var footer = "<footer class='font-small pt-4'> <div class='container text-center text-md-left'> <a href='./index.html'> <img id='kdlogo-name' src='../images/kdlogo-name-sm.png' class='d-block mx-auto mb-4'> </a> <!-- <p>Busy doing nothing...</p> --> <div class='row justify-content-center mb-4'> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='../index.html#about' class='text-light'>About</a> </p> </h6> </div> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='../index.html#skills' class='text-light'>Skills</a> </p> </h6> </div> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='home.html' class='text-light'>Works</a> </p> </h6> </div> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='#say-hi' class='text-light'>Say-Hi!</a> </p> </h6> </div> </div> </div> <!-- Copyright --> <div class='footer-copyright text-center py-3 back-brown'>© 2021 KD</div> <!-- Copyright --> </footer>";
  document.write(footer);
}