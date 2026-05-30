const text = "Falguni Makhija";

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 100);
    }
}

typeWriter();