//Code reuse
// Ref: 
// Ref: Book Title, Author, Publisher, Edition, page number

// Ref: Code provided by lab assistant: name or fellow participant: 

// JavaScript Document

// carbon meter



function  on_load_zeroMeter(){
	
	//alert(typeof sessionStorage.meterValue)
	if (typeof sessionStorage.meterValue == 'undefined'){
		sessionStorage.meterValue = 0;
		setM(sessionStorage.meterValue)
	}
	else{
		setM(sessionStorage.meterValue)
		
		}
	
	resultToDiv();// check results if survey is complete write results to the div area.
	checkUserLoggedIn();
	}// end of on_load_zeroMeter()
	
	
function checkUserLoggedIn(){ // meter controls on the BER results page show or hide depends on user loged in or not
		
		if (sessionStorage.userIsLoggedIn == "true"){
			
			$("#button-div").addClass("show-control").removeClass("hide-control"); // show the controls	
			
			}else{
				$("#button-div").removeClass("show-control").addClass("hide-control"); // hide controls 
				
				}
		
		
		
		};	
	
function resultToDiv(){ // five divs under meter


	
	
	if(typeof sessionStorage.poor == "undefined"){
		document.getElementById("poor_result_page").innerHTML = "Please complete the questioner to get results "
		//sessionStorage.poor = 0
		}
		
	if(typeof sessionStorage.fair == "undefined"){
		document.getElementById("fair_result_page").innerHTML = "Please complete the questioner to get results "
		sessionStorage.fair = 0
		}	
		
	if(typeof sessionStorage.good == "undefined"){
		document.getElementById("good_result_page").innerHTML = "Please complete the questioner to get results "
		sessionStorage.good = 0
		}	
		
	if(typeof sessionStorage.exec == "undefined"){
		document.getElementById("exec_result_page").innerHTML = "Please complete the questioner to get results "
		sessionStorage.exec = 0
		}	

	if(typeof sessionStorage.dna == "undefined"){
		document.getElementById("dna_result_page").innerHTML = "Please complete the questioner to get results "
		sessionStorage.dna = 100
		}
	
	// added when it was noticed on some BER results the Did Not Apply result displayed as -1 
	if (sessionStorage.poor + sessionStorage.fair + sessionStorage.good + sessionStorage.exec + sessionStorage.dan > 100 ){
		
		var maxValue = Math.max(sessionStorage.poor + sessionStorage.fair + sessionStorage.good + sessionStorage.exec + sessionStorage.dna)
		sessionStorage.dna = 0;
		if(sessionStorage.exec == maxValue){sessionStorage.exec--}
		 else if  (sessionStorage.good == maxValue){sessionStorage.good--}
		else if (sessionStorage.fair == maxValue){sessionStorage.fair--}
		else if (sessionStorage.poor == maxValue){sessionStorage.poor--};
		
		}
		
					
	document.getElementById("poor_result_page").innerHTML = ""+sessionStorage.poor+"% of your answers were in the POOR segment. "
	document.getElementById("fair_result_page").innerHTML = ""+sessionStorage.fair+"% of your answers were in the FAIR segment. "
	document.getElementById("good_result_page").innerHTML = ""+sessionStorage.good+"% of your answers were in the GOOD segment. "
	document.getElementById("exec_result_page").innerHTML = ""+sessionStorage.exec+"% of your answers were in the EXECELLENT segment. "
	document.getElementById("dna_result_page").innerHTML = ""+sessionStorage.dna+"% of your answers did not apply. "
	
	}
	
		
							
function setM(v){ //v is a value supplied by the calling function -- a variable called meter (0 - 15)
									
	document.getElementById('carbonM').meterValue.value = v; // take the value of v and write it to the number input
	document.getElementById('carbonM').range.value = v; // take the value of v and write it to the slider input
	document.getElementById("meter").src = "img/meter/"+v+"-meter.png"; // change the image to show position (0 - 15)
	sessionStorage.meterValue = v;								
									 
	}; // end of setM(v) 
								
function readMeter(i){  // i is to identify the i/p either the slider i/p or the number i/p calling the function
								
	meter = document.getElementById('carbonM').range.value; // create variable meter by reading value from slider
									
	if(i == "number"){
	meter = document.getElementById('carbonM').meterValue.value; // get value entered in meter value box
	}
									
	setM(meter)
		}
					
								
function increaseMeter(){
									
	if(document.getElementById('carbonM').range.value <=14){
									
	meter = document.getElementById('carbonM').range.value; // get value entered in meter value box
	meter++;
	setM(meter)
		}
								
	}// end of increaseMeter()
									
function decreaseMeter(){
									
	if(document.getElementById('carbonM').range.value >0){
									
	meter = document.getElementById('carbonM').range.value; // get value entered in meter value box
	meter--;
	setM(meter)
	}
									
									
	}	
	
//////////////////////////////////////////////////////////////////////////////////////////////
// The login uses HTML 5 session storage to store the user login. It looks for an email and 
// a user name as a valid login and then displays the user name in the headder
/////////////////////////////////////////////////////////////////////////////////////////////

function on_load_login(){// add event listener

    var loginButton = document.getElementById("login-btn");// event listener for login button
	 
	if(loginButton.addEventListener){
    loginButton.addEventListener("click", readLogin );
   
   };
   
   var createAccBtnButton = document.getElementById("createAccBtn");// event listener for login button
	 
	if(createAccBtnButton.addEventListener){
    createAccBtnButton.addEventListener("click", createAccBtn );
   
   };

	};// end on_load_login() function
	
