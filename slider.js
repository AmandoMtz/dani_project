var num = 1;

function avanzar() {
    num++;
    if (num > 6) num = 1;
    document.getElementById("pic").src = "imagen" + num + ".png";
}

function retroceder() {
    num--;
    if (num < 1) num = 6;
    document.getElementById("pic").src = "imagen" + num + ".png";
}
