"use strict";

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const lose = document.getElementById("close");

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