function createAccBtn(){
	//alert(" Create an account ")
	sessionStorage.newUserEm = document.getElementById("newUserEm").value; // New user email
	sessionStorage.newUserFn = document.getElementById("newUserFn").value; // New user first name
	sessionStorage.newUserLn = document.getElementById("newUserLn").value; // New user last name
	sessionStorage.newUserAddSteet = document.getElementById("newUserAddSteet").value; // New user address
	sessionStorage.newUserAddTown = document.getElementById("newUserAddTown").value; // New user Town
	sessionStorage.newUserAddCity = document.getElementById("newUserAddCity").value; // New user city
	sessionStorage.newUserAddlzip = document.getElementById("newUserAddlzip").value; // New user post code or zip
	sessionStorage.newUserAddCountry = document.getElementById("newUserAddCountry").value; // New user country
	
	
	
	if(!sessionStorage.newUserEm || !sessionStorage.newUserFn || !sessionStorage.newUserLn ){// True when left blank -- In here if there is no user first or last name or email entered
	sessionStorage.userEmail ="";
	sessionStorage.userIs = "";
	sessionStorage.userIsLoggedIn = false;
	alert("User Email First Name and Surname are required ")	 
	}else{
		
 	sessionStorage.userIsLoggedIn = true;
	sessionStorage.userIs = sessionStorage.newUserFn+" "+sessionStorage.newUserLn;
	userDiv()// call function to write to the header area
	};
	
	}; // Create an account createAccBtn() function


 function readLogin(){// reads the login model user email and name
	
	 sessionStorage.userIsLoggedIn = true; // True when a user is logged in
	 sessionStorage.userEmail = document.getElementById("login-em").value; // get the value from the login form 
	 sessionStorage.userIs = document.getElementById("login-user").value; // get the value from the login form 

	 
	if(!sessionStorage.userEmail || !sessionStorage.userIs){// True when left blank -- In here if there is no user name or email entered
	sessionStorage.userEmail ="";
	sessionStorage.userIs = "";
	sessionStorage.userIsLoggedIn = false;	 
	};
 
	userDiv()// call function to write to the header area
	
	} // end of readLogin()

	
	 
 function userDiv() {// runs on page load / refresh to set text in user login div in the header
 
 //alert(typeof sessionStorage.userIsLoggedIn)
 
	if(typeof sessionStorage.userIsLoggedIn == 'undefined' || sessionStorage.userIsLoggedIn == 'false'){// first login will be undefined
	document.getElementById("logged-in-user").innerHTML = " ";
	//document.getElementById("display-user-in").innerHTML = "<h4>Welcome "+sessionStorage.userIs+"</h4>";
	document.getElementById("logout").innerHTML = '<a href="#login" data-toggle ="modal"><span class="glyphicon glyphicon-log-in"></span> Login</a>';
	sessionStorage.userIsLoggedIn = false;	 
	}
	 
	else{
	//document.getElementById("display-user-in").innerHTML = "<h4>Welcome "+sessionStorage.userIs+"</h4>";		 
	document.getElementById("logged-in-user").innerHTML = "Welcome "+sessionStorage.userIs;
	document.getElementById("logout").innerHTML = '<a href="#login2" data-toggle ="modal"><span class="glyphicon glyphicon-log-in"></span> Logout</a>';
	document.getElementById('login-listitem').style.display = "none";// turn off login link
	sessionStorage.userIsLoggedIn = true;
	$("#button-div").addClass("show-control").removeClass("hide-control");		 
	};
	 
	}// end of userDiv()
 
	 
function on_load_logout(){
	
	var logoutButton = document.getElementById("logout");// event listener for logout button 
	if(logoutButton.addEventListener){
	logoutButton.addEventListener("click", logOut );
	 };  							
	
	};	// end of on_load_logout() 


function logOut(){
	
	sessionStorage.userIsLoggedIn = false;
	sessionStorage.userIs = "";
	sessionStorage.userEmail ="";
	document.getElementById("logged-in-user").innerHTML = "";
	document.getElementById("logout").innerHTML = '<a href="#login" data-toggle ="modal"><span class="glyphicon glyphicon-log-in"></span> Login</a>';
	document.getElementById('login-listitem').style.display = "block";// turn on the login link
	$("#button-div").removeClass("show-control").addClass("hide-control");
	//document.getElementById("display-user-in").innerHTML = "<h4>Please login</h4>";
	};  // end of logOut()
	 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sign up
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function on_load_signup(){
	
	//alert("Sign up function")
	var signupBtnButton = document.getElementById("signupBtn");// event listener for range slider
	 
	if(signupBtnButton.addEventListener){
    signupBtnButton.addEventListener("click", signupBtn );
   
   };
	
	var signupEmEntry = document.getElementById("signupEm");// event listener for range slider
	 
	if(signupEmEntry.addEventListener){
    signupEmEntry.addEventListener("change", signupEm );
   
   };
	
	var signupFnEntry = document.getElementById("signupFn");// event listener for range slider
	 
	if(signupFnEntry.addEventListener){
    signupFnEntry.addEventListener("change", signupFn );
   
   };
   
   var signupLnEntry = document.getElementById("signupLn");// event listener for range slider
	 
	if(signupLnEntry.addEventListener){
    signupLnEntry.addEventListener("change", signupLn );
   
   };

   //signupAddSteet
   var signupAddSteetEntry = document.getElementById("signupAddSteet");// event listener for range slider
	 
	if(signupAddSteetEntry.addEventListener){
    signupAddSteetEntry.addEventListener("change", signupAddSteet );
   };
   
   //signupAddTown
    var signupAddTownEntry = document.getElementById("signupAddTown");// event listener for range slider
	 
	if(signupAddTownEntry.addEventListener){
    signupAddTownEntry.addEventListener("change", signupAddTown );
   };
   
   // signupAddCity
	var signupAddCityEntry = document.getElementById("signupAddCity");// event listener for range slider
	 
	if(signupAddCityEntry.addEventListener){
     signupAddCityEntry.addEventListener("change", signupAddCity );
   };
   
	// signupAddlzip
	var signupAddlzipEntry = document.getElementById("signupAddlzip");// event listener for range slider
	 
	if(signupAddlzipEntry.addEventListener){
    signupAddlzipEntry.addEventListener("change", signupAddlzip );
   };

	// signupAddCountry
	var signupAddCountryEntry = document.getElementById("signupAddCountry");// event listener for range slider
	 
	if(signupAddCountryEntry.addEventListener){
     signupAddCountryEntry.addEventListener("change", signupAddCountry );
   };

	}// end of on_load_signup()


