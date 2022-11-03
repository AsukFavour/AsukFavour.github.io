'use strict';

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const lose = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
};

if (lose){
    lose.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
};