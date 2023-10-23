document.getElementById('toggleButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const tab = tabs[0];
      const url = new URL(tab.url);
      if (url.hostname === 'leetcode.com') {
        chrome.tabs.executeScript(tab.id, {file: 'content.js'});
      } else {
        alert('This extension is only available on LeetCode.com.');
      }
    });
  });