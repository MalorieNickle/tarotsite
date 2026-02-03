// js/app.js

const drawBtn = document.getElementById("drawBtn");
const cardImage = document.getElementById("cardImage");
const cardName = document.getElementById("cardName");
const cardMeaning = document.getElementById("cardMeaning");

const cardFlip = document.getElementById("cardFlip");

function drawRandomCard() {
  const index = Math.floor(Math.random() * CARDS.length);
  const card = CARDS[index];

  // Reset flip if already flipped
  cardFlip.classList.remove("flipped");

  // Clear text while flipping
  cardName.textContent = "";
  cardMeaning.textContent = "";

  // Small delay so reset is visible
  setTimeout(() => {
    cardImage.src = card.img;
    cardImage.alt = card.name;

    cardFlip.classList.add("flipped");

    cardName.textContent = card.name;
    cardMeaning.textContent = card.meaning;
  }, 200);
}


drawBtn.addEventListener("click", drawRandomCard);
