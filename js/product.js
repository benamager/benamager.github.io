//imports
import getUrlParameter from './modules/m-getUrlParameter.js'
import hoverZoom from './modules/m-productHoverZoom.js';
import {products} from './modules/m-productData.js' //the product information

//declaring variables (elements)
let productInfoContainer = document.querySelector(".productInfo");
let productHeader = document.querySelector(".productInfo__header");
let productPrice = document.querySelector(".productInfo__price");
let productImgContainer = document.querySelector(".productImgContainer");
let productImg = productImgContainer.querySelector(".productImgContainer__img");
let productImages = document.querySelector(".productImages");
let productDesc = document.querySelector(".productInfo__desc");
let productStrengthCBD = document.querySelector(".productInfo__strengthCBD");
let productStrengthTHC = document.querySelector(".productInfo__strengthTHC");


//gets the product from url
let thisProduct = getUrlParameter('produkt');
//from thisproduct get placement in object
let productNrInObject = Object.keys(products).indexOf(thisProduct);

//adding the productId to main (is used for currency convertion)
document.querySelector("main").dataset.productid = Object.keys(products)[productNrInObject];

//changing the fixed properties
productHeader.textContent = Object.values(products)[productNrInObject]["name"];
document.title = productHeader.textContent + " - Weedshop.dk";
productPrice.textContent = Object.values(products)[productNrInObject]["price"] + ",00 kr";
productImg.src = Object.values(products)[productNrInObject]["imageFolder"] + Object.values(products)[productNrInObject]["images"][0];
productImg.alt = Object.values(products)[productNrInObject]["imagesAlt"][0];

//inserts new line in product page
Object.values(Object.values(products)[productNrInObject]["desc"]).forEach(line => {
    let pElement = document.createElement("p");;
    if (line.includes("/SPACE/")){
        pElement.innerHTML = line.replace("/SPACE/", "");
        pElement.style.marginBottom = "0.65rem";
    } else {
        pElement.innerHTML = line;
    }
    pElement.classList.add("productInfo__desc");
    productInfoContainer.appendChild(pElement);
})

//inserts the product contents
if (Object.keys(products[thisProduct]).includes("productContents")){
    for (let i=0; i<Object.keys(products[thisProduct]["productContents"]).length; i++){
        let strongElement = document.createElement("strong");;
        strongElement.textContent = Object.keys(Object.values(products)[productNrInObject]["productContents"])[i].toUpperCase() + ": ";
        strongElement.textContent += Object.values(Object.values(products)[productNrInObject]["productContents"])[i];
    
        strongElement.classList.add("productInfo__strength");
    
        if (i == 0) strongElement.style.marginTop = "0.65rem";
    
        productInfoContainer.appendChild(strongElement)
    }
}


//creating the thumbnail imgs
Object.values(products)[productNrInObject]["images"].forEach(function(img, index){
    let elementLi = document.createElement("li");
    productImages.appendChild(elementLi)
    let elementImg = document.createElement("img");
    elementImg.src = Object.values(products)[productNrInObject]["imageFolder"] + img;
    elementImg.alt = Object.values(products)[productNrInObject]["imagesAlt"][index];
    elementLi.appendChild(elementImg)

    elementImg.addEventListener("click", function(){
        productImg.src = elementImg.src;
    })
})


//calls the zoom function to imgs
hoverZoom()