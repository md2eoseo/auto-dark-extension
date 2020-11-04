chrome.tabs.executeScript({
  code: "",
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.storage.sync.get(["bgColor", "textColor"], function (data) {
      console.log(data);
      chrome.tabs.executeScript(tabs[0].id, {
        code:
          'document.body.style.backgroundColor = "' +
          data.bgColor +
          '";document.body.style.color = "' +
          data.textColor +
          '";',
      });
    });
  });
});