function signupBtn(){
	//alert("signup button")
	//alert("Sign up button was clicked")
	document.getElementById("logout").innerHTML = '<a href="#login2" data-toggle ="modal"><span class="glyphicon glyphicon-log-in"></span> Logout</a>';
	sessionStorage.signupFn = document.getElementById("signupFn").value;
	sessionStorage.signupLn = document.getElementById("signupLn").value;
	sessionStorage.userIs = sessionStorage.signupFn+" "+sessionStorage.signupLn;
	document.getElementById('login-listitem').style.display = "none"; // turn off the log in link
	
	document.getElementById("display-user-in").innerHTML = "<h4>Welcome "+sessionStorage.userIs+"</h4>";
	sessionStorage.userIsLoggedIn = true;
	$("#button-div").addClass("show-control").removeClass("hide-control");
	}

function signupEm(){
	
	sessionStorage.signupEm = document.getElementById("signupEm").value; //
	//alert("Sign up email was changed to "+sessionStorage.signupEm)
	}

function signupFn(){
	sessionStorage.signupFn = document.getElementById("signupFn").value; //
	//alert("Sign up first name was changed to "+sessionStorage.signupFn)
	
	}

function signupLn(){
	sessionStorage.signupLn = document.getElementById("signupLn").value; //
	//alert("Sign up last name was changed to "+sessionStorage.signupLn)
	
	}
	
	
function signupAddSteet(){
	sessionStorage.signupAddSteet = document.getElementById("signupAddSteet").value; //
	//alert("Sign up signup street was changed to "+sessionStorage.signupAddSteet)
	
	}			

function signupAddTown(){
	sessionStorage.signupAddTown = document.getElementById("signupAddTown").value; //
	//alert("Sign up town was changed to "+sessionStorage.signupAddTown)
	
	}
	

	
function signupAddCity(){
	sessionStorage.signupAddCity = document.getElementById("signupAddCity").value; //
	//alert("Sign up signup City was changed to "+sessionStorage.signupAddCity)
	
	}	
	
function signupAddlzip(){
	sessionStorage.signupAddlzip = document.getElementById("signupAddlzip").value; //
	//alert("Sign up signup zip was changed to "+sessionStorage.signupAddlzip)
	
	}		
	
function signupAddCountry(){
	sessionStorage.signupAddCountry = document.getElementById("signupAddCountry").value; //
	//alert("Sign up signup country was changed to "+sessionStorage.signupAddCountry)
	
	}		
	


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Read survey questions and store results in local storage then add all results to display a reading on the meter
// Options can be changed at any stage and will not be counted more than once
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var result = 0;

function showResult(){

	}// end of show Result function 
	

function readArea(){
		
	sessionStorage.q1 = document.getElementById("q1").value;// read the option value
	
	}// end of readArea 1
		
		
function houseType(){
	
	sessionStorage.q2 = document.getElementById("q2").value; // read the option value
	
		};	// enf house type 2	
		
function detsemi(){
	
	sessionStorage.q3 = document.getElementById("q3").value; // read the option value	
	
	}; // end of detatched or semi 3
	
	
function builtWhen(){
	
	sessionStorage.q4 = document.getElementById("q4").value; // read the option value
	
	}// built when function 4	



function rooms(){
	
	sessionStorage.q5 = document.getElementById("q5").value; // read the option value
	
	}; /// end number of rooms 5



function numboffloors(){
	
	sessionStorage.q6 = document.getElementById("q6").value; // read the option value
	
	}// numboffloors 6
	

//########## page 1 ######################################	
	

function conservatory(){
	
	sessionStorage.q7 = document.getElementById("conservatory").value; // read the option value
	
	}//conservatory 7


function conDubGlass(){
	
	sessionStorage.q8 = document.getElementById("conDubGlass").value; // read the option value
	
	}// 8
	
function homeDubTripG(){

	sessionStorage.q9 = document.getElementById("homeDubTripG").value; // read the option value

	} // 9	

function perCentDTGlazed(){
	
	sessionStorage.q10 = document.getElementById("perCentDTGlazed").value; // read the option value
	
	}// perCentDTGlazed 10


function wallsConst(){

	sessionStorage.q11 = document.getElementById("wallsConst").value; // read the option value
	
	}// wallsConst 11



function typeOfRoof(){

	sessionStorage.q12 = document.getElementById("typeOfRoof").value; // read the option value
	
	}// 12


function roofInsul(){
	
	sessionStorage.q13 = document.getElementById("roofInsul").value; // read the option value

	} // 13


//// ########################## emd  page 2 ##########################

