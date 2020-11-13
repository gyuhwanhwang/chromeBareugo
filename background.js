chrome.commands.onCommand.addListener(function(command) {
    if (command === "go_button") {
        // chrome.tabs.create({ url: "http://www.google.com/" });
        chrome.tabs.query({ active: true, currentWindow: true }, function(
            tabs
        ) {
            chrome.tabs.executeScript(tabs[0].id, { file: "goBtn.js" });
        });
    }
});

var serverhost = "http://127.0.0.1:8000";

// function goButtonHkey() {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.executeScript({
//             file: "goBtn.js",
//         });
//     });
// }

// chrome.runtime.onMessage.addListener(function(msg) {
//     if (msg.action && msg.action == "goButton") {
//         goButtonHkey();
//     }
// });
