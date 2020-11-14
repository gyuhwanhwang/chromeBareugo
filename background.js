chrome.commands.onCommand.addListener(function(command) {
    if (command === "go_button") {
        // chrome.tabs.create({ url: "http://www.google.com/" });
        chrome.tabs.query({ active: true, currentWindow: true }, function(
            tabs
        ) {
            chrome.tabs.executeScript(tabs[0].id, { file: "strBtn.js" });
        });
    }
});

var serverhost = "http://127.0.0.1:8000";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // console.log(
    //     sender.tab
    //         ? "from a content script:" + sender.tab.url
    //         : "from the extension"
    // );
    var url = serverhost + "/classify/get_harmful_index/";

    const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = handleStateChange;

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(request);

    console.log(request);
    console.log(url);
    xhr.onreadystatechange = function(e) {
        // 이 함수는 Response가 클라이언트에 도달하면 호출된다.

        // readyStates는 XMLHttpRequest의 상태(state)를 반환
        // readyState: 4 => DONE(서버 응답 완료)
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        // status는 response 상태 코드를 반환 : 200 => 정상 응답
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            sendResponse({ farewell: JSON.parse(xhr.responseText) });
            // fetch(url)
            //     // .then((response) => console.log(response))
            //     .then((response) => response.json())
            //     .then((response) => sendResponse({ farewell: response }))
            //     .catch((error) => console.log(error));
        } else {
            console.log("Error!");
        }
    };
    return true;
    // if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });
});

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
