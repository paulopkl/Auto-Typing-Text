const element = document.querySelector("#text");
const text = "Use the App to repair your car!";
const msInterval = 90;

const showText = (el, text, interval) => {

    // const char = text.split("").reverse();
    const char = text.split("");
    let i = 0;

    const typer = setInterval(() => {
        if (i > char.length - 1) return clearInterval(typer);

        element.innerHTML += char[i++];
    }, interval);

    typer();
}

showText(element, text, msInterval);