function component() {
    const divElement = document.createElement("div");

    divElement.innerHTML = "Detail";

    return divElement;
}

document.body.appendChild(component());
