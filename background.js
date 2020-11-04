chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ bgColor: "#000", textColor: "#fff" });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "developer.chrome.com" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.storage.sync.get(["bgColor", "textColor"], function (data) {
      chrome.tabs.executeScript({
        code:
          "let style=document.createElement('style');style.append('.auto-dark{background-color: #000;color: #fff;}');document.body.appendChild(style);",
      });
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.body.classList.toggle("auto-dark");',
      });
    });
  });
});
