	$(function(){
	
	'use strict';
        
        alert("test");

 //hideMe();


    //-------------------------------    
  $('#sammy').click(function openSammy() {
    window.open("http://www.sammydress.com/");
}) ; 
       
       
});    
//===========================================================================
     
 function hideMe() {
 	
		 $('#wrapper1 img').mouseover(function(){
		   $('.gallery #dix').hide(); 

		      
		});    
		      
	    //-----------------------     
		 
		$('#wrapper1 img').mouseout(function(){
		   $('.gallery #dix').show(); 
		});
     
     		        
	

 }
    
 //-----------------------
    

   
 