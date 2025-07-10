document.getElementById('archiveBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    const archiveUrl = `https://archive.ph/submit/?url=${encodeURIComponent(url)}`;
    chrome.tabs.create({ url: archiveUrl });
  });
});

document.getElementById('searchBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    const searchUrl = `https://archive.ph/${url}`;
    chrome.tabs.create({ url: searchUrl });
  });
});