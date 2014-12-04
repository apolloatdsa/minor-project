// JavaScript Document

// carbon meter

 								
								
								
								function setM(v){ //v is a value supplied by the calling function -- a variable called meter 
									
									document.getElementById('carbonM').meterValue.value = v; // take the value of v and write it to the number input
									document.getElementById('carbonM').range.value = v; // take the value of v and write it to the slider input
									document.getElementById("meter").src = "img/"+v+"-meter.jpg"; // change the image
									
									
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
	