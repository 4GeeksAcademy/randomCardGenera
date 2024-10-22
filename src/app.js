/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let firstArr = ["♦", "♥ ", "♠", "♣"];
  let secondArr = ["King", "Qheen", "Jack", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let ind1 = Math.floor(Math.random() * 4);
  let ind2 = Math.floor(Math.random() * 14);

  let theShow1 = firstArr[ind1];
  let theShow2 = secondArr[ind2];

  document.querySelector("#top").innerHTML = theShow1;
  document.querySelector("#bottom").innerHTML = theShow1;
  document.querySelector("#center").innerHTML = theShow2;
};

function refresh() {
  let firstArr = ["♦", "♥ ", "♠", "♣"];
  let secondArr = ["K", "Q", "J", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let ind1 = Math.floor(Math.random() * 4);
  let ind2 = Math.floor(Math.random() * 15);

  let theShow1 = firstArr[ind1];
  let theShow2 = secondArr[ind2];

  document.querySelector("#top").innerHTML = theShow1;
  document.querySelector("#bottom").innerHTML = theShow1;
  document.querySelector("#center").innerHTML = theShow2;
}

document.querySelector("button").addEventListener("click", refresh);

setInterval(function() {
  let firstArr = ["♦", "♥ ", "♠", "♣"];
  let secondArr = ["K", "Q", "J", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let ind1 = Math.floor(Math.random() * 4);
  let ind2 = Math.floor(Math.random() * 15);

  let theShow1 = firstArr[ind1];
  let theShow2 = secondArr[ind2];

  document.querySelector("#top").innerHTML = theShow1;
  document.querySelector("#bottom").innerHTML = theShow1;
  document.querySelector("#center").innerHTML = theShow2;
}, 1000);
