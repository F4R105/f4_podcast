let popup_adminForm = document.querySelector('#popup_adminForm');
let popup = document.querySelector('#popup');
let form = popup.querySelector('form');

popup_adminForm.addEventListener('click',e=>{
    showPopup();
})

document.addEventListener('keydown',e=>{
    if(e.ctrlKey && e.key.toLowerCase() === "a"){
        e.preventDefault();
        showPopup();
    }else
    if(e.key == "Escape"){
        hidePopup();
    }
})

popup.addEventListener('click',e=>{
    hidePopup();
})

form.addEventListener('click',e=>{
    e.stopPropagation();
})

function showPopup(){
    popup.style.display = "flex";
}

function hidePopup(){
    popup.style.display = "none";
}