function on_load_form_read() {
	
	if(typeof sessionStorage.q1 == "undefined"){sessionStorage.q1 = ""}

	if(typeof sessionStorage.q2 == "undefined"){sessionStorage.q2 = ""}

	if(typeof sessionStorage.q3 == "undefined"){sessionStorage.q3 = ""}

	if(typeof sessionStorage.q4 == "undefined"){sessionStorage.q4 = ""}

	if(typeof sessionStorage.q5 == "undefined"){sessionStorage.q5 = ""}

	if(typeof sessionStorage.q6 == "undefined"){sessionStorage.q6 = ""}

	
	var areaOption = document.getElementById("q1");// event listener for meter survey area
	 
	if(areaOption.addEventListener){
	
    areaOption.addEventListener("change", readArea );
	 };
	   

	var houseTypeOption = document.getElementById("q2");// event listener for meter survey house type
	 
	if(houseTypeOption.addEventListener){
    houseTypeOption.addEventListener("change", houseType );
	};  
		
  
	var detsemiOption = document.getElementById("q3");// event listener for meter survey house type
	 
	if(detsemiOption.addEventListener){
    detsemiOption.addEventListener("change", detsemi );
	};  
   
   
	var builtWhenOption = document.getElementById("q4");// event listener for meter survey house type
	 
	if(builtWhenOption.addEventListener){
    builtWhenOption.addEventListener("change", builtWhen );
	};  
	  
	  // rooms
	   
	var roomsOption = document.getElementById("q5");// event listener for meter survey area
	 
	if(roomsOption.addEventListener){
    roomsOption.addEventListener("change", rooms );
	}; 
	
	var numboffloorsOption = document.getElementById("q6");// event listener for meter survey area
	 
	if(numboffloorsOption.addEventListener){
    numboffloorsOption.addEventListener("change", numboffloors );
	};

   
   
};// on_load_form_read


	
function on_load_form_p2_read(){
	
	if(typeof sessionStorage.q7 == "undefined"){sessionStorage.q7 = ""}
	
	if(typeof sessionStorage.q8 == "undefined"){sessionStorage.q8 = ""}

	if(typeof sessionStorage.q9 == "undefined"){sessionStorage.q9 = ""}

	if(typeof sessionStorage.q10 == "undefined"){sessionStorage.q10 = ""}

	if(typeof sessionStorage.q11 == "undefined"){sessionStorage.q11 = ""}

	if(typeof sessionStorage.q12 == "undefined"){sessionStorage.q12 = ""}

	if(typeof sessionStorage.q13 == "undefined"){sessionStorage.q13 = ""}
		
	
	
	

// conservatory
	var conservatoryOption = document.getElementById("conservatory");// event listener for meter survey area
	 
	if(conservatoryOption.addEventListener){
    conservatoryOption.addEventListener("change", conservatory );
	}; 

// conDubGlass
var conDubGlassOption = document.getElementById("conDubGlass");// event listener for meter survey area
	 
	if(conDubGlassOption.addEventListener){
    conDubGlassOption.addEventListener("change", conDubGlass );
	};
	   

// perCentDTGlazed

var perCentDTGlazedOption = document.getElementById("perCentDTGlazed");// event listener for meter survey area
	 
	if(perCentDTGlazedOption.addEventListener){
    perCentDTGlazedOption.addEventListener("change", perCentDTGlazed );
	};
	   
// wallsConst	   
	   
var wallsConstOption = document.getElementById("wallsConst");// event listener for meter survey area
	 
	if(wallsConstOption.addEventListener){
    wallsConstOption.addEventListener("change", wallsConst );
	};	   


// // wallsConst	   
	   
var wallsConstOption = document.getElementById("wallsConst");// event listener for meter survey area
	 
	if(wallsConstOption.addEventListener){
    wallsConstOption.addEventListener("change", wallsConst );
	};
	   	   
	   
// typeOfRoof	   
var typeOfRoofOption = document.getElementById("typeOfRoof");// event listener for meter survey area
	 
	if(typeOfRoofOption.addEventListener){
    typeOfRoofOption.addEventListener("change", typeOfRoof );
	};	   


// roofInsul

var roofInsulOption = document.getElementById("roofInsul");// event listener for meter survey area
	 
	if(roofInsulOption.addEventListener){
    roofInsulOption.addEventListener("change", roofInsul );
	};	   


// homeDubTripG

var homeDubTripGOption = document.getElementById("homeDubTripG");// event listener for meter survey area
	 
	if(homeDubTripGOption.addEventListener){
    homeDubTripGOption.addEventListener("change", homeDubTripG );
	};	   

	   
	
	}; // end of on load for page 2 
	


function sourceOfHeat(){
	
	sessionStorage.q14 = document.getElementById("sourceOfHeat").value; // read the option value
	
	} //14


function typeOfBoiler(){

	sessionStorage.q15 = document.getElementById("typeOfBoiler").value; // read the option value
	
	} //  15

function typeOfFuel(){
	
	sessionStorage.q16 = document.getElementById("typeOfFuel").value; // read the option value
	
	} // 16
	
	
function whenBoilerInstalled(){
	
	sessionStorage.q17 = document.getElementById("whenBoilerInstalled").value; // read the option value
	
	} // 17

function boilerServiced(){
	
	sessionStorage.q18 = document.getElementById("boilerServiced").value; // read the option value
	
	} // 18

function heatingControl(){
	
	sessionStorage.q19 = document.getElementById("heatingControl").value; // read the option value
	
	} // 19
	
	
function canYouUseControl(){
	
	sessionStorage.q20 = document.getElementById("canYouUseControl").value; // read the option value

	}; // end of  20
	

