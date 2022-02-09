//declaring variables
let footerDropdownHeaders = document.querySelectorAll(".dropdownModuleContainer");

//on resize
window.addEventListener("resize", function(){
    dropdownFunctionality();
})

dropdownFunctionality();

//adds the open/close function
function dropdownFunctionality(){
    if (window.innerWidth < 885){
        //gets all divs we create i footerDropdown()
        footerDropdownHeaders.forEach(container =>{
            container.addEventListener("click", openCloseDropdown)
            container.querySelector("i").style.display = "block";
        })
    } else {
        //removes evt listeners
        footerDropdownHeaders.forEach(container =>{
            container.removeEventListener("click", openCloseDropdown)
            container.querySelector("i").style.display = "none";
        })
    }
}

function openCloseDropdown(e){
    //declaring variables
    let headerContainer = e.target.closest("div.dropdownModuleContainer");
    let headerArrow = headerContainer.querySelector("i");
    let dropdownList = headerContainer.nextElementSibling;
    //if maxheight isn't full, then set it to it
    if (dropdownList.style.maxHeight != dropdownList.scrollHeight + "px"){
        dropdownList.style.maxHeight = dropdownList.scrollHeight + "px";
        headerArrow.style.transform = "rotate(180deg)";
    } else {
        dropdownList.style.maxHeight = 0;
        headerArrow.style.transform = "rotate(0)";
    }
}