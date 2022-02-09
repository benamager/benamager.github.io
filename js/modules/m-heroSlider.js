//just made this to show off I unserstand interval

//declaring variables
let heroPage1 = document.querySelector(".heroArticle--page1");
let heroPage2 = document.querySelector(".heroArticle--page2");
let timerText = document.querySelector(".hero__timer");
let activePage = 1;
let number = 0;

//interval
setInterval(() => {
    timerText.textContent = "NÆSTE SLIDE OM " + (10-number) + " SEK";
    number++;
    if (number == 11){
        timerText.textContent = "NÆSTE SLIDE KOMMER NU" ;
        heroPage1.style.visibility = "visible";
        heroPage2.style.visibility = "visible";
    
        if (activePage == 1){
            heroPage1.style.transform = "translateX(-100%)";
            heroPage2.style.transform = "translateX(0%)";
            activePage++;
        } else {
            heroPage1.style.transform = "translateX(0%)";
            heroPage2.style.transform = "translateX(-100%)";
            activePage--;
        }
        number = 1;
    }
}, 1000);


heroPage1.addEventListener("transitionend", function(){
    if (activePage == 2){
        heroPage1.style.visibility = "hidden";
        heroPage1.style.transform = "translateX(100%)";
    }
})

heroPage2.addEventListener("transitionend", function(){
    if (activePage == 1){
        heroPage2.style.visibility = "hidden";
        heroPage2.style.transform = "translateX(100%)";
    }
})