const bgColorBtns = document.querySelector("#bgColorBtns");
const textColorBtns = document.querySelector("#textColorBtns");

const bgColors = ["#000000", "#1f1f1f", "#2e2e2e", "#3d3d3d"];
const textColors = ["#ffffff", "#f1f1f1", "#e2e2e2", "#d3d3d3"];

function constructOptions(colors, option) {
  for (let color of colors) {
    let button = document.createElement("button");
    button.style.backgroundColor = color;
    if (option === "bgColor") {
      button.addEventListener("click", function () {
        chrome.storage.sync.set({ bgColor: color }, function () {
          console.log("bg color is " + color);
        });
      });
      bgColorBtns.appendChild(button);
    } else if (option === "textColor") {
      button.addEventListener("click", function () {
        chrome.storage.sync.set({ textColor: color }, function () {
          console.log("text color is " + color);
        });
      });
      textColorBtns.appendChild(button);
    }
  }
}
constructOptions(bgColors, "bgColor");
constructOptions(textColors, "textColor");
