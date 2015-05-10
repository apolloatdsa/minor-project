<!--
* Author: Thomas Delaney
* Assignment: Minor Project – Brain Team Evolution
* Student ID: D14126353
* Date  : 2015/01/25
* Ref:
        Bootstrap CSS Framework: http://getbootstrap.com/
        jQuery: http://jquery.com/
        Google Fonts: http://www.google.com/fonts
        http://startbootstrap.com/template-overviews/shop-homepage/
-->

<!DOCTYPE html>
<html lang="en"><!-- InstanceBegin template="/Templates/template-dropdown.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<!--
* Author: Thomas Delaney
* Assignment: Minor Project – Team Brain Evolution
* Student ID: D14126353
* Date  : 2015/01/25
* Ref:
        Bootstrap CSS Framework: http://getbootstrap.com/
        jQuery: http://jquery.com/
        Google Fonts: http://www.google.com/fonts
        http://startbootstrap.com/template-overviews/shop-homepage/
-->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Up to 70 words (350 characters) Entice visitors with a well written description of the content of your page">
<meta name="author" content="">
<!-- InstanceBeginEditable name="doctitle" -->
<title>This titel should be the same as the first H1 tag on the page</title>
<meta name="keywords" content="Client SEO team will decide keyword and density">
<meta name="description" content="Description should describe the page contents.">
<!-- InstanceEndEditable -->
<!-- Bootstrap Core CSS -->
<link href="css/bootstrap.css" rel="stylesheet">
<!-- Custom CSS -->
<!-- <link href="../css/video.css" rel="stylesheet"> -->
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link href="css/docs.min.css" rel="stylesheet">
<link rel="stylesheet" href="http://blueimp.github.io/Gallery/css/blueimp-gallery.min.css">
<link rel="stylesheet" href="css/bootstrap-image-gallery.min.css">
<link href="css/shop-homepage.css" rel="stylesheet">
<link rel="stylesheet" href="css/font-awesome.min.css">
<script src="email/validation.js" type="text/javascript"></script>
<script src="js/custom.js" type="text/javascript"></script>
<script src="js/jquery.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media  queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<!-- InstanceBeginEditable name="head" -->
<!-- InstanceEndEditable -->
<!-- InstanceParam name="First9col" type="boolean" value="true" -->
</head>
<body class="aec-body">
<div class="page-header no-padding no-margin">
    <div class="container">
    <img class="img-responsive " src="img/logo-4.png"  alt=""/>
    </div>
    </div>

 
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    
      <div class="container-fluid">
      
      
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
          <a class ="navbar-brand no-padding no-margin " href="index.html"><img class="img-circle" src="img/logo-s.png"  alt=""/></a>
        </div>
        
        
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li id="home-link-head"><a href="index.html">Home</a></li>
            
            <li id="shop-dw"  class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Shop <span class="caret"></span></a>
              <ul class="dropdown-menu">
              	<li><a href="clotheslines.html">Clotheslines </a></li>
                <li><a href="meter_plugs.html">Meter Plugs </a></li>
                <li><a href="product_3.html">Product 3 </a></li>
                <li><a href="product_4.html">Product 4 </a></li>
                <li><a href="reviews.html">Product reviews </a></li>
               
              </ul>
            </li>
            
            
            
            <li id="smart-electric-dw" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Smart Electric <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="smart-metering.html">Smart metering </a></li>
                <li><a href="solar_flight.html">Solar Flight </a></li>
                
                
              </ul>
              <li id="smart-heating-dw" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Smart Heating <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="geothermal_heating.html">Geothermal Heating</a></li>
                <li><a href="radiant.html">Radiant Heating</a></li>
              </ul>
              
              
              
              <li id="smart-car-dw" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Smart Cars <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="electric_cars.html">Electric Cars</a></li>
                
              </ul>
              
              <li id="ber-dw" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">BER <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="ber_advice_for_householders.html">BER Advice For Householders</a></li>
                <li><a href="ber_questioner_1.html">BER Pre Test</a></li>
               
              </ul>
              
            </li>
              
              <li id="info-dw" class="dropdown" ><a class="dropdown-toggle" data-toggle="dropdown" href="#">Info <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="about.html">About AEC</a></li>
                <li><a href="contact.php">Contact information</a></li>
                
               
              </ul>
            </li>
             
            
            <li id="blog-head" ><a href="blog.html">Blog</a></li>
          </ul>
          
          
          <ul class="nav navbar-nav navbar-right">
          
           <li><div id="logged-in-user"><script>userDiv()</script></div></li>
           <li id="login-listitem" style="display: block;"> <a href="#login3" data-toggle ="modal"><span class="glyphicon glyphicon-user"></span> Sign up</a></li>
            <li><div id="logout"><script>userDiv()</script></div></li>
            <li><div id="cart"></div></li>
			
             
          </ul>
        </div>
      </div>
    </nav>
    
   

    <!-- Page Content second container below top nav bar -->
   <div class="container" id ="display-user-in"><p>&nbsp;</p></div> 