function on_load_form_p3_read(){
	
	
	if(typeof sessionStorage.q14 == "undefined"){sessionStorage.q14 = ""}

	if(typeof sessionStorage.q15 == "undefined"){sessionStorage.q15 = ""}

	if(typeof sessionStorage.q16 == "undefined"){sessionStorage.q16 = ""}

	if(typeof sessionStorage.q17 == "undefined"){sessionStorage.q17 = ""}

	if(typeof sessionStorage.q18 == "undefined"){sessionStorage.q18 = ""}

	if(typeof sessionStorage.q19 == "undefined"){sessionStorage.q19 = ""}

	if(typeof sessionStorage.q20 == "undefined"){sessionStorage.q20 = ""}

	
		
//sourceOfHeat

var sourceOfHeatOption = document.getElementById("sourceOfHeat");// event listener for meter survey area
	 
	if(sourceOfHeatOption.addEventListener){
    sourceOfHeatOption.addEventListener("change", sourceOfHeat );
	};	   

// 	typeOfBoiler

var typeOfBoilerOption = document.getElementById("typeOfBoiler");// event listener for meter survey area
	 
	if(typeOfBoilerOption.addEventListener){
    typeOfBoilerOption.addEventListener("change", typeOfBoiler );
	};	   

// typeOfFuel

var typeOfFuelOption = document.getElementById("typeOfFuel");// event listener for meter survey area
	 
	if(typeOfFuelOption.addEventListener){
    typeOfFuelOption.addEventListener("change", typeOfFuel );
	 };	   
 
//whenBoilerInstalled

var whenBoilerInstalledOption = document.getElementById("whenBoilerInstalled");// event listener for meter survey area
	 
	if(whenBoilerInstalledOption.addEventListener){
     whenBoilerInstalledOption.addEventListener("change", whenBoilerInstalled );
	 };	   

// boilerServiced

var boilerServicedOption = document.getElementById("boilerServiced");// event listener for meter survey area
	 
	if(boilerServicedOption.addEventListener){
     boilerServicedOption.addEventListener("change", boilerServiced );
	 };	   


// heatingControl

var heatingControlOption = document.getElementById("heatingControl");// event listener for meter survey area
	 
	if(heatingControlOption.addEventListener){
    heatingControlOption.addEventListener("change", heatingControl );
	 };	   

// canYouUseControl

var canYouUseControlOption = document.getElementById("canYouUseControl");// event listener for meter survey area
	 
	if(canYouUseControlOption.addEventListener){
    canYouUseControlOption.addEventListener("change", canYouUseControl );
	 };	   


	
}; // end of on losd for page 3


function waterHeater(){
	
	sessionStorage.q21 = document.getElementById("waterHeater").value; // read the option value
	
	}; //21

function cylinder(){
	
	sessionStorage.q22 = document.getElementById("cylinder").value; // read the option value
	
	}; // 22

function showerBath(){
	
	sessionStorage.q23 = document.getElementById("showerBath").value; // read the option value
	
	}; // 23

function runningTap(){
	
	sessionStorage.q24 = document.getElementById("runningTap").value; // read the option value
	
	} // 24

function cylinderSize(){
	
	sessionStorage.q25 = document.getElementById("cylinderSize").value; // read the option value
	
	} // 25
function cylinderTermo(){
	
	sessionStorage.q26 = document.getElementById("cylinderTermo").value; // read the option value
	
	}// 26
	
function cylinderInsulType(){
	
	sessionStorage.q27 = document.getElementById("cylinderInsulType").value; // read the option value
	
	} // 27



function on_load_form_p4_read(){
	
	//waterHeater
	if(typeof sessionStorage.q21 == "undefined"){sessionStorage.q21 = ""}

	if(typeof sessionStorage.q22 == "undefined"){sessionStorage.q22 = ""}
	
	if(typeof sessionStorage.q23 == "undefined"){sessionStorage.q23 = ""}

	if(typeof sessionStorage.q24 == "undefined"){sessionStorage.q24 = ""}

	if(typeof sessionStorage.q25 == "undefined"){sessionStorage.q25 = ""}

	if(typeof sessionStorage.q26 == "undefined"){sessionStorage.q26 = ""}

	if(typeof sessionStorage.q27 == "undefined"){sessionStorage.q27 = ""}

	
	var waterHeaterOption = document.getElementById("waterHeater");// event listener for meter survey area
	 
	if(waterHeaterOption.addEventListener){
    waterHeaterOption.addEventListener("change", waterHeater );
	};	   

	
	// cylinder
	var cylinderOption = document.getElementById("cylinder");// event listener for meter survey area
	 
	if(cylinderOption.addEventListener){
    cylinderOption.addEventListener("change", cylinder );
	};	   
	
	// showerBath
	
	var showerBathOption = document.getElementById("showerBath");// event listener for meter survey area
	 
	if(showerBathOption.addEventListener){
    showerBathOption.addEventListener("change", showerBath );
	};	   

	// runningTap
	var runningTapOption = document.getElementById("runningTap");// event listener for meter survey area
	 
	if(runningTapOption.addEventListener){
    runningTapOption.addEventListener("change", runningTap );
	};	   


	// cylinderSize
	var cylinderSizeOption = document.getElementById("cylinderSize");// event listener for meter survey area
	 
	if(cylinderSizeOption.addEventListener){
    cylinderSizeOption.addEventListener("change", cylinderSize );
	};	   
	
	// cylinderTermo
	var cylinderTermoOption = document.getElementById("cylinderTermo");// event listener for meter survey area
	 
	if(cylinderTermoOption.addEventListener){
    cylinderTermoOption.addEventListener("change", cylinderTermo );
	};
	
	// cylinderInsulType
	var cylinderInsulTypeOption = document.getElementById("cylinderInsulType");// event listener for meter survey area
	 
	if(cylinderInsulTypeOption.addEventListener){
    cylinderInsulTypeOption.addEventListener("change", cylinderInsulType );
	};
		   
	
	}; // end of on load for survey page 4
	


function hotWaterSolar(){
	
	sessionStorage.q28 = document.getElementById("hotWaterSolar").value; // read the option value

	} // 28

function pvPanels(){
	
	sessionStorage.q29 = document.getElementById("pvPanels").value; // read the option value
	
	} // 29 

function windTurbine(){
	
	sessionStorage.q30 = document.getElementById("windTurbine").value; // read the option value
	
	} // 30


