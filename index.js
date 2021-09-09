const colors = [
  "#42f5f2",
  "#42f542",
  "#e67002",
  "#0dbf10",
  "#c60cf0",
  "#6920fa",
  "#fa336e",
  "#fcff00",
  "#ff1717",
];

const refs = {
  body: document.querySelector("body"),
  spiralBox: document.querySelector(".spiral-box"),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const colorSwitch = {
  interval: 1000,
  isACtive: false,
  intervalId: null,
};

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {
  if (colorSwitch.isACtive) {
    return;
  }

  colorSwitch.isACtive = true;

  colorSwitch.intervalId = setInterval(() => {
    const style = getRandomColor(colors);
    refs.body.setAttribute("style", "background-color: " + style + ";");
  }, colorSwitch.interval);

  refs.spiralBox.classList.add("animate");
}

function onStopBtnClick() {
  colorSwitch.isACtive = false;
  clearInterval(colorSwitch.intervalId);
  refs.body.setAttribute("style", "background-color: #ffffff;");
  refs.spiralBox.classList.remove("animate");
}

function getRandomColor(arr) {
  const color = Math.floor(Math.random() * (0 + arr.length) - 0);
  return arr[color];
}
