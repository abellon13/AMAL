const START_DATE = new Date("2026-03-15T00:00:00");

function updateCounter() {
  const now = new Date();
  let diff = Math.max(0, now - START_DATE);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff %= (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCounter, 1000);
updateCounter();

function openGift() {
  document.querySelector(".time-section").scrollIntoView({ behavior: "smooth" });
}

function openLetter() {
  document.getElementById("letterModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLetter() {
  document.getElementById("letterModal").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("letterModal").addEventListener("click", function(e) {
  if (e.target === this) closeLetter();
});

function showSurprise() {
  const surprise = document.getElementById("surprise");
  surprise.classList.add("show");
  setTimeout(() => surprise.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
}

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.textContent = Math.random() > .5 ? "🌸" : "❤";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (10 + Math.random() * 13) + "px";
  petal.style.animationDuration = (7 + Math.random() * 8) + "s";
  petal.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
  document.getElementById("petals").appendChild(petal);
  setTimeout(() => petal.remove(), 16000);
}

setInterval(createPetal, 900);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
