//=========  Mis en valeur globale  ===================
var jsonData; 
var phone =[];
var email = [];
var brand = [];
var title = [];
var description = [];
var local = [];
var address = [];
var postal = [];
var price = [];



//-------------------
var arrayPictures = [];
var pictures = [];


 // Debut de la fontion principale
//---------------------------
$(document).ready(function(){

   // alert("test2");
    
	'use strict';
		$.getJSON("json/dataListing.json", function(resultat) {
			 jsonData = resultat;
			
			 //alert("la valeur resultat: " + resultat);
			 console.log("The result in json data: " + jsonData);
	
	//	parseJSON();
        
      //  displayData();
			
		
//            console.log("prices: " + picDes);
//		 	console.log(des_names);	
//         	console.log(priceDes);
//            console.log(descriptionDes);
//            console.log(sup_CoffDes);
//            console.log(sup_vinDes);
			
			
		});
});

// fonction qui va parcourir et parser le fichier Json contenant lers details des menus
		function parseJSON(){
		'use strict';
			
			
			   //alert( jsonData.MENU["MARCHE"]);
			for(var item in jsonData.MENU){
				
			 
				if(jsonData.MENU.hasOwnProperty(item)){
					plat_names.push(item);
 					pictures.push(jsonData.MENU[item][0]);
					menuPlat.push(jsonData.MENU[item][1]);
 				  	price.push(jsonData.MENU[item][2]);
					description.push(jsonData.MENU[item][3]);
					sup_from.push(jsonData.MENU[item][4]);
					sup_vin.push(jsonData.MENU[item][5]);
 
 			 
                }
           
            }
            //==================================== TEST
            for(var item in jsonData.DESSERT){
				
			 
				if(jsonData.DESSERT.hasOwnProperty(item)){
					des_names.push(item);
 					picDes.push(jsonData.DESSERT[item][0]);
					menuPlatDes.push(jsonData.DESSERT[item][1]);
 				  	priceDes.push(jsonData.DESSERT[item][2]);
					descriptionDes.push(jsonData.DESSERT[item][3]);
					sup_CoffDes.push(jsonData.DESSERT[item][4]);
					sup_vinDes.push(jsonData.DESSERT[item][5]);
 
 			 
                }
           
            }
            console.log(jsonData.DESSERT)
            //===================================
            
        }
 

function displayData(){
	
	'use strict';
	
	//============================== parametre toujours en MAJUSCULE ===
	var body = document.getElementsByTagName("SECTION")[0];
	
	
	for(var i = 0; i< plat_names.length; i++){
		
		//-------- On cre des objet pour le data ------
		
		//============================== parametre toujours en MAJUSCULE ===
		var wrapper = document.createElement("DIV"); 
		
		wrapper.setAttribute("class", "wrapper");
		
		var textTitle = document.createTextNode(menuPlat[i]);
		var textStaring = document.createTextNode(description[i]);
		var textPrice = document.createTextNode(price[i]);
        
     
		
		//============================== parametre toujours en MAJUSCULE ===
		var images = document.createElement("IMG");
		images.setAttribute("src", "images/" + pictures[i]);
        images.setAttribute("width", "350" );
        images.setAttribute("heigth", "230" );
        
        
        //--------------------------------------------------
	 	//$("IMG").css({"width": "300", "height": "200"});
		
		//-------------- On des div pour afficher ---------------------
		var divForImages = document.createElement("DIV");
		divForImages.setAttribute("id", "divForImages");
		
		var divForTilte = document.createElement("DIV");
		divForTilte.setAttribute("id", "divForTilte");
		
		var divForStars = document.createElement("DIV");
		divForStars.setAttribute("id", "divForStars");
		
		var divForPrices = document.createElement("DIV");
		divForPrices.setAttribute("id", "divForPrices");
		
        var divForboutton = document.createElement("DIV");
		divForboutton.setAttribute("id", "divForboutton");
     
		
  
        
		//---------- BOUTON COMMANDER--------------
             var bouton = document.createElement('INPUT');
            bouton.setAttribute('type', 'button');
            bouton.setAttribute('id', 'idBouton');
            bouton.setAttribute('value', 'COMMANDER');
            bouton.setAttribute('onclick', 'funcCalcul()');


		// Input pour la quatite de plats commande
		 var qte = document.createElement('INPUT');
            qte.setAttribute('type', 'number');
            qte.setAttribute('id', 'idQuantite');
			qte.setAttribute('min', '1');
			qte.setAttribute('max', '30');
			qte.setAttribute("value", "0");
         
		// Textnode pour la quatite de plats commande
		var textQte = document.createTextNode("Quantité: ")
		
        
          
		
            divForboutton.appendChild(bouton);
			divForboutton.appendChild(qte);
		    divForboutton.appendChild(textQte);
		
        //     divForboutton.appendChild(bouton2);
        
        
		divForImages.appendChild(images);
		
		divForTilte.appendChild(textTitle);
		
		divForStars.appendChild(textStaring);
		
		divForPrices.appendChild(textPrice);
        
        //--------------------------------------
        divForPrices.appendChild(divForboutton);
        
         var textH3 = document.createElement("H3");
       // $("H3").val({"COMMANDER"});
		
      //  divForboutton.appendChild(textH3);
        
        
        
        
        
        
		
		//-----------------------------
		wrapper.appendChild(divForImages);
		wrapper.appendChild(divForTilte);
		wrapper.appendChild(divForStars);
		wrapper.appendChild(divForPrices);
        
        
       
       
        
    
		
	 body.appendChild(wrapper);
		
		
	
	}
	
}

