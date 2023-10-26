// FORM VALIDATION
let form = document.querySelector('form');
let addBtn = document.querySelector('#addBtn');
let removeBtns = document.querySelectorAll('.removeBtn');
let file_input = document.querySelector('#file_input');
let fileName = document.querySelector('#fileName');
let title = document.querySelector('#title');
let descr = document.querySelector('#descr');
let uploadBtn = document.querySelector('#uploadBtn');

addBtn.addEventListener('click',e=>{
    file_input.click();
})

removeBtns.forEach(btn=>{
    let events = ['mouseover','mouseout'];
    events.forEach(event => {
        btn.addEventListener(event,e=>{
            btn.parentElement.parentElement.classList.toggle('remove')
        })
    });
})

removeBtns.forEach(btn=>{
    btn.addEventListener('click',e=>{
        let useranswer = confirm('Are you sure');
        if(!useranswer){
            e.preventDefault();
        }
    })
})

file_input.addEventListener('change',e=>{
    fileName.textContent = file_input.files[0].name;
})

form.addEventListener('input',e=>{
    if(file_input.value == "" || title.value=="" || descr.value == ""){
        uploadBtn.setAttribute('disabled','disabled');
    }else{
        uploadBtn.removeAttribute('disabled');
    }
});