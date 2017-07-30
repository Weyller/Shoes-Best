////=========  Mis en valeur globale  ===================
var jsonData; 

var itemsInJson = [];
var phone =[];
var email = [];
var brand = [];
var title = [];
var description = [];
var local = [];
var address = [];
var postal = [];
var price = [];


////-------------------
var arrayPictures = [];
var pictures = [];

$(function(){
	
	'use strict';
    
    alert("test");
     
 		$.getJSON("json/dataListing.json", function(resultat) {
			 jsonData = resultat;
			
			// alert("la valeur resultat: " + resultat);
			 
	
		parseJSON();
        
        displayData();
			
		
           console.log("items: " + itemsInJson);
 		 	console.log(phone);	
         	console.log(email);
            console.log(brand);
            console.log(title);
            console.log(description);
            console.log(local);	
         	console.log(address);
            console.log(postal);
            console.log(price);
            console.log(pictures);
			
			
		});
        
 
});
        

// fonction qui va parcourir et parser le fichier Json contenant lers details des menus
		function parseJSON(){
		'use strict';
			
			
            console.log( jsonData.PROFIL["DETAILS"]);
			for(var item in jsonData.PROFIL){
				
			 
				if(jsonData.PROFIL.hasOwnProperty(item)){
					itemsInJson.push(item);
 					phone.push(jsonData.PROFIL[item][0]);
 					email.push(jsonData.PROFIL[item][1]);
  				  	brand.push(jsonData.PROFIL[item][2]);
 					title.push(jsonData.PROFIL[item][3]);
 					description.push(jsonData.PROFIL[item][4]);
 					local.push(jsonData.PROFIL[item][5]);
 
                    address.push(jsonData.PROFIL[item][6]);
 					postal.push(jsonData.PROFIL[item][7]);
 					price.push(jsonData.PROFIL[item][8]);
 					pictures.push(jsonData.PROFIL[item][9]);
 			 
                }
           
            }

            
        }
 

function displayData(){
	
	'use strict';
	
	//============================== parametre toujours en MAJUSCULE ===
	var body = document.getElementsByTagName("SECTION")[1];
    
    body.setAttribute("class", "mainSection");
	
	
	for(var i = 0; i< itemsInJson.length; i++){
		
		//-------- On cre des objet pour le data ------
		
		//============================== parametre toujours en MAJUSCULE 
        var container = document.createElement('DIV');
        container.setAttribute("class","container section1")
        //----------
        var row = document.createElement('DIV');
        row.setAttribute("class","row");
        row.setAttribute("id","main");
        //---------
        var col = document.createElement('DIV');
        col.setAttribute("class","col-sm-6")
        
		var wrapperRow = document.createElement("DIV"); 
		
		wrapperRow.setAttribute("class", "row");
		//---------------------------
        var mainTitle =      document.createElement('H2');
        mainTitle.setAttribute("id","title");
        
        //$('H2').html("MY TITLE");
        mainTitle.innerHTML = title[i];
      
        //---------------------------
		var textTitle = document.createTextNode(title[i]);
		var textStaring = document.createTextNode(description[i]);
		var textPrice = document.createTextNode(price[i]);
        
     
		
		//============================== parametre toujours en MAJUSCULE ===
		var images = document.createElement("IMG");
		images.setAttribute("src", "images/" + pictures[0][1]);
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
//             var bouton = document.createElement('INPUT');
//            bouton.setAttribute('type', 'button');
//            bouton.setAttribute('id', 'idBouton');
//            bouton.setAttribute('value', 'COMMANDER');
//            bouton.setAttribute('onclick', 'funcCalcul()');


         
		// Textnode pour la quatite de plats commande
		var textQte = document.createTextNode("Quantité: ")
		
        
          
		
//            divForboutton.appendChild(bouton);
//			divForboutton.appendChild(qte);
//		    divForboutton.appendChild(textQte);
		
        //     divForboutton.appendChild(bouton2);
        
        
        divForTilte.appendChild(textTitle);
        
		divForImages.appendChild(images);
		
		divForStars.appendChild(textStaring);
		
		divForPrices.appendChild(textPrice);
        
        //--------------------------------------
        divForPrices.appendChild(divForboutton);
        
         var textH3 = document.createElement("H3");
       // $("H3").val({"COMMANDER"});
		
      //  divForboutton.appendChild(textH3);
        
        
        
        
        
        
		
		//-----------------------------
		wrapperRow.appendChild(mainTitle);
        
      
        
		wrapperRow.appendChild(divForTilte);
        wrapperRow.appendChild(divForImages);
		wrapperRow.appendChild(divForStars);
		wrapperRow.appendChild(divForPrices);
        
        
       
        
           col.appendChild(wrapperRow);
            
        row.appendChild(col);
		
	 container.appendChild(row);

    body.appendChild(container);
		
	
	}
	
}

