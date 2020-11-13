let goBtn = document.getElementById("btn");

goBtn.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript({
            file: "goBtn.js",
        });
    });
};

// let goBtn = document.querySelector("#btn");
// const color = "3aa757";

// function removeComent(e) {
//     // alert("go!");
//     //  앞에가 tab id, null이 현재 열려있는거
//     chrome.tabs.executeScript({
//         // 안에 전부 똑같이 대신 작은 따옴표
//         code: 'document.body.style.backgroundColor = "red"',
//         code:
//             "document.getElementsByClassName('u_cbox_contents').innerHTML = '123'",
//         code: "alert('go')",
//         // code: "document.getElementByClassName('u_cbox_contents').value='123'",
//         // code: "document.getElementsByClassName('gLFyf gsfi').value = '123';",
//     });

//     // document.querySelector("#query").value = "123";
// }

// DOM형식으로 html 다 불러졌을때 function 부분 실행
// document.addEventListener("DOMContentLoaded", function() {
//     // var goBtn = document.querySelector("#btn");
//     goBtn.addEventListener("click", removeComent);
// });

// goBtn.onclick = function() {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.executeScript({
//             code: 'document.body.style.backgroundColor = "red";',
//             code:
//                 'console.log(document.getElementsByClassName("u_cbox_contents")[0].innerHTML)',
//             code:
//                 'document.getElementsByClassName("u_cbox_contents")[0].innerHTML = "Bareugo가 차단했습니다."',
//             code:
//                 'document.getElementsByClassName("u_cbox_contents")[0].style.backgroundColor = "red"',
//         });
//     });
// };
