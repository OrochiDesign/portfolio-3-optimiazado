let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

//por alguna razon no usa el primer elemento del String
var typed = new Typed('.typing-text', {
    strings : [' ', 'front end developer', 'web designer', 'web developer'],
    loop : true,
    typeSpeed : 150
});

//codigo para galeria de musica

let closePlayer = document.querySelector('#close-player');
let musicPlayer = document.querySelector('.music-player');
let boxContainer = document.querySelector('.porfolio .box-container');

closePlayer.onclick = () =>{
    closePlayer.classList.toggle('fa-times');
    musicPlayer.classList.toggle('active');
    boxContainer.classList.toggle('active');
}

let boxes = document.querySelectorAll('.porfolio .box-container .box');

boxes.forEach(box =>{

    box.onclick = () =>{
        let src = box.getAttribute('data-src');
        let text = box.querySelector('.content h3').innerText;
        closePlayer.classList.add('fa-times');
        musicPlayer.classList.add('active');
        boxContainer.classList.add('active');
        musicPlayer.querySelector('h3').innerText = text;
        musicPlayer.querySelector('audio').src = src;
        musicPlayer.querySelector('audio').play();
    }

});