function on_load_form_p5_read(){
	
	
	if(typeof sessionStorage.q28 == "undefined"){sessionStorage.q28 = ""}
	
	if(typeof sessionStorage.q29 == "undefined"){sessionStorage.q29 = ""}
	
	if(typeof sessionStorage.q30 == "undefined"){sessionStorage.q30 = ""}
		
	
	//hotWaterSolar
	var hotWaterSolarOption = document.getElementById("hotWaterSolar");// event listener for meter survey area
	 
	if(hotWaterSolarOption.addEventListener){
    hotWaterSolarOption.addEventListener("change", hotWaterSolar );
	};
	
	//pvPanels
	var pvPanelsOption = document.getElementById("pvPanels");// event listener for meter survey area
	 
	if(pvPanelsOption.addEventListener){
    pvPanelsOption.addEventListener("change", pvPanels );
	};
	
	//windTurbine
	var windTurbineOption = document.getElementById("windTurbine");// event listener for meter survey area
	 
	if(windTurbineOption.addEventListener){
    windTurbineOption.addEventListener("change", windTurbine );
	};
	
	
	}// end of on_load_form_p5_read()
	
	
	
	

function singleOrDualMeter(){
	
	sessionStorage.q31 = document.getElementById("singleOrDualMeter").value; // read the option value
	
	} // 31


function energyBulbs(){
	
	
	sessionStorage.q32 = document.getElementById("energyBulbs").value; // read the option value
	
	} // 32

function washTemp(){
	
	sessionStorage.q33 = document.getElementById("washTemp").value; // read the option value
	
	} // 33
	
	
function waitForFull(){
	
	sessionStorage.q34 = document.getElementById("waitForFull").value; // read the option value
	
	} // 34


	
function leftOn(){
	
	sessionStorage.q35 = document.getElementById("leftOn").value; // read the option value
	
	} // 35
	
function tumbleDry(){
	
	sessionStorage.q36 = document.getElementById("tumbleDry").value; // read the option value
	
	} // 36	
	
function boilKettle(){
	
	sessionStorage.q37 = document.getElementById("boilKettle").value; // read the option value
	
	} // 37
	





function on_load_form_p6_read(){
	
	
	if(typeof sessionStorage.q31 == "undefined"){sessionStorage.q31 = ""}
	
	if(typeof sessionStorage.q32 == "undefined"){sessionStorage.q32 = ""}
	
	if(typeof sessionStorage.q33 == "undefined"){sessionStorage.q33 = ""}
	
	if(typeof sessionStorage.q34 == "undefined"){sessionStorage.q34 = ""}
	
	if(typeof sessionStorage.q35 == "undefined"){sessionStorage.q35 = ""}
	
	if(typeof sessionStorage.q36 == "undefined"){sessionStorage.q36 = ""}
	
	if(typeof sessionStorage.q37 == "undefined"){sessionStorage.q37 = ""}
		

	
	// singleOrDualMeter
	var singleOrDualMeterOption = document.getElementById("singleOrDualMeter");// event listener for meter survey area
	 
	if(singleOrDualMeterOption.addEventListener){
    singleOrDualMeterOption.addEventListener("change", singleOrDualMeter );
	};
	
	// energyBulbs
	var energyBulbsOption = document.getElementById("energyBulbs");// event listener for meter survey area
	 
	if(energyBulbsOption.addEventListener){
    energyBulbsOption.addEventListener("change", energyBulbs );
	};
	
	// washTemp
	var washTempOption = document.getElementById("washTemp");// event listener for meter survey area
	 
	if(washTempOption.addEventListener){
    washTempOption.addEventListener("change", washTemp );
	};
	
	// waitForFull
	var waitForFullOption = document.getElementById("waitForFull");// event listener for meter survey area
	 
	if(waitForFullOption.addEventListener){
    waitForFullOption.addEventListener("change", waitForFull );
	};
	
	// tumbleDry
	var tumbleDryOption = document.getElementById("tumbleDry");// event listener for meter survey area
	 
	if(tumbleDryOption.addEventListener){
    tumbleDryOption.addEventListener("change", tumbleDry );
	};
	
	// leftOn
	var leftOnOption = document.getElementById("leftOn");// event listener for meter survey area
	 
	if(leftOnOption.addEventListener){
    leftOnOption.addEventListener("change", leftOn );
	};
	
	// boilKettle
	var boilKettleOption = document.getElementById("boilKettle");// event listener for meter survey area
	 
	if(boilKettleOption.addEventListener){
    boilKettleOption.addEventListener("change", boilKettle );
	};
	
	
	
	}// end of on_load_form_p6_read()



function collectPage1(){
	
	
	if(!sessionStorage.q1 || !sessionStorage.q2 || !sessionStorage.q3 || !sessionStorage.q4 || !sessionStorage.q5 || !sessionStorage.q6 ){
		
		
		
		if (!sessionStorage.q1){document.getElementById("ber_1").innerHTML = "<h3>please select the area your home is in.</h3> "}
		else if (!sessionStorage.q2){document.getElementById("ber_1").innerHTML = "<h3>What type of home.</h3> "}
		else if (!sessionStorage.q3){document.getElementById("ber_1").innerHTML = "<h3>Is your house detatched.</h3> "}
		else if (!sessionStorage.q4){document.getElementById("ber_1").innerHTML = "<h3>When was your house built.</h3> "}
		else if (!sessionStorage.q5){document.getElementById("ber_1").innerHTML = "<h3>How many rooms does your home have.</h3> "}
		else if (!sessionStorage.q6){document.getElementById("ber_1").innerHTML = "<h3>How many floors does your home have.</h3> "} 
		else{}
		
		}
		
		
		if(sessionStorage.q1 && sessionStorage.q2 && sessionStorage.q3 && sessionStorage.q4 && sessionStorage.q5 && sessionStorage.q6 ){
			window.open("ber_questioner_2.html", "_self");
			}
		
		
		// end of if
	
	}// end of collectPage1() 
	


