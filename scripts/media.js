let playBtns = document.querySelectorAll('.playBtn');
let pauseBtns = document.querySelectorAll('.pauseBtn');
let audios = document.querySelectorAll('.audio');

playBtns.forEach(playBtn=>{
    playBtn.addEventListener('click',()=>{
        playBtn.parentElement.parentElement.querySelector('audio').play();
        playBtn.style.display = "none";
        playBtn.parentElement.querySelector('.pauseBtn').style.display = "block";
    });
})

pauseBtns.forEach(pauseBtn=>{
    pauseBtn.addEventListener('click',()=>{
        pauseBtn.parentElement.parentElement.querySelector('audio').pause();
        pauseBtn.style.display = "none";
        pauseBtn.parentElement.querySelector('.playBtn').style.display = "block";
    });
})