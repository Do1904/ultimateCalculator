function caliculate() {
    var param1 = document.getElementById("numa").value;
    var param2 = document.getElementById("numb").value;
    if (!param2 || !param1) {
        window.alert("Put a fucking number.");
    } else {
        var url = `garrison.html?number1=${encodeURIComponent(param1)}&number2=${encodeURIComponent(param2)}`;
        window.location.href = url;
    }
}

function tryAgain() {
    document.getElementById("ans").innerHTML = "I forgot.";
}

function back() {
    window.location.href = "index.html";
}

function weiter() {
    document.getElementById("html").innerHTML = "Alright, I will do it again.";
    count = 0;
    start();
    document.getElementById("trybutton").innerHTML = '';
    document.getElementById("ans").innerHTML = ""
}

function giveup() {
    document.getElementById("html").innerHTML = "Nooooooo";
    document.getElementById("dots").innerHTML = "";
    document.getElementById("ans").innerHTML = "No I can't do it"
    document.getElementById("trybutton").innerHTML = '<button onclick="weiter()">Dont give up!!</button>';
    clearInterval(intervalId);
}

function immerweiter(html, dots) {
    document.getElementById("html").innerHTML = html;
    document.getElementById("dots").innerHTML = dots;
}

function gehtweiter(html, dots){
    var num = Math.random();
    if(num < 0.85){
        immerweiter(html, dots);
    } else {
        giveup();
    }
}