function collectPage2(){
	
	
	if(!sessionStorage.q7 || !sessionStorage.q8 || !sessionStorage.q9 || !sessionStorage.q10 || !sessionStorage.q11 || !sessionStorage.q12 || !sessionStorage.q13){
		
		
		
		if (!sessionStorage.q7){document.getElementById("ber_2").innerHTML = "<h3>Is there a heated conservatory seperated from the main house by a door.</h3> "}
		else if (!sessionStorage.q8){document.getElementById("ber_2").innerHTML = "<h3>Is the conservatory double glazed</h3> "}
		else if (!sessionStorage.q9){document.getElementById("ber_2").innerHTML = "<h3>Is your home double or triple glazed.</h3> "}
		else if (!sessionStorage.q10){document.getElementById("ber_2").innerHTML = "<h3>What percentage of your home is double or triple glazed.</h3> "}
		else if (!sessionStorage.q11){document.getElementById("ber_2").innerHTML = "<h3>How are the main walls of your house constructed.</h3> "}
		else if (!sessionStorage.q12){document.getElementById("ber_2").innerHTML = "<h3>What type of roof does your home have.</h3> "}
		else if (!sessionStorage.q13){document.getElementById("ber_2").innerHTML = "<h3>How is your roof insulated.</h3> "}
		else{}
		
		}
		
		
		if(sessionStorage.q7 && sessionStorage.q8 && sessionStorage.q9 && sessionStorage.q10 && sessionStorage.q11 && sessionStorage.q12 && sessionStorage.q13 ){
			window.open("ber_questioner_3.html", "_self");
			}
		
		
		// end of if
	
	}// end of collectPage2() 

function collectPage3(){
	
	
	if(!sessionStorage.q14 || !sessionStorage.q15 || !sessionStorage.q16 || !sessionStorage.q17 || !sessionStorage.q18 || !sessionStorage.q19 || !sessionStorage.q20){
	
		if (!sessionStorage.q14){document.getElementById("ber_3").innerHTML = "<h3>What is your main source of heat.</h3> "}
		else if (!sessionStorage.q15){document.getElementById("ber_3").innerHTML = "<h3>What type of boiler do you have.</h3> "}
		else if (!sessionStorage.q16){document.getElementById("ber_3").innerHTML = "<h3>What is the main type of fuel used.</h3> "}
		else if (!sessionStorage.q17){document.getElementById("ber_3").innerHTML = "<h3>When was your boiler installed.</h3> "}
		else if (!sessionStorage.q18){document.getElementById("ber_3").innerHTML = "<h3>Is your boiler maintainer and serviced regularly.</h3> "}
		else if (!sessionStorage.q19){document.getElementById("ber_3").innerHTML = "<h3>What heating controls do you have.</h3> "}
		else if (!sessionStorage.q20){document.getElementById("ber_3").innerHTML = "<h3>Do you know how to control your heating.</h3> "} 
		else{}
		
		}
		
		
		if(sessionStorage.q14 && sessionStorage.q15 && sessionStorage.q16 && sessionStorage.q17 && sessionStorage.q18 && sessionStorage.q19 && sessionStorage.q20 ){
			window.open("ber_questioner_4.html", "_self");
			}
		
		
		// end of if
	
	}// end of collectPage3() 


function collectPage4(){
	
	
	if(!sessionStorage.q21 || !sessionStorage.q22 || !sessionStorage.q23 || !sessionStorage.q24 || !sessionStorage.q25 || !sessionStorage.q26 || !sessionStorage.q27){
	
		if (!sessionStorage.q21){document.getElementById("ber_4").innerHTML = "<h3>How is your water heated.</h3> "}
		else if (!sessionStorage.q22){document.getElementById("ber_4").innerHTML = "<h3>Is there a hot water cylinder.</h3> "}
		else if (!sessionStorage.q23){document.getElementById("ber_4").innerHTML = "<h3>Do you usually take a shower or a bath.</h3> "}
		else if (!sessionStorage.q24){document.getElementById("ber_4").innerHTML = "<h3>When you need hot water do you keep the tap running.</h3> "}
		else if (!sessionStorage.q25){document.getElementById("ber_4").innerHTML = "<h3>How large is your hot water cylinder.</h3> "}
		else if (!sessionStorage.q26){document.getElementById("ber_4").innerHTML = "<h3>Is there a thermostat for the cylinder.</h3> "}
		else if (!sessionStorage.q27){document.getElementById("ber_4").innerHTML = "<h3>Is the cylinder insulated and if so how thick is the insulation.</h3> "}
		else{}
		
		}
		
		
		if(sessionStorage.q21 && sessionStorage.q22 && sessionStorage.q23 && sessionStorage.q24 && sessionStorage.q25 && sessionStorage.q26 && sessionStorage.q27  ){
			window.open("ber_questioner_5.html", "_self");
			}
		
		
		// end of if
	
	}// end of collectPage4() 



function collectPage5(){
	
	
	if(!sessionStorage.q28 || !sessionStorage.q29 || !sessionStorage.q30 ){
	
		if (!sessionStorage.q28){document.getElementById("ber_5").innerHTML = "<h3>Do you have solar panels that heat the water for the house.</h3> "}//{alert("") }
		else if (!sessionStorage.q29){document.getElementById("ber_5").innerHTML = "<h3>Do you have photovoltaic PV panels for generating electricity..</h3> "}
		else if (!sessionStorage.q30){document.getElementById("ber_5").innerHTML = "<h3>Do you have a wind turbine for generating electricity.</h3> "}//{alert("") }
		
		else{}
		
		}
		
		
		if(sessionStorage.q28 && sessionStorage.q29 && sessionStorage.q30   ){
			window.open("ber_questioner_6.html", "_self");
			}
		
		
		// end of if
	
	}// end of collectPage5() 

