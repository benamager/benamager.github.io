import {products} from './m-productData.js' //the product information

let valutaSelector = document.querySelector("#valuta");

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  Section: Set and get cookies
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

//cookie function (only needs in this document)
function setCookie(cookieName, data, expireDays){
    //data = JSON.stringify(data)
    const d = new Date();
    d.setTime(d.getTime() + (expireDays*24*60*60*1000));
    document.cookie = `${cookieName}=${data};expires=${d};path=/`;
}

function getCookie(cookieName){
    var result = undefined;
    let elements = document.cookie.split('; ');
    //for each element in cookies
    elements.forEach(function (element) { //(function (element, index)) for også at finde index
        //if it includes cookieName
        if (element.includes(cookieName)) {
            //split at =
            result = element.split("=")[1];
            //value = value.replaceAll('"', ''); (isn't needed but save if it is)
        }
    });
    return result;
}

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  Section: Currency API
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

//api data
const API_KEY = 'd0e6cca0-8609-11ec-9e04-7511b333c284';
const API_URL = `https://freecurrencyapi.net/api/v2/latest?apikey=${API_KEY}&base_currency=DKK`;
let updatedCurrencies;

//getCurrency();
//getting updated currencies
async function getCurrency() {
    console.log("Henter nu data fra freeCurrencyAPI")
    let response = await fetch(API_URL);
    updatedCurrencies = await response.json();
    updatePrices();
}

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  Section: Updating prices
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

let currentCurrency = getCookie('valuta');
let allPrices = document.querySelectorAll(".currencyConverter");
if (currentCurrency){
    if (currentCurrency != "dkk"){
        getCurrency();
        valutaSelector.value = currentCurrency;
    }
}

function updatePrices(){
    currentCurrency = getCookie('valuta');
    //for each price element in array
    allPrices.forEach(price =>{
        //gets the productid with dataset (is different from index and product pages)
        let productId = price.closest("article");
        if (productId == null){
            productId = price.closest("main");
        }
        productId = productId.dataset.productid;
        //getting information and updating it
        let productPrice = products[productId]["price"];
        let priceInNewCurrency = updatedCurrencies["data"][currentCurrency.toUpperCase()];
        let newCalculatedPrice = (productPrice*priceInNewCurrency).toFixed(2);
        //changing the textContent
        if (currentCurrency != "dkk"){
            price.textContent = newCalculatedPrice + " " + currentCurrency.toUpperCase();
        } else {
            price.textContent = newCalculatedPrice + " kr";
        }
    })
}

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  Section: Select box
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

//on change
valutaSelector.addEventListener("change", function(){
    setCookie("valuta", this.value, 365)
    getCurrency();
})