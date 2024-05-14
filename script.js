function caliculate() {
    var param1 = document.getElementById("numa").value;
    var param2 = document.getElementById("numb").value;
    if(!param2 || !param1){
        window.alert("Put a fucking number.");
    } else {
        var url = `garrison.html?number1=${encodeURIComponent(param1)}&number2=${encodeURIComponent(param2)}`;
        window.location.href = url;
    }
}