function collectPage6(){
	
	
	if(!sessionStorage.q31 || !sessionStorage.q32 || !sessionStorage.q33 || !sessionStorage.q34 || !sessionStorage.q35 || !sessionStorage.q36 || !sessionStorage.q37){
	
		if (!sessionStorage.q31){document.getElementById("ber_6").innerHTML = "<h3>What type of meter do you have.</h3> "}
		else if (!sessionStorage.q32){document.getElementById("ber_6").innerHTML = "<h3>What percentage of your lighting have energy bulbs.</h3> "}
		else if (!sessionStorage.q33){document.getElementById("ber_6").innerHTML = "<h3>What temperature do you normally wash your clothes at.</h3> "}
		else if (!sessionStorage.q34){document.getElementById("ber_6").innerHTML = "<h3>Do you normally wait until the dishwasher and or washing machine is full before switching them on.</h3> "}
		else if (!sessionStorage.q35){document.getElementById("ber_6").innerHTML = "<h3>Are any of your appliances reguarly left switched on.</h3> "}
		else if (!sessionStorage.q36){document.getElementById("ber_6").innerHTML = "<h3>Do you dry most of your clothes in a tumble dryer.</h3> "}
		else if (!sessionStorage.q37){document.getElementById("ber_6").innerHTML = "<h3>Do you only boil the water you need when you boil the kettle.</h3> "}//{alert("") }
		else{}
		 
		}
		
		
		if(sessionStorage.q31 && sessionStorage.q32 && sessionStorage.q33 && sessionStorage.q34 && sessionStorage.q35 && sessionStorage.q36 && sessionStorage.q37  ){
			
			getMeterValue()
			//window.open("ber_questioner_result.html", "_self");
			}
		
		
		// end of if
	
	}// end of collectPage6() 


function getMeterValue(){// use the grade from each question to put a value on the meter

var zeros = 0;	
var poor = 0;
var fair = 0;
var good = 0;
var exec = 0;
var trap = 0;
var countQ = 0;
var poorPerCent = ((poor/37)*100);
var fairPerCent = ((fair/37)*100);
var goodPerCent = ((good/37)*100);
var execPerCent = ((exec/37)*100);
var base = 0;
var sur = 0;
var meterValue = 0;	
	
	
	for(var i=1; i<38; i++){// cycle through all answers and sort by grade 0 - 4
		
		// soret each question into a sector on the meter and count the number of times each sector was chosen
		if(sessionStorage.getItem("q"+i) == 0){zeros++;}
		
		else if (sessionStorage.getItem("q"+i) == 1){poor++;}	
		
		else if (sessionStorage.getItem("q"+i) == 2){fair++;}	
		
		else if (sessionStorage.getItem("q"+i) == 3){good++;}	
		
		else if (sessionStorage.getItem("q"+i) == 4){exec++;}	
		
		else{ trap++}
		
		}// end of loop
		
		bestSector()// call 
		
 
		
function bestSector(){ // Decide which sector got the highest number of secections
	
	// convert the score for each sector and see what percentage of the questions selected it
	poorPerCent = parseInt(((poor/37)*100).toFixed(0)); 
	fairPerCent = parseInt(((fair/37)*100).toFixed(0));
	goodPerCent = parseInt(((good/37)*100).toFixed(0));
	execPerCent = parseInt(((exec/37)*100).toFixed(0));
	//alert(typeof execPerCent)
	
	if((poorPerCent + fairPerCent + goodPerCent + execPerCent) <= 99){
	
	dnaPerCent = (100-(poorPerCent + fairPerCent + goodPerCent + execPerCent));
	
	
	 }
	 
	 else{
		 		 dnaPerCent = 0;
		 
		 };
	 
	
	sessionStorage.poor = poorPerCent;
	sessionStorage.fair = fairPerCent;
	sessionStorage.good = goodPerCent;
	sessionStorage.exec = execPerCent;
	sessionStorage.dna = dnaPerCent;
		
	var best = Math.max(poorPerCent, fairPerCent, goodPerCent, execPerCent);  // returns the highest percentage
	
	// Get the name of the sector and use that as the starting point.
	// The meter score is 0 - 15, a base value will be used to set the meter at the lowest score in that sector
	// then add a value between 0 - 3 depending on the overall percentage that sector received.
	
	if(best == execPerCent ){base = 11}// if the higest percentage was grade 4
	else if(best == goodPerCent ){base = 8}// if the higest percentage was grade 3
	else if(best == fairPerCent){base = 4}// if the higest percentage was grade 2
	else if(best == poorPerCent){base = 1}// if the higest percentage was grade 1
	else{alert("No Match")}
	
	// Now use the overall percentage to get a value from 0  - 3 which will be added to the base score
	// this will decide the score range within the sector
	
	if(base == 11 || base == 8){// on the high side of the meter a higher percentage means better results so we add the sur to the base
	// higher percentage means higher sur value
	if(best >= 75){sur = 3;}
	else if(best >= 50){sur = 2;}
	else if(best >= 40){sur = 1;}
	else if(best >= 30){sur = 0;}
	else{sur = -1;}
	
	}else if (base == 4 || base == 1){// on the low side of the meter a higher percentage means worse results so we reverse the value of sur 
	// higher percentage means lower sur value	
		if(best >= 75){sur = 0;}
		else if(best >= 50){sur = 1;}
		else if(best >= 25){sur = 2;}
		else{sur = 3;}
	
		}
	else{
		
		}// end if 
	
	
	sessionStorage.meterValue = base+sur; // add the base value (sector with highest percentage) to the sur value (use percentage to calculate this value)
	
	//alert("Base = "+base+"\n sur = "+sur)
	window.open("ber_questioner_result.html", "_self");// when the page opens it will use setMeter() function to display the value 
	//return base+sur;
	
	}// end of bestSector()


	}// end of if if(base == 11 || base == 8)
	




/// end of code
	
	