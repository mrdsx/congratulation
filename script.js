const BIRTH_DATE = 16;
const BIRTH_MONTH = 8;

const after = document.querySelector(".after");
const audioComponent = document.querySelector(".audio-component");
const before = document.querySelector(".before");
const congratulation = document.querySelector(".congratulation");
setCongratulationContent("none");

const waitingTitle = document.querySelector(".waiting-title");
waitingTitle.style.display = "none";

const pressMeBtn = document.querySelector(".press-me-btn");
pressMeBtn.addEventListener("click", handleClick);

const dt = new Date();

function handleClick() {
  pressMeBtn.style.display = "none";
  if (dt.getDate() !== BIRTH_DATE || dt.getMonth() + 1 !== BIRTH_MONTH) {
    waitingTitle.style.display = "block";
    return;
  }

  setCongratulationContent("block");
  audioComponent.play();
}

function setCongratulationContent(value) {
  congratulation.style.display = value;
  after.style.display = value;
  before.style.display = value;
}
