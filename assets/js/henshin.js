const btn = document.getElementById("henshin-btn");
const overlay = document.getElementById("cutin-overlay");
const quoteBox = document.querySelector(".cutin-quote");

const quotes = [
  "A New Hero. A New Legend.",
  "宇宙には、始まりはあるが終わりはない。無限",
  "童のときは語ることも童のごとく",
  "鏡は悟りの具ならず、迷いの具なり。",
  "われわれの神々もわれわれの希望も、もはやただの科学的なものでしかないとすれば、われわれの愛もまた科学的であっていけない理由がありましょうか。",
  "君の意見は完全に間違っているという点に目を瞑れば概ね正解だ"
];

btn.addEventListener("click", () => {

  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = `“${random}”`;

  overlay.classList.add("active");

  setTimeout(() => overlay.classList.add("show-text"), 200);
  setTimeout(() => overlay.classList.add("show-slash"), 800);
  setTimeout(() => overlay.classList.add("show-photo"), 1000);
  setTimeout(() => overlay.classList.remove("active", "show-text", "show-slash", "show-photo"), 2000);

});