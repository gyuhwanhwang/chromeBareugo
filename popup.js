const goBtn = document.getElementById("btn");
// let goBtn = document.querySelector("#btn");

function removeComent(e) {
    // alert("go!");
    //  앞에가 tab id, null이 현재 열려있는거
    chrome.tabs.executeScript(null, {
        // 안에 전부 똑같이 대신 작은 따옴표
        code: "document.getElementsByID('query').value = '123'",
        code: "alert('go')",
        // code: "document.getElementByClassName('u_cbox_contents').value='123'",
        // code: "document.getElementsByClassName('gLFyf gsfi').value = '123';",
    });

    // document.querySelector("#query").value = "123";
}

// DOM형식으로 html 다 불러졌을때 function 부분 실행
document.addEventListener("DOMContentLoaded", function() {
    // var goBtn = document.querySelector("#btn");
    goBtn.addEventListener("click", removeComent);
});
