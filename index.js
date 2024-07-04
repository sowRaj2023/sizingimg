let imageWidthEl =document.getElementById("imageWidth");
let imageEl = document.getElementById("image");
let errorMegEl = document.getElementById("errorMeg");


let maxErr = "Too big";
let minErr = "Too small";
let originalWidth = 200;
let minWidth = 100;
let maxWidth = 300;

imageEl.style.width = originalWidth+"px";
imageWidthEl.textContent = originalWidth+"px";


function increaseBtn(){
if(originalWidth >= maxWidth){
    errorMegEl.textContent = maxErr;
}else{
    originalWidth = originalWidth +5;
    let updatedEl = originalWidth+"px";

    errorMegEl.textContent = "";
    imageEl.style.width = updatedEl;
    imageWidthEl.textContent = updatedEl;

}
    
}

function decreaseBtn() {
    if(originalWidth <= minWidth){
        errorMegEl.textContent = minErr;
    }else{
        originalWidth = originalWidth - 5;
        let updatedEl = originalWidth+"px";
    
        errorMegEl.textContent = "";
        imageEl.style.width = updatedEl;
        imageWidthEl.textContent = updatedEl;
    
    }
        
    }





