let count = 0;

const CURRENT_NUMBER = document.getElementById("currentNumber");

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;

    if (count > 0) {
        return (document.getElementById("currentNumber").style.color =
            "lightseagreen");
    } else if (count == 0) {
        return (document.getElementById("currentNumber").style.color = "black");
    }
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
    if (count < 0) {
        return (document.getElementById("currentNumber").style.color = "red");
    } else if (count == 0) {
        return (document.getElementById("currentNumber").style.color = "black");
    }
}