<div class="container"><!-- InstanceBeginEditable name="EditRegion3" -->
          
       
           
          <div class="col-md-8 col-md-offset-2 col-xs-12 ">
            <!-- Start of nine col this div should be first    --->
  <!-- #####################---------- start content here --------------------################# -->          
  
  
           
            <h1>Contact the Apollo Team</h1>
                <p>&nbsp;</p>
                
                <div id="contact">
                	<div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover">
                          <thead>
                            <tr>
                              
                              <th><span class="glyphicon glyphicon-user"></span> Name</th>
                              <th><span class="glyphicon glyphicon-cog"></span> Stream</th>
                              <th><span class="glyphicon glyphicon-envelope"></span> E-mail</th>
                              <th><span class="glyphicon glyphicon-phone"></span> Phone</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              
                              <td>Paul Grant </td>
                              <td>Designer </td>
                              <td><a href="mailto:paulgrant@webinnovate.ie?subject=This email is an enquiry sent from the minor project website">paul@webinnovate.ie</a></td>
                              <td>087 XXXXXXX</td>
                            </tr>
                            <tr>
                              
                              <td>Patrick Mc Guinness </td>
                              <td>Designer </td>
                              <td><a href="mailto:patrickmcguinness@webinnovate.ie?subject=This email is an enquiry sent from the minor project website">patrick@webinnovate.ie</a></td>
                              <td>086 XXXXXXX</td>
                            </tr>
                            <tr>
                              
                              <td>Niall Woods </td>
                              <td>Designer </td>
                              <td><a href="mailto:niallwoods@webinnovate.ie?subject=This email is an enquiry sent from the minor project website">niall@webinnovate.ie</a></td>
                              <td>087 XXXXXXX</td>
                            </tr>
                            <tr>
                              
                              <td>Thomas Delaney </td>
                              <td>Coder</td>
                              <td><a href="mailto:thomasdelaney@webinnovate.ie?subject=This email is an enquiry sent from the minor project website">thomas@webinnovate.ie</a></td>
                              <td>083 XXXXXXX</td>
                            </tr>
                            <tr>
                              
                              <td>Expected soon </td>
                              <td>Peoject manager </td>
                              <td><a href="mailto:clairemurphy@webinnovate.ie?subject=This email is an enquiry sent from the minor project website">clare@webinnovate.ie</a></td>
                              <td>No contact yet</td>
                            </tr>
                            <tr>
                              
                              <td>AWL </td>
                              <td>Project manager </td>
                              <td><a href="mailto:kevinmurry@webinnovate.ie?subject=This email is an enquiry sent from the minor project website">kevin@webinnovate.ie</a></td>
                              <td>No contact yet</td>
                            </tr>
                            <tr>
                              
                              </tr>
                            
                            
                          </tbody>
                        </table>
                      </div> <!-- responsive -->
  
 
  
              </div> <!-- contact  -->
              
              <section class ="contact">
              
              	<h1>Contact Us</h1>
                   <h3 style="color:#FF6633;"><?php echo $_GET[msg];?></h3>
                   <hr>
                                                                        
                <form name="enq" method="post" action="email/" onsubmit="return validation();">
                <fieldset>
                    
                <p>
                  <input type="text" name="name" id="name" value=""  class="col-xs-8" placeholder="Name" />
                  <input type="text" name="email" id="email" value="" class="col-xs-8" placeholder="Email" />
                  <textarea rows="11" name="message" id="message" class="col-xs-8" placeholder="Comments"></textarea>
                  
                </p>
                <div class="actions">
                <input type="submit" value="Send Your Message" name="submit" id="submitButton" class="btn btn-info pull-right" title="Click here to submit your message!" />
                </div>
                    
                </fieldset>
                </form> 
              
              
              </section>
   <!--- #####################--------- end content here --------------------################# ---->          
            
          </div>
          <!-- InstanceEndEditable --></div>
    <!-- /.container- -->

    <div class="container">

        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12 footer-social">
               <div class="col-xs-10  col-sm-6 col-lg-4 col-md-4 pull-left">
                    <p>Copyright &copy; Digital Skills Academy &amp; The Apollo team 2014 </p>
                    
              </div>
              
              <div class="col-xs-10  col-sm-6 col-lg-4 col-md-4 footer-social">
                    <p> <a href="privacy.html">Privacy</a> | <a href="contact.php">Contact</a> | <a href="reviews.html">Feedback</a> | <a href="sitemap.html">Site map</a></p>
                    
              </div>
              
              
                    
        <div class="col-xs-12  col-sm-12 col-lg-4 col-md-4 pull-right footer-social">
           <ul>
           <li> <a href="https://www.facebook.com/DigitalSkillsAcademy" target="new" ><i style="color: #2E4DA7 " class="fa fa-facebook fa-2x"></i> Facebook</a></li>
           <li> | </li>
            <li> <a href="https://www.linkedin.com/company/digital-skills-academy" target="new"><i style="color: #4875B4 " class="fa fa-linkedin-square fa-2x"></i> linkedin</a></li>
            <li> | </li>
			<li> <a href="https://plus.google.com/111257973936426684374/about" target="new"><i style="color: #C63D2D "  class="fa fa-google-plus fa-2x"></i> Google+</a></li>
            <li> | </li>
			<li> <a href="https://www.pinterest.com/" target="new"><i style="color: #C92228 " class="fa fa-pinterest-square fa-2x" ></i> Pinterest</a></li>
            <li> | </li>
			<li> <a href="http://www.digitalskillsacademy.com/" target="new" ><i style="color: #33CCFF " class="fa fa-twitter fa-2x "  ></i> Twitter</a></li>
            <li> | </li>
			<li> <a href="https://www.youtube.com/watch?v=-yYB3MjgYgY" target="new"><i style="color: #c4302b " class="fa fa-youtube fa-2x"  ></i> YouTube</a></li>
            <li> | </li>
			<li> <a href="https://github.com/apolloatdsa/minor-project" target="new"><i style="color: #662A81 " class="fa fa-github-square fa-2x"  ></i> Project on GitHub</a></li>
           
          </ul></div>
                    
                </div>
            </div>
        </footer>

    </div>
    <!-- /.container -->
    
    
    
  <!-- The Bootstrap Image Gallery lightbox, should be a child element of the document body -->
