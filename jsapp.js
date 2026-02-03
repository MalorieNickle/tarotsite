// js/app.js
// Works for BOTH: single card pull page + three-card spread page
// Requires CARDS to be loaded first (via jscards.js)

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------
  // SINGLE CARD PAGE
  // -----------------------------
  const singleDrawBtn = document.getElementById("drawBtn");
  const cardFlip = document.getElementById("cardFlip");
  const cardImage = document.getElementById("cardImage");
  const cardName = document.getElementById("cardName");
  const cardMeaning = document.getElementById("cardMeaning");

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

  // Only attach if we're on the single-card page
  if (singleDrawBtn && cardFlip && cardImage && cardName && cardMeaning) {
    singleDrawBtn.addEventListener("click", drawRandomCard);
  }

  // -----------------------------
  // THREE-CARD SPREAD PAGE
  // -----------------------------
  const threeDrawBtn = document.getElementById("drawThreeBtn");

  const flips = [
    document.getElementById("flip0"),
    document.getElementById("flip1"),
    document.getElementById("flip2"),
  ];

  const imgs = [
    document.getElementById("img0"),
    document.getElementById("img1"),
    document.getElementById("img2"),
  ];

  const names = [
    document.getElementById("name0"),
    document.getElementById("name1"),
    document.getElementById("name2"),
  ];

  const meanings = [
    document.getElementById("meaning0"),
    document.getElementById("meaning1"),
    document.getElementById("meaning2"),
  ];

  function pickUniqueCards(n) {
    const copy = [...CARDS];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
  }

  function resetFlips() {
    flips.forEach((flip, i) => {
      flip.classList.remove("flipped");
      imgs[i].src = "";
      imgs[i].alt = "";
      names[i].textContent = "";
      meanings[i].textContent = "";
    });
  }

  function drawThree() {
    resetFlips();
    const selected = pickUniqueCards(3);

    selected.forEach((card, i) => {
      setTimeout(() => {
        imgs[i].src = card.img;
        imgs[i].alt = card.name;

        flips[i].classList.add("flipped");

        names[i].textContent = card.name;
        meanings[i].textContent = card.meaning;
      }, 250 + i * 350);
    });
  }

  // Only attach if we're on the three-card page
  const threePageReady =
    threeDrawBtn &&
    flips.every(Boolean) &&
    imgs.every(Boolean) &&
    names.every(Boolean) &&
    meanings.every(Boolean);

  if (threePageReady) {
    threeDrawBtn.addEventListener("click", drawThree);
  }
});
