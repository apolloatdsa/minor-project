//Code reuse
// Ref: http://www.site.com/page#ref
// Ref: Book Title, Author, Publisher, Edition, page number

// Ref: Code provided by lab assistant: name or fellow participant: 



// JavaScript Document

// carbon meter

 								
								
								
	function setM(v){ //v is a value supplied by the calling function -- a variable called meter (0 - 15)
									
	document.getElementById('carbonM').meterValue.value = v; // take the value of v and write it to the number input
	document.getElementById('carbonM').range.value = v; // take the value of v and write it to the slider input
	document.getElementById("meter").src = "img/"+v+"-ber-meter.jpg"; // change the image to show position (0 - 15)
									
									
		};
								
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
									
									
	}	
									
	function decreaseMeter(){
									
	if(document.getElementById('carbonM').range.value >0){
									
	meter = document.getElementById('carbonM').range.value; // get value entered in meter value box
	meter--;
	setM(meter)
	}
									
									
	}	
									
		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////									
	function on_load_login(){

	
    var loginButton = document.getElementById("login-btn");// event listener for range slider
	 
	 if(loginButton.addEventListener){
         loginButton.addEventListener("click", readLogin );
   
   };
	
	};
	
	
	
	
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

var loginEmail;
var loginUser =' Please login ';
var localUser = localStorage.getItem("user");

 function readLogin(){
	
	 
	 loginEmail = document.getElementById("login-em").value;
	 var loginUser = document.getElementById("login-user").value;
	 
	 //alert(loginUser)
	 localStorage.setItem("user", loginUser); // will place the entered name in local storage
	 localUser = localStorage.getItem("user");
	 alert(localUser)
	 
	 
	 if(loginUser == 'undefined' || loginUser == 'null'|| loginUser == 'Null' || loginUser == ''  ){
	 document.getElementById("logged-in-user").innerHTML = "Please login";
		}
	
		else {
		//alert("not undefined Null null or blank")
		document.getElementById("logged-in-user").innerHTML = "Welcome "+localUser;
		}
	
	 	}	
	
	 
 function userDiv() {
	 //loginUser = 'Please login';
	 
	 localUser = localStorage.getItem("user");
	 //alert("This the User div function "+foo);
	 document.getElementById("logged-in-user").innerHTML = "Welcome "+localUser;
	 
	 }
	 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Read survey questions and store results in local storage then add all results to display a reading on the meter
// Options can be changed at any stage and will not be counted more than once
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var areaSurvey = 0;
var houseTypeSurvey = 0;
var detsemiSurvey = 0;
var builtWhenSurvey = 0;
var result = 0;


function showResult(){
	
	
	result = areaSurvey + houseTypeSurvey + detsemiSurvey + builtWhenSurvey
	//result = result.toFixed(2)
	alert("Result so far "+result)
	
	}// end of show Result function
	

function readArea(){
		//alert("area option has activety")		
		areaSurvey = document.getElementById("area").value;// read the option value
		localStorage.setItem("areaSurvey", areaSurvey);// write value to local storage
		areaSurvey = localStorage.getItem("areaSurvey");// get local stored value and update the variable
		areaSurvey = parseInt(areaSurvey);// make sure it is a real number

		showResult();
		}// end of readArea
		
		
function houseType(){
		//alert("detsemi option has activety")	
		houseTypeSurvey = document.getElementById("houseType").value; // read the option value
		localStorage.setItem("houseTypeSurvey", houseTypeSurvey) // write value to local storage
		houseTypeSurvey = localStorage.getItem("houseTypeSurvey");// get local stored value and update the variable
		houseTypeSurvey = parseInt(houseTypeSurvey); // make sure it is a real number
		
		showResult();
		};		
		
function detsemi(){
	//alert("detsemi option has activety")
	detsemiSurvey = document.getElementById("detsemi").value; // read the option value
		localStorage.setItem("detsemiSurvey", detsemiSurvey) // write value to local storage
		detsemiSurvey = localStorage.getItem("detsemiSurvey");// get local stored value and update the variable
		detsemiSurvey = parseInt(detsemiSurvey); // make sure it is a real number
		
		showResult();
	
	
	}; // end of detatched or semi
	
	
function builtWhen(){
	
	//alert("Built option has activety")
		builtWhenSurvey = document.getElementById("builtWhen").value; // read the option value
		localStorage.setItem("builtWhenSurvey", builtWhenSurvey) // write value to local storage
		builtWhenSurvey = localStorage.getItem("builtWhenSurvey");// get local stored value and update the variable
		builtWhenSurvey = parseInt(builtWhenSurvey);
		
	//alert(typeof builtWhenSurvey);
	showResult();
	
	}// built when function 	



function numboffloors(){
	alert("Number of floors function")
	
	
	}// numboffloors

function conservatory(){
	alert("Conservatory has activity")
	
	}//conservatory


function conDubGlass(){
	
	alert("conDubGlass")
	
	
	}

function perCentDTGlazed(){
	alert("perCentDTGlazed")
	
	
	}// perCentDTGlazed


function wallsConst(){
	
	alert("wallsConst")
	
	}// wallsConst



function typeOfRoof(){
	alert(" typeOfRoof ")

	
	}


function roofInsul(){
	alert("Roof insulation  ")
	
	
	}


function homeDubTripG(){
	
	alert("Double or Triple Glazing")
	
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
   
   
};// on_load_form_read


	
function on_load_form_p2_read(){
	
	
	//alert("on_load_form_p2_read")
	
	var numboffloorsOption = document.getElementById("numboffloors");// event listener for meter survey area
	 
	 if(numboffloorsOption.addEventListener){
       numboffloorsOption.addEventListener("change", numboffloors );
	   };


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
	