document.documentElement.classList.add("has-js");

const filterButtons = document.querySelectorAll("[data-work-filter]");
const workCards = document.querySelectorAll(".work-card[data-tags]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.workFilter;
    filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    workCards.forEach((card) => {
      card.hidden = filter !== "all" && !card.dataset.tags.split(" ").includes(filter);
    });
  });
});

const henshinButton = document.getElementById("henshin-btn");
const henshinOverlay = document.getElementById("cutin-overlay");

if (henshinButton && henshinOverlay) {
  const quoteBox = henshinOverlay.querySelector(".cutin-quote");
  const quotes = [
    "A New Hero. A New Legend.",
    "宇宙には、始まりはあるが終わりはない。無限",
    "童のときは語ることも童のごとく",
    "鏡は悟りの具ならず、迷いの具なり。",
    "われわれの神々もわれわれの希望も、もはやただの科学的なものでしかないとすれば、われわれの愛もまた科学的であっていけない理由がありましょうか。",
    "君の意見は完全に間違っているという点に目を瞑れば概ね正解だ"
  ];

  const closeHenshin = () => {
    henshinOverlay.classList.remove("active", "show-text", "show-slash", "show-photo");
    henshinOverlay.setAttribute("aria-hidden", "true");
    henshinButton.focus();
  };

  henshinButton.addEventListener("click", () => {
    quoteBox.textContent = `“${quotes[Math.floor(Math.random() * quotes.length)]}”`;
    henshinOverlay.setAttribute("aria-hidden", "false");
    henshinOverlay.classList.add("active", "show-text");
    window.setTimeout(() => henshinOverlay.classList.add("show-slash"), 500);
    window.setTimeout(() => henshinOverlay.classList.add("show-photo"), 800);
    window.setTimeout(closeHenshin, 3600);
  });

  henshinOverlay.addEventListener("click", closeHenshin);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && henshinOverlay.classList.contains("active")) closeHenshin();
  });
}
