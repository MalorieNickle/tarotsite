// celtic.js
// Draws 10 unique cards for the Celtic Cross
// Requires: jscards.js loaded first (CARDS must exist)



document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("drawCelticBtn");
  if (!drawBtn) return;

  // Verify CARDS exists
  if (!window.CARDS || !Array.isArray(CARDS) || CARDS.length < 10) {
    console.error("[celtic] CARDS missing or not enough cards.");
    return;
  }

  // Collect flip/img/name/meaning elements (0-9)
  const flips = Array.from({ length: 10 }, (_, i) => document.getElementById(`flip${i}`));
  const imgs = Array.from({ length: 10 }, (_, i) => document.getElementById(`img${i}`));
  const names = Array.from({ length: 10 }, (_, i) => document.getElementById(`name${i}`));
  const meanings = Array.from({ length: 10 }, (_, i) => document.getElementById(`meaning${i}`));

  // Ensure everything exists
  const ok =
    flips.every(Boolean) && imgs.every(Boolean) && names.every(Boolean) && meanings.every(Boolean);

  if (!ok) {
    console.error("[celtic] Missing spread element IDs. Check flip0..flip9, img0..img9, name0..name9, meaning0..meaning9");
    return;
  }

  function pickUniqueCards(n) {
    const copy = [...CARDS];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
  }

  function reset() {
    flips.forEach((flip, i) => {
      flip.classList.remove("flipped");
      imgs[i].src = "";
      imgs[i].alt = "";
      names[i].textContent = "";
      meanings[i].textContent = "";
    });
  }

  function drawCeltic() {
    reset();

    const selected = pickUniqueCards(10);

    // Flip reveal with stagger timing
    selected.forEach((card, i) => {
      setTimeout(() => {
        imgs[i].src = card.img;
        imgs[i].alt = card.name;

        flips[i].classList.add("flipped");

        names[i].textContent = card.name;
        meanings[i].textContent = card.meaning;
      }, 250 + i * 220);
    });
  }

  drawBtn.addEventListener("click", drawCeltic);
});
