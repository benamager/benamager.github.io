export default function hoverZoom(){
    let imgContainer = document.querySelector(".productImgContainer");
    imgContainer.addEventListener("mousemove", function(e){
        //gets the % from left and top of the mouse inside the imgContainer
        let percentFromLeft = (100/imgContainer.offsetWidth)*e.offsetX;
        let percentFromTop = (100/imgContainer.offsetHeight)*e.offsetY;
        imgContainer.style.backgroundPosition = percentFromLeft + "%" + percentFromTop + "%";
    })
    
    imgContainer.addEventListener("mouseover", function(e){
        imgContainer.querySelector("img").style.visibility = "hidden";
        imgContainer.style.backgroundImage = "url('" + imgContainer.querySelector("img").src + "')";
    })
    
    imgContainer.addEventListener("mouseout", function(){
        imgContainer.style.backgroundImage = "unset";
        imgContainer.style.backgroundColor = "#000000";
        imgContainer.querySelector("img").style.visibility = "visible";
    })
}