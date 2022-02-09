//declaring variables
let burgerBtn = document.querySelector("#burgerToggle");
let navigationContainer = document.querySelector(".navigation");
let valutaSelector = document.querySelector("#valuta");
let navElements = document.querySelectorAll(".burgerElement");

navigationContainer.style.paddingBottom = "0rem";
navigationContainer.style.maxHeight = "110px";

//open close nav on burgerToggle btn
burgerBtn.addEventListener("click", function(){
    if (navigationContainer.style.paddingBottom != "4rem"){
            navigationContainer.style.paddingBottom = "4rem";
            navigationContainer.style.maxHeight = (navigationContainer.scrollHeight+110) + "px";
            valutaSelector.style.opacity = "1";
            burgerBtn.classList.replace("fa-bars", "fa-chevron-down")
    } else {
            navigationContainer.style.paddingBottom = "0rem";
            if (window.innerHeight > 700){
                navigationContainer.style.maxHeight = "110px";
            } else {
                navigationContainer.style.maxHeight = "80px";
            }
            valutaSelector.style.opacity = "0";
            burgerBtn.classList.replace("fa-chevron-down", "fa-bars")
    }
})

//on resize fixing some stuff
window.addEventListener("resize", function(){
    if (window.innerWidth > 840){
        navigationContainer.style.paddingBottom = "unset";
        valutaSelector.style.opacity = "1";
        navigationContainer.style.maxHeight = (navigationContainer.scrollHeight+110) + "px";
    } else {
        navigationContainer.style.paddingBottom = "0rem";
        if (window.innerHeight > 700){
            navigationContainer.style.maxHeight = "110px";
        } else {
            navigationContainer.style.maxHeight = "80px";
        }
        valutaSelector.style.opacity = "0";
        burgerBtn.classList.replace("fa-chevron-down", "fa-bars")
    }
})

if (window.innerWidth < 840){
    valutaSelector.style.opacity = "0";
}