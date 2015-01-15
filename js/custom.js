//Code reuse
// Ref: http://www.site.com/page#ref
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
	
	
	
	}// end of on_load_zeroMeter()
							
function setM(v){ //v is a value supplied by the calling function -- a variable called meter (0 - 15)
									
	document.getElementById('carbonM').meterValue.value = v; // take the value of v and write it to the number input
	document.getElementById('carbonM').range.value = v; // take the value of v and write it to the slider input
	document.getElementById("meter").src = "img/"+v+"-ber-meter.jpg"; // change the image to show position (0 - 15)
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
									
		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////									
	
	
	
	
//////////////////////////////////////////////////////////////////////////////////////////////
// The login uses HTML 5 session storage to store the user login. It looks for an email and 
// a user name as a valid login and then displays the user name in the headder
/////////////////////////////////////////////////////////////////////////////////////////////

function on_load_login(){// add event listener

    var loginButton = document.getElementById("login-btn");// event listener for range slider
	 
	if(loginButton.addEventListener){
    loginButton.addEventListener("click", readLogin );
   
   };
   
   var createAccBtnButton = document.getElementById("createAccBtn");// event listener for range slider
	 
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
	document.getElementById("logout").innerHTML = '<a href="#login" data-toggle ="modal"><span class="glyphicon glyphicon-log-in"></span> Login</a>';
	sessionStorage.userIsLoggedIn = false;	 
	}
	 
	else{
			 
	document.getElementById("logged-in-user").innerHTML = "Welcome "+sessionStorage.userIs;
	document.getElementById("logout").innerHTML = '<a href="#login2" data-toggle ="modal"><span class="glyphicon glyphicon-log-in"></span> Logout</a>';
	sessionStorage.userIsLoggedIn = true;
			 
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
	document.getElementById("logged-in-user").innerHTML = "Welcome "+sessionStorage.userIs;
	sessionStorage.userIsLoggedIn = true;

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
	//alert("area option has activety")		
	sessionStorage.areaSurvey = document.getElementById("area").value;// read the option value
	//alert("Your house is "+sessionStorage.areaSurvey)
		
	//showResult();
	}// end of readArea
		
		
function houseType(){
	//alert("detsemi option has activety")	
	sessionStorage.houseTypeSurvey = document.getElementById("houseType").value; // read the option value
	//alert("Your house is "+sessionStorage.houseTypeSurvey)
		
		//showResult();
		};		
		
function detsemi(){
	//alert("detsemi option has activety")
	sessionStorage.detsemiSurvey = document.getElementById("detsemi").value; // read the option value	
	//alert("Your house is "+sessionStorage.detsemiSurvey)
		//showResult();
	
	
	}; // end of detatched or semi
	
	
function builtWhen(){
	
	//alert("Built option has activety")
	sessionStorage.builtWhenSurvey = document.getElementById("builtWhen").value; // read the option value
	//alert("Your home was built "+sessionStorage.builtWhenSurvey)
	
	//showResult();
	
	}// built when function 	



function rooms(){
	
	//alert("Number of rooms has activity ")
	
	sessionStorage.roomsSurvey = document.getElementById("rooms").value; // read the option value
	//alert("Number of rooms is = "+sessionStorage.roomsSurvey)
	
	// showResult();
	
	
	};



function numboffloors(){
	
	//alert("Number of floors has activety ")
	
	sessionStorage.numboffloorsSurvey = document.getElementById("numboffloors").value; // read the option value
	//alert("Number of floors is = "+sessionStorage.numboffloorsSurvey)
	
	//showResult();
	
	
	
	
	}// numboffloors

function conservatory(){
	
	//alert("Conservatory has activity")
	
	sessionStorage.conservatorySurvey = document.getElementById("conservatory").value; // read the option value
	//alert("Do you have a conservatory ? "+sessionStorage.conservatorySurvey)
	
	// showResult();

	
	}//conservatory


function conDubGlass(){
	
	//alert("conDubGlass")
	sessionStorage.conDubGlassSurvey = document.getElementById("conDubGlass").value; // read the option value
	//alert("Is the conservatory double or triple glased ? "+sessionStorage.conDubGlassSurvey)
	
	// showResult();
	
	
	}

function perCentDTGlazed(){
	
	//alert("perCentDTGlazed")
	sessionStorage.perCentDTGlazedSurvey = document.getElementById("perCentDTGlazed").value; // read the option value
	//alert("What percentage of your home is double or triple glazed ? "+sessionStorage.perCentDTGlazedSurvey)
	
	
	}// perCentDTGlazed


function wallsConst(){
	
	//alert("wallsConst")
	sessionStorage.wallsConstSurvey = document.getElementById("wallsConst").value; // read the option value
	//alert("How are your walls constructed ? "+sessionStorage.wallsConstSurvey)
	
	
	
	}// wallsConst



function typeOfRoof(){
	
	// alert(" typeOfRoof ")
	sessionStorage.typeOfRoofSurvey = document.getElementById("typeOfRoof").value; // read the option value
	//alert("What type of roof do you have  "+sessionStorage.typeOfRoofSurvey)
	

	
	}


function roofInsul(){
	//alert("Roof insulation  ")
	sessionStorage.roofInsulSurvey = document.getElementById("roofInsul").value; // read the option value
	//alert("What type of roof insulation do you have  "+sessionStorage.roofInsulSurvey)
	
	
	}


function homeDubTripG(){
	
	//alert("Double or Triple Glazing has activety ")
	sessionStorage.homeDubTripGSurvey = document.getElementById("homeDubTripG").value; // read the option value
	//alert("Is your home double or triple glased ? "+sessionStorage.homeDubTripGSurvey)
	
	// showResult();
	
	
	}



function on_load_form_read() {
	
	///alert("Area option changed")
	var areaOption = document.getElementById("area");// event listener for meter survey area
	 
	if(areaOption.addEventListener){
	//alert("In the if area")
    areaOption.addEventListener("change", readArea );
	 };
	   

   ///alert("House type option changed")
	var houseTypeOption = document.getElementById("houseType");// event listener for meter survey house type
	 
	if(houseTypeOption.addEventListener){
    houseTypeOption.addEventListener("change", houseType );
	};  
		
   //alert("detsemi")
	var detsemiOption = document.getElementById("detsemi");// event listener for meter survey house type
	 
	if(detsemiOption.addEventListener){
    detsemiOption.addEventListener("change", detsemi );
	};  
   
   //alert("detsemi")
	var builtWhenOption = document.getElementById("builtWhen");// event listener for meter survey house type
	 
	if(builtWhenOption.addEventListener){
    builtWhenOption.addEventListener("change", builtWhen );
	};  
	  
	  
	//alert("on_load_form_p2_read")
	
	var numboffloorsOption = document.getElementById("numboffloors");// event listener for meter survey area
	 
	if(numboffloorsOption.addEventListener){
    numboffloorsOption.addEventListener("change", numboffloors );
	};
	   
	   
	 // rooms
	   
	var roomsOption = document.getElementById("rooms");// event listener for meter survey area
	 
	if(roomsOption.addEventListener){
    roomsOption.addEventListener("change", rooms );
	};
	   
	   
   
   
};// on_load_form_read


	
function on_load_form_p2_read(){
	

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
	//alert(" Source of heat has activity ")
	sessionStorage.sourceOfHeatSurvey = document.getElementById("sourceOfHeat").value; // read the option value
	//alert("What is your main source of heat ? "+sessionStorage.sourceOfHeatSurvey)
	
	// showResult();
	
	}


function typeOfBoiler(){
	
	//alert(" Type of boiler has activity ")
	sessionStorage.typeOfBoilerSurvey = document.getElementById("typeOfBoiler").value; // read the option value
	//alert("What type of boiler do you use ? "+sessionStorage.typeOfBoilerSurvey)
	
	// showResult();
	
	
	
	}

function typeOfFuel(){
	
	//alert(" Type of fuel has activity ")
	
	sessionStorage.typeOfFuelSurvey = document.getElementById("typeOfFuel").value; // read the option value
	//alert("What type of fuel do you use ? "+sessionStorage.typeOfFuelSurvey)
	
	// showResult();
	
	
	
	
	}
	
	
function whenBoilerInstalled(){
	
	//alert(" When boiler installed has activety")
	sessionStorage.whenBoilerInstalledSurvey = document.getElementById("whenBoilerInstalled").value; // read the option value
	//alert("When was your boiler installed ? "+sessionStorage.whenBoilerInstalledSurvey)
	
	// showResult();
	
	
	
	}

function boilerServiced(){
	
	//alert("Is the boiler serviced has activety ")
	sessionStorage.boilerServicedSurvey = document.getElementById("boilerServiced").value; // read the option value
	//alert("Do you have a regular service ? "+sessionStorage.boilerServicedSurvey)
	
	// showResult();
	
	
	
	}

function heatingControl(){
	//alert(" Heating control has activety ")
	sessionStorage.heatingControlSurvey = document.getElementById("heatingControl").value; // read the option value
	//alert("What heating controls do you use "+sessionStorage.heatingControlSurvey)
	
	// showResult();
	
	
	
	
	
	}
	
	
function canYouUseControl(){
	
	//alert("Can you set the controls has activety")
	sessionStorage.canYouUseControlSurvey = document.getElementById("canYouUseControl").value; // read the option value
	//alert("Do you know how to control your heating ? "+sessionStorage.canYouUseControlSurvey)
	
	// showResult();

	}; // end of 
	

function on_load_form_p3_read(){
		
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
	
	//alert("Water heater has activety")
	sessionStorage.waterHeaterSurvey = document.getElementById("waterHeater").value; // read the option value
	//alert("How do you heat the water ? "+sessionStorage.waterHeaterSurvey)
	
	// showResult();

	};

function cylinder(){
	
	//alert("hot water cylinder has activety")
	sessionStorage.cylinderSurvey = document.getElementById("cylinder").value; // read the option value
	//alert("Is there a hot water cylinder ? "+sessionStorage.cylinderSurvey)
	
	// showResult();
	};

function showerBath(){
	//alert("How do you wash has activety")
	sessionStorage.showerBathSurvey = document.getElementById("showerBath").value; // read the option value
	//alert("Is there a hot water cylinder ? "+sessionStorage.showerBathSurvey)
	
	// showResult();
	
	};

function runningTap(){
	
	//alert("Running tap has activety")
	sessionStorage.runningTapSurvey = document.getElementById("runningTap").value; // read the option value
	//alert("Do you keep the hot tap running ? "+sessionStorage.runningTapSurvey)
	
	// showResult();
	
	}

function cylinderSize(){
	//alert("Cylinder size has activety")
	sessionStorage.cylinderSizeSurvey = document.getElementById("cylinderSize").value; // read the option value
	//alert("What size is the cylinder ? "+sessionStorage.cylinderSizeSurvey)
	
	// showResult();
	
	}
function cylinderTermo(){
	//alert("Cylinder size has activety")
	sessionStorage.cylinderTermoSurvey = document.getElementById("cylinderTermo").value; // read the option value
	//alert("Does your cylinder have a thermostat ? "+sessionStorage.cylinderTermoSurvey)
	
	// showResult();
	
	
	}
	
function cylinderInsulType(){
	//alert("cylinder Insul Type has activety")
	sessionStorage.cylinderInsulTypeSurvey = document.getElementById("cylinderInsulType").value; // read the option value
	//alert("What insulation is on the cylinder ? "+sessionStorage.cylinderInsulTypeSurvey)
	
	// showResult();
	
	
	}



function on_load_form_p4_read(){
	
	//waterHeater
	
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
	//alert("hotWaterSolar has activety")
	sessionStorage.hotWaterSolarSurvey = document.getElementById("hotWaterSolar").value; // read the option value
	//alert("Do you have solar panels to heat water ? "+sessionStorage.hotWaterSolarSurvey)
	
	// showResult();

	}

function pvPanels(){
	//alert("PV panel has activety")
	sessionStorage.pvPanelsSurvey = document.getElementById("pvPanels").value; // read the option value
	//alert("Do you have PV panels to generate electricity ? "+sessionStorage.pvPanelsSurvey)
	
	// showResult();

	}

function windTurbine(){
	//alert("Wind Turbine has activety")
	sessionStorage.windTurbineSurvey = document.getElementById("windTurbine").value; // read the option value
	//alert("Do you have a wind turbine to generate electricity ? "+sessionStorage.windTurbineSurvey)
	
	// showResult();

	}



	

function on_load_form_p5_read(){
	
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
	//alert("Single or Dual meter has activety")
	sessionStorage.singleOrDualMeterSurvey = document.getElementById("singleOrDualMeter").value; // read the option value
	//alert("Do you have a single or dual meter ? "+sessionStorage.singleOrDualMeterSurvey)
	
	// showResult();
	
	
	}


function energyBulbs(){
	
	//alert("energy Bulbs has activety")
	sessionStorage.energyBulbsSurvey = document.getElementById("energyBulbs").value; // read the option value
	//alert("What percentage of your home has energy bulbs ? "+sessionStorage.energyBulbsSurvey)
	
	// showResult();
	
	
	}

function washTemp(){
	//alert("What temp do you wash clothes at has activety")
	sessionStorage.washTempSurvey = document.getElementById("washTemp").value; // read the option value
	//alert("What temp do you wash clothes at has activety ? "+sessionStorage.washTempSurvey)
	
	// showResult();
	
	
	}
	
	
function waitForFull(){
	//alert("Wait for full load has activety")
	sessionStorage.waitForFullSurvey = document.getElementById("waitForFull").value; // read the option value
	//alert("Wait for full load has activety ? "+sessionStorage.waitForFullSurvey)
	
	// showResult();

	}

function tumbleDry(){
	//alert("Tumble dry has activety")
	sessionStorage.tumbleDrySurvey = document.getElementById("tumbleDry").value; // read the option value
	//alert("Tumble dry has activety ? "+sessionStorage.tumbleDrySurvey)
	
	// showResult();
	
	
	}
	
function leftOn(){
	//alert("Appliances left on standby has activety")
	sessionStorage.leftOnSurvey = document.getElementById("leftOn").value; // read the option value
	//alert("Appliances left on standby has activety ? "+sessionStorage.leftOnSurvey)
	
	// showResult();
	
	}
	
function boilKettle(){
	//alert("Boil kettle has activety")
	sessionStorage.boilKettleSurvey = document.getElementById("boilKettle").value; // read the option value
	//alert("Boil kettle has activety ? "+sessionStorage.boilKettleSurvey)
	
	// showResult();
	
	
	} 	
	

function on_load_form_p6_read(){
	
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
