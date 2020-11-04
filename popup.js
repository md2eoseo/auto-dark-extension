chrome.tabs.executeScript({
  code:
    "let style=document.createElement('style');style.append('.auto-dark{background-color: #000;color: #fff;}');document.body.appendChild(style);",
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.storage.sync.get(["bgColor", "textColor"], function (data) {
      console.log(data);
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.body.classList.toggle("auto-dark");',
      });
    });
  });
});
