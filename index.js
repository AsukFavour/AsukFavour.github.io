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


// products

const bigImg = document.getElementById("main-img");
const smallImg = document.querySelectorAll('.small-img');




smallImg.forEach(

    data =>{
        data.addEventListener('click', function(e){
            e.preventDefault;
            bigImg.src = data.src;
        })
        
    }
)

// smallImg[0].onclick =() => bigImg.src = smallImg[0].src;
// smallImg[1].onclick =() => bigImg.src = smallImg[1].src;
// smallImg[2].onclick =() => bigImg.src = smallImg[2].src;
// smallImg[3].onclick =() => bigImg.src = smallImg[3].src;
