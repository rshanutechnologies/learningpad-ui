const leftItems = document.querySelectorAll(".left .item");
const rightItems = document.querySelectorAll(".right .item");
const svg = document.getElementById("lines");
const game = document.querySelector(".game");

/* ---------- GAME STATE ---------- */
let selectedLeft = null;
let matches = 0;
let score = 0;
const total = leftItems.length;

/* ---------- PROGRESS BAR ---------- */
// const progressContainer = document.getElementById("progress");

// function renderProgress() {
//   progressContainer.innerHTML = "";

//   for (let i = 0; i < total; i++) {
//     const step = document.createElement("div");
//     step.className = "station";

//     if (i < matches) step.classList.add("done");
//     if (i === matches) step.classList.add("active");

//     if (i === total - 1) {
//       step.classList.add("finish");
//       step.textContent = "🏁";
//     } else {
//       step.textContent = i + 1;
//     }

//     progressContainer.appendChild(step);
//   }
// }

/* ---------- DRAW MATCH LINE ---------- */
function drawLine(el1, el2, color) {
  const r1 = el1.getBoundingClientRect();
  const r2 = el2.getBoundingClientRect();
  const s = svg.getBoundingClientRect();

  const x1 = r1.right - s.left;
  const y1 = r1.top + r1.height / 2 - s.top;
  const x2 = r2.left - s.left;
  const y2 = r2.top + r2.height / 2 - s.top;

  const line = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );

  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", "5");
  line.setAttribute("stroke-linecap", "round");

  svg.appendChild(line);
  return line;
}

/* ---------- SPEECH ---------- */
// function speak(text) {
//   if (!window.speechSynthesis) return;

//   window.speechSynthesis.cancel();

//   const msg = new SpeechSynthesisUtterance(text);
//   msg.lang = "en-US";

//   window.speechSynthesis.speak(msg);
// }


function speak(t) {
  speechSynthesis.cancel();   // optional but recommended

  const msg = new SpeechSynthesisUtterance(t);
  msg.volume = 0.1;   // 🔉 lower volume (0 to 1)
  msg.rate = 1;
  msg.pitch = 1;

  speechSynthesis.speak(msg);
}

/* ---------- LEFT SELECTION ---------- */
leftItems.forEach((item) => {
  item.onclick = () => {
    if (item.classList.contains("matched")) return;

    leftItems.forEach((i) => i.classList.remove("selected"));
    selectedLeft = item;
    item.classList.add("selected");
  };
});

/* ---------- RIGHT CLICK ---------- */
rightItems.forEach((item) => {
  item.onclick = () => {
    if (!selectedLeft || item.classList.contains("matched")) return;

    const isMatch =
      selectedLeft.dataset.id === item.dataset.id;

    if (isMatch) {
      speak("Correct");

      drawLine(selectedLeft, item, "#22c55e");

      selectedLeft.classList.add("matched");
      item.classList.add("matched");

      matches++;
      score++;

      // renderProgress(); // update progress

      selectedLeft.classList.remove("selected");
      selectedLeft = null;

      speak("Correct");

      if (matches === total)
        setTimeout(showFinal, 800);

    } else {
      const tempLine = drawLine(
        selectedLeft,
        item,
        "#ef4444"
      );

      item.classList.add("wrong");
      selectedLeft.classList.add("wrong");

      setTimeout(() => {
        tempLine.remove();

        speak("Wrong");

        item.classList.remove("wrong");
        selectedLeft.classList.remove(
          "wrong",
          "selected"
        );
        selectedLeft = null;
      }, 500);
    }
  };
});

/* ---------- FINAL RESULT ---------- */
function showFinal() {
  game.style.zIndex = "0";

  const finalPopup =
    document.getElementById("finalPopup");
  finalPopup.style.display = "flex";

  document.getElementById(
    "finalScore"
  ).textContent = `Score: ${score}/${total}`;

  document.getElementById("stars").textContent =
    "⭐".repeat(score);

}

/* ---------- START ---------- */
// renderProgress();
