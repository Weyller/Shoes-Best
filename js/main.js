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
    
    //alert("test");
     
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
			
			
           // console.log( jsonData.PROFIL["DETAILS"]);
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
        var mainTitle =  document.createElement('H2');
        mainTitle.setAttribute("id","title");
        
        //$('H2').html("MY TITLE");
        mainTitle.innerHTML = title[i];
  
        //-------------------------------------------------
		
        var divSellerPro = document.createElement('DIV');
        divSellerPro.setAttribute("class","sellerProfil");
        divSellerPro.setAttribute("height","60");
        divSellerPro.setAttribute("width","800");
        divSellerPro.setAttribute("style","background-color:red;");
        //---------------------------------------------
        var spanMap = document.createElement('SPAN');
        spanMap.setAttribute("class","map");
        //--------------------------------------------
        var iMap = document.createElement('I');
        iMap.setAttribute("class","fa fa-map-marker");
        iMap.setAttribute("aria-hidden","true");
        //--------------------------------------------
        var textMap = document.createTextNode("Map");
        //---------------------------------------------
        var spanSell = document.createElement('SPAN');
        spanMap.setAttribute("class","seller");
        //--------------------------------------------
        var isell = document.createElement('I');
        isell.setAttribute("class","fa fa-user");
        isell.setAttribute("aria-hidden","true");
        //--------------------------------------------
        var textSell = document.createTextNode("Seller's profil");
        //---------------------------------------------
        var spanSave = document.createElement('SPAN');
        spanMap.setAttribute("class","favorite");
        //--------------------------------------------
        var iFavo = document.createElement('I');
        iFavo.setAttribute("class","fa fa-heart-o");
        iFavo.setAttribute("aria-hidden","true");
        //--------------------------------------------
        var textSave = document.createTextNode("Save");
        //----------------------------------------
        var aImgFocus = document.createElement('A');
        aImgFocus.setAttribute("href","#");
        aImgFocus.setAttribute("class","focusImg");
        //---------------------------------------
        var images = document.createElement("IMG");
		images.setAttribute("src", "images/" + pictures[0][i]);
        images.setAttribute("width", "50%" );
        images.setAttribute("alt", "Shoes Best" );
        //----------------------------------------
        var divDesc = document.createElement('DIV');
        divDesc.setAttribute("class","description");
        
        var textDesc = document.createTextNode("Description");
        //---------------------------------------
        var pDescription = document.createElement('P');
        //---------------------------
		
		var textDescription = document.createTextNode(description[i]);
        //-----------------------------------
		var spanButton = document.createElement('SPAN');
        spanButton.setAttribute("class","btnresize btnresize1");
        //--------------------------------------
        var buttonPlus = document.createElement('BUTTON');
        buttonPlus.setAttribute("class","btn btn-warning btn-lg btn-block");
		//----------------------------------------
        var iButtPlus = document.createElement('I');
        iButtPlus.setAttribute("class","fa fa-search-plus");
        iButtPlus.setAttribute("aria-hidden","true");
        //-----------------------------------------
         var textPlus = document.createTextNode("image");
        //------------------------------------------
         var divSamllGally = document.createElement('DIV');
        divSamllGally.setAttribute("class","container smallgallery");
        var spanEmpty = document.createElement('SPAN');
        spanEmpty.setAttribute("class","");
        //-----------------------------------------
        var rowSmallGally = document.createElement('DIV');
        rowSmallGally.setAttribute("class","row");
        rowSmallGally.setAttribute("id","main");
        //-------------------------------------------
        var clasSmallGally = document.createElement('DIV');
        clasSmallGally.setAttribute("class","col-sm-12");
        //-------------------------------------------
        var aThumbs = document.createElement('A');
        aThumbs.setAttribute("href","#");
        aThumbs.setAttribute("class","thumbnail2");
        //--------------------------------------------
        var imageThumbs = []
        
        for(var j=0; j<pictures[0].length; j++){
            
            imageThumbs[j] = document.createElement('IMG');
            
        }
        
        for (var index = 0; index< pictures[0].length; index++){
            imageThumbs[index].setAttribute("src", "images/" + pictures[0][index]);
        imageThumbs[index].setAttribute("width","25%");
        imageThumbs[index].setAttribute("height","100%");
        imageThumbs[index].setAttribute("alt","Shoes Best");
        }
        // console.log(imageThumbs)
        //----------------------------------------------
        var col2 = document.createElement('DIV');
        col2.setAttribute("class","col-sm-6 section2");
        
        //---------------------------------------------
        var h3Seller = document.createElement('H3');
       //  $('H3').text(title[i]);
        
        h3Seller.innerHTML = "Contact Seller";
        //---------------------------------------------
        var pContact = document.createElement('P');
        pContact.innerHTML = "Contact the seller for moer information"
        //---------------------------------------------
        var form = document.createElement('FORM');
        form.setAttribute("action","php/contact_seller_page.php")
        form.setAttribute("id","formSeller");
        //---------------------------------------------
        var textName = document.createTextNode("Your name: ")
        //----------------------------------------------
        var inputName = document.createElement('INPUT');
         inputName.setAttribute("class","input1");
        inputName.setAttribute("type","text");
        inputName.setAttribute("name","Name");
        inputName.setAttribute("placeholder","enter name");
        
        var pSpacing = document.createElement("DIV");
        pSpacing.setAttribute("id","spacing");
        pSpacing.innerHTML = ""
        
        
        //---------------------------------------------
        var textEmail = document.createTextNode("Your email:  ")
        //----------------------------------------------
        var inputEmail = document.createElement('INPUT');
         inputEmail.setAttribute("class","input2");
        inputEmail.setAttribute("type","text");
        inputEmail.setAttribute("name","email");
        inputEmail.setAttribute("placeholder","enter email");
        
        //----------------------------------------------
        var textArea = document.createElement('TEXTAREA');
        textArea.setAttribute("NAME","message");
        textArea.setAttribute("ROWS","6");
        textArea.setAttribute("COLS","35");
        textArea.setAttribute("style","resize: none;");
        //----------------------------------------------
        var textMessage = document.createTextNode("Hi, I would like more information on your offer please.");
        //---------------------------------------------
        var spanSubmit = document.createElement('SPAN');
        spanSubmit.setAttribute("class","btnresize btnresize2");
        //---------------------------------------------
        var buttSubmit  = document.createElement('BUTTON');
        buttSubmit.setAttribute("type","button");
        buttSubmit.setAttribute("id","buttonSubmit");
        buttSubmit.setAttribute("class","btn btn-warning btn-lg btn-block");
         buttSubmit.setAttribute("value","Email2");
        //--------------------------------------------
        var iSubmit = document.createElement('I');
        iSubmit.setAttribute("class","fa fa-envelope-o");
        iSubmit.setAttribute("aria-hidden","true");
        //-------------------------------------------
        var textSubEmail = document.createTextNode("Email");
        //--------------------------------
        var disclaim = document.createElement('DIV');
        disclaim.setAttribute("class","disclaimer");
        //------------------------------------------
        var pFooter = document.createElement('P');
        pFooter.setAttribute("id","footerForm");
        //------------------------------------------
        var strongFoot = document.createElement('STRONG');
        strongFoot.innerHTML = "Disclaimer: <br>";
        var textDisclaim = document.createTextNode("Lorem ipsum mmkllkl opie kkallk Lorem ipsum mmkllkl Lorem Lorem ipsum mmkllkl opie kkallk Lorem ipsum mmkllkl Lorem  Lorem ipsum mmkllkl opie kkallk Lorem ")
        
        
        
        
        
        
        
        

        col.appendChild(mainTitle);
        //-----------------------------------------------
        col.appendChild(divSellerPro);
            col.appendChild(spanMap);
                spanMap.appendChild(iMap);
                    iMap.appendChild(textMap);
            //***********************
            col.appendChild(spanSell);
                    spanSell.appendChild(isell);
                        isell.appendChild(textSell);
            //***********************
                col.appendChild(spanSave);
                        spanSave.appendChild(iFavo);
                            iFavo.appendChild(textSave);
        //-------------------------------------------------
        col.appendChild(aImgFocus);
                aImgFocus.appendChild(images);
        
        //-------------------------------------------------
        col.appendChild(divDesc);
                divDesc.appendChild(textDesc);
        //-------------------------------------------------
        col.appendChild(pDescription);
               pDescription.appendChild(textDescription);
        
        col.appendChild(spanButton);    
                spanButton.appendChild(buttonPlus);
                buttonPlus.appendChild(iButtPlus);
                buttonPlus.appendChild(textPlus);
        //-----------------------------------------------
        col.appendChild(divSamllGally);
                divSamllGally.appendChild(spanEmpty);
                    spanEmpty.appendChild(rowSmallGally);
                rowSmallGally.appendChild(clasSmallGally)
                clasSmallGally.appendChild(aThumbs);
        
        for (var i = 0; i<imageThumbs.length; i++)
            {
              aThumbs.appendChild(imageThumbs[i]);  
            }
        //------------------------------------------------
        row.appendChild(col);   //=======col[0] col-sm-6
		
        //-----------------------------------------------
        col2.appendChild(h3Seller);
        col2.appendChild(pContact);
        col2.appendChild(form);
        //--------------------
        form.appendChild(textName);
        form.appendChild(inputName);
        form.appendChild(pSpacing);
       
        form.appendChild(textEmail);
        form.appendChild(inputEmail);
        
        form.appendChild(textArea);
        textArea.appendChild(textMessage);
        form.appendChild(spanSubmit);
        form.appendChild(buttSubmit);
         buttSubmit.appendChild(iSubmit);
         buttSubmit.appendChild(textSubEmail);
        //-------------------------------------
        disclaim.appendChild(pFooter);
        pFooter.appendChild(strongFoot);
        pFooter.appendChild(textDisclaim);
        
        
        col2.appendChild(disclaim);
        row.appendChild(col2)  //=======col[1] col-sm-6 section2
        
        //-------------------------------------
	 container.appendChild(row);  //====== row[0] main

    body.appendChild(container); //=======section[0] mainSection
		
	
	}
	 $('input').append('<p></p><p></p>');
    
}

