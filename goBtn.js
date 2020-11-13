var step;
// for (step = 0; step < 3; step++) {
//     console.log(
//         document.getElementsByClassName("u_cbox_contents")[step].innerHTML
//     );
//     // document.getElementsByClassName("u_cbox_contents")[step].innerHTML =
//     //     "Bareugo가 차단했습니다.";
//     var warningText = "* 부정적인 내용입니다. *";
//     var commentBody = document.getElementsByClassName("u_cbox_contents")[step]
//         .innerHTML;
//     document.getElementsByClassName("u_cbox_contents")[step].innerHTML =
//         warningText + "<br/>" + commentBody;
//     document.getElementsByClassName("u_cbox_contents")[step].style.color =
//         "red";
// }
// step : "댓글"
//  [1, 2 , 3, 5], [5 ,7,]
for (step = 0; step < 2; step++) {
    console.log(
        document.getElementsByClassName("u_cbox_contents")[step].innerHTML
    );
    // document.getElementsByClassName("u_cbox_contents")[step].innerHTML =
    //     "Bareugo가 차단했습니다.";

    var warningText = document.createElement("span");
    warningText.innerHTML = "* 부정적인 내용입니다. *" + "<br/>";

    var commentBody = document.getElementsByClassName("u_cbox_contents")[step];
    commentBody.prepend(warningText);

    document.getElementsByClassName("u_cbox_contents")[step].style.color =
        "red";
    warningText.style.backgroundColor = "#ee5253";
    warningText.style.color = "white";
}
for (step = 3; step < 5; step++) {
    console.log(
        document.getElementsByClassName("u_cbox_contents")[step].innerHTML
    );
    document.getElementsByClassName("u_cbox_contents")[step].innerHTML =
        '* 유해언어가 감지되어 "Bareugo"가 차단했습니다. *';
    document.getElementsByClassName("u_cbox_contents")[
        step
    ].style.backgroundColor = "#00b894";
    document.getElementsByClassName("u_cbox_contents")[step].style.color =
        "white";
}