<div id="blueimp-gallery" class="blueimp-gallery" data-use-bootstrap-modal="false">
    <!-- The container for the modal slides -->
    <div class="slides"></div>
    <!-- Controls for the borderless lightbox -->
    <h3 class="title">&nbsp;</h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="close">×</a>
    <a class="play-pause"></a>
    <ol class="indicator"></ol>
    <!-- The modal dialog, which will be used to wrap the lightbox content -->
    <div class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">&nbsp;</h4>
                </div>
                <div class="modal-body next"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left prev">
                        <i class="glyphicon glyphicon-chevron-left"></i>
                        Previous
                    </button>
                    <button type="button" class="btn btn-primary next">
                        Next
                        <i class="glyphicon glyphicon-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
 
 
 
      
  <div class="modal fade" id="login" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <h4 class="modal-title">Login or create an account</h4>
      </div>
      <div class="modal-body">
        <p>Please enter your login below &hellip;</p>
        <form id="login-form">
        <p><input type="email" id="login-em" value="tom@webinnovate.ie" placeholder="Email"></p>
        <p><input type="text" id="login-user" value="Tom Delaney" placeholder="User name"></p>
        </form>
        <pre><button type="submit" id="login-btn" class="btn btn-success" data-dismiss="modal">Login</button>	<button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button></pre>
        
        <hr>
        <p>Not already a menber ? Then cerate an account here</p>
        <h2><small>Enter details here</small></h2>
        <form id="create-acc-2">
        <p><input type="email" id="newUserEm" placeholder="Email"></p>
        <p><input type="text" id="newUserFn" placeholder="First name"></p>
        <p><input type="text" id="newUserLn" placeholder="Surname name"></p>
        <p><input type="text" id="newUserAddSteet" placeholder="Street"></p>
        <p><input type="text" id="newUserAddTown" placeholder="Town"></p>
        <p><input type="text" id="newUserAddCity" placeholder="City"></p>
        <p><input type="text" id="newUserAddlzip" placeholder="Zip or Poat code"></p>
        <p><input type="text" id="newUserAddCountry" placeholder="Country"></p>
        </form>
        <pre><button type="submit" id="createAccBtn" class="btn btn-success" data-dismiss="modal">Create</button>	<button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button></pre>
      </div>
  
      <div class="modal-footer">
        <script>
		 
    window.onload = on_load_login();
	//window.onload = userDiv();
           
