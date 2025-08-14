const after = document.querySelector(".after");
const audioComponent = document.querySelector(".audio-component");
const before = document.querySelector(".before");
const congratulation = document.querySelector(".congratulation");
const pressMeBtn = document.querySelector(".press-me-btn");

congratulation.style.display = "none";
after.style.display = "none";
before.style.display = "none";

pressMeBtn.addEventListener("click", () => {
  pressMeBtn.style.display = "none";

  congratulation.style.display = "block";
  after.style.display = "block";
  before.style.display = "block";

  audioComponent.play();
});
