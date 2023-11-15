/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const changeImages = () => {
  const catImages = document.querySelectorAll("img.card-img-top");
  for (let cat of catImages) {
    cat.src = `https://placekitten.com/${200 +
      Math.floor(Math.random() * 500)}`;
  }
};

const changeHeadings = () => {
  for (let h of ["h1", "h2", "h3"]) {
    const heading = document.querySelector(h);
    heading.classList.add("bg-success");
  }
};

const changeLayout = () => {
  const layout = document.querySelector("#layout");
  if (layout.classList.contains("flex-column")) {
    layout.classList.remove("flex-column");
    layout.classList.add("flex-row", "flex-wrap");
    for (let card of layout.children) {
      card.style.width = "30%";
      card.querySelector("p").classList.add("visually-hidden");
    }
  } else {
    layout.classList.remove("flex-row", "flex-wrap");
    layout.classList.add("flex-column");
    for (let card of layout.children) {
      card.style.width = "95%";
      card.querySelector("p").classList.remove("visually-hidden");
    }
  }
};

window.onload = () => {
  const target = document.querySelector("#target");
  const button = document.querySelector("#button");
  const button2 = document.querySelector("#button2");

  button.onclick = changeLayout;
  button2.onclick = changeImages;

  // The DOM (Document Object Model).
};
