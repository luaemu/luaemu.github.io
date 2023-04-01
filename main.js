let myDiscord = "kedarui.#1544";
let myYoutube = "https://www.youtube.com/channel/UCBpcFok8Jt0m0akR8RMT6gg";
let myTwitter = "https://twitter.com/fortissimopiano";

var discordbtn = function () {
    console.log("discord button pressed");
    navigator.clipboard.writeText(myDiscord);
    alert("Discord tag copied to clipboard!");
}

var mailbtn = function () {
    var mail = document.createElement("a");
    mail.href = "mailto:keda@knotting.tech";
    mail.click();
}

var ytbtn = function () {
    console.log("yt button pressed");
    window.open(myYoutube, "_blank");
}

var twtbtn = function () {
    console.log("twitter buttom pressed");
    window.open(myTwitter, "_blank");
}