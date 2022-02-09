//the validate function
function validateFooter(e){
    function errorField(){
        e.preventDefault();
        errorMsg.style.visibility = "visible";
        errorMsg.style.opacity = "1";
        errorMsg.style.transform = "translateY(65px) translateX(20px) scale(1)";
    }
    if (inputMail.value.length < 1){
        errorMsg.textContent = "Du skal sgu da skrive noget i feltet makker.";
        errorField();
        return false;
    }
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(inputMail.value)){
        errorMsg.textContent = "Dette er ikke en korrekt mail addresse.";
        errorField();
        return false;
    }
}

//declaring variables
let inputMail = document.querySelector(".mailForm__input");
let errorMsg = document.querySelector(".mailForm__error");
let inputSubmit = document.querySelector(".mailForm__submit");

//adding evt listener
inputSubmit.addEventListener("click", validateFooter);
inputMail.addEventListener("keydown", function(){
    errorMsg.style.visibility = "hidden";
    errorMsg.style.opacity = "0";
})