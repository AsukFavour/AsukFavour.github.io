"use strict";

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const lose = document.getElementById("close");

// navbar
class navbar extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `<section id="header">
    <a href="#"><img src="images/The_North_Face-logo.png" alt=""  class="logo"></a>

    <div >
    <ul id="navbar">
        <li> <a href="index.html" >Home</a></li>
        <li> <a href="shop.html">Shop</a></li>
        <li> <a href="contact.html">contact</a></li>
        <li> <a href="about.html">about</a></li>
        <li id="lg-cart"> <a href="#"><i class="fi fi-br-shopping-bag"></i></a></li>
        <a href="cart.html" id="close"><i class="fi fi-br-x"></i></a>
    </ul>
    </div>

    <div id="mobile">
        <a href="#"><i class="fi fi-br-shopping-bag"></i></a>
        <i id="bar" class="fi fi-br-menu-burger"></i>
    </div>

</section>`
  }
};

customElements.define('app-navbar', navbar);

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (lose) {
  lose.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// products

const bigImg = document.getElementById("main-img");
const smallImg = document.querySelectorAll(".small-img");

smallImg.forEach((data) => {
  data.addEventListener("click", function (e) {
    e.preventDefault;
    bigImg.src = data.src;
  });
});

// add tgo cart
const addCart = [];
const product = document.getElementById("productsId");
const cartIcon = document.getElementsByClassName("buttons");
const selectElement = document.querySelector("#select1");
const amount = document.getElementById("size");
const names = document.getElementById("name");
const price = document.getElementById("price");
const containerItem = document.querySelector("items");

const carty = Array.from(cartIcon);
console.log(amount);

carty.forEach((cart, i) => {
  cart.addEventListener("click", (a) => {
    a.preventDefault;
    addCart.push({
      name: names.innerText,
      amount: amount.value,
      selectElement: selectElement.value,
      price: price.innerText,
      bigImg: bigImg.src,
    });

    console.log(addCart);
  });
});
