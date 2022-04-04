/* ==================== Typing Animation ==================== */
var typed = new Typed(".typing", {
  strings: [
    "Front-End !",
    "Back-end !",
    "HTML 5 !",
    "CSS 3 !",
    "JAVASCRIPT !",
    "NODE JS",
    "REACT",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/* ==================== ProgressBar Animation ==================== */
let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};
