function component() {
    const divElement = document.createElement("div");

    divElement.innerHTML = "Home";

    return divElement;
}

document.body.appendChild(component());
