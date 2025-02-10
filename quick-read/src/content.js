chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "scrapeContent") {
      const content = document.body.innerText;  
      sendResponse({ content });
    }
  });