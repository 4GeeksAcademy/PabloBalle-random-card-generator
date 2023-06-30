/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomCardNumber() {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomNumber = Math.floor(Math.random() * numbers.length);

  let getRandomNumber = numbers[randomNumber];

  return getRandomNumber;
}
function randomCardSuit() {
  const suit = ["♦", "♥", "♠", "♣"];

  let randomSuit = Math.floor(Math.random() * suit.length);

  let getRandomSuit = suit[randomSuit];
  return getRandomSuit;
}
function updateCard() {
  let suit = randomCardSuit();
  let topCardSuit = document.querySelector(".top-suit");
  let bottomCardSuit = document.querySelector(".bottom-suit");
  let cardNumber = document.querySelector(".card-number");

  topCardSuit.innerHTML = suit;
  bottomCardSuit.innerHTML = suit;
  cardNumber.innerHTML = randomCardNumber();

  if (suit === "♥" || suit === "♦") {
    topCardSuit.classList.add("text-danger");
    bottomCardSuit.classList.add("text-danger");
    cardNumber.classList.add("text-danger");
  } else {
    topCardSuit.classList.remove("text-danger");
    bottomCardSuit.classList.remove("text-danger");
    cardNumber.classList.remove("text-danger");
  }
}
function changeSizeCard() {
  let getSizeBtn = document.querySelector("#getSizeBtn"); //Apunta al boton width

  let card = document.querySelector(".card"); //Recoge en card toda la carta para luego cambiarle el width

  getSizeBtn.addEventListener("click", function() {
    //añade el evento al boton y cuando hace click, ejecuta la funcion
    let widthElement = document.querySelector("#myInputWidth"); //apunta al input
    let widthInputValue = widthElement.value; //guarda el valor del input al hacer click en el boton
    let heightElement = document.querySelector("#myInputHeight"); //apunta al input
    let heightInputValue = heightElement.value; //guarda el valor del input al hacer click en el boton
    let currentWidth = card.style.width;
    let currentHeight = card.style.height;
    let widthLabel = document.querySelector("#currentWidth");
    let heightLabel = document.querySelector("#currentHeight");
    widthLabel.innerHTML =
      "The current width of the card is " +
      currentWidth +
      ",introduce the number of pixels for the new card:";
    heightLabel.innerHTML =
      "The current height of the card is " +
      currentHeight +
      ",introduce the number of pixels for the new card:";
    card.style.width = `${widthInputValue}px`; //con ese valor, se cambia la propiedad del width
    card.style.height = `${heightInputValue}px`; //con ese valor, se cambia la propiedad del width
  });
}
window.onload = () => {
  //////////////////////////////////////////////////////////////////////////////////
  let countdownElement = document.querySelector(".countdown");
  let countdown = 5;
  function updateCountdown() {
    countdownElement.textContent = countdown;
    if (countdown === 0) {
      updateCard();
      countdown = 5; // Reiniciar el contador a 5 segundos
      setTimeout(updateCountdown, 1000);
    } else {
      countdown--; // Reducir el contador en 1 segundo
      setTimeout(updateCountdown, 1000); // Llamar a la función de actualización después de 1 segundo
    }
  }
  setTimeout(updateCountdown, 0);
  ///////////////////////////////////////////////////////////////////////////////////

  updateCard();

  let changeCardBtn = document.getElementById("changeCardBtn");
  changeCardBtn.addEventListener("click", updateCard);

  changeSizeCard();
};
