chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('../popup.html', {
    id: "FBFotto",
    bounds: {
      width: 850,
      height: 370
    },
    minWidth: 850,
    maxHeight: 370,
    frame: 'none'
  });
});

chrome.runtime.onInstalled.addListener(function() {
  console.log('installed');
});

chrome.runtime.onSuspend.addListener(function() { 
  // Do some simple clean-up tasks.
});