</script>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal --> 


 
    
 
   <div class="modal fade" id="login2" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <h4 class="modal-title">Log out</h4>
      </div>
      <div class="modal-body">
        <p>You are now logged out &hellip;</p>
        
        <pre><button id="logout-btn" type="button" class="btn btn-danger" data-dismiss="modal">Close</button></pre>
        
        <hr>
        
      </div>
 
      <div class="modal-footer">
        <script>
		 
    window.onload = on_load_logout();
	//window.onload = userDiv();
           
</script>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

 
 
 <div class="modal fade" id="login3" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <h4 class="modal-title">Sign up</h4>
      </div>
      <div class="modal-body">
        
        <p>Sign up</p>
        <h2><small>Enter details here</small></h2>
        <form id="create-acc-1">
        <p><input type="email" id="signupEm" value="tom@webinnovate.ie" placeholder="Email"></p>
        <p><input type="text" id="signupFn" value="Tom"  placeholder="First name"></p>
        <p><input type="text" id="signupLn" value="Delaney"  placeholder="Surname name"></p>
        <p><input type="text" id="signupAddSteet" value="1 Crane St"  placeholder="Street"></p>
        <p><input type="text" id="signupAddTown" value=""  placeholder="Town"></p>
        <p><input type="text" id="signupAddCity" value="Dublin"  placeholder="City"></p>
        <p><input type="text" id="signupAddlzip" value="D 8"  placeholder="Zip or Poat code"></p>
        <p><input type="text" id="signupAddCountry" value="Ireland"  placeholder="Country"></p>
        </form>
        <pre><button type="submit" id="signupBtn" class="btn btn-success" data-dismiss="modal">Create</button>	<button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button></pre>
      </div>
  
      <div class="modal-footer">
        <script>
		 
    window.onload = on_load_signup();
	//window.onload = userDiv();
           
</script>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<!-- InstanceBeginEditable name="javascriptArea" -->
<script>

$( document ).ready(function() {
	$( "#info-dw" ).addClass( "link-active" );
    
});

</script>


<!-- InstanceEndEditable --> 



     <!-- jQuery -->
<script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"></script>
<script src="js/bootstrap-image-gallery.min.js"></script>
</body>

<!-- InstanceEnd --></html>
