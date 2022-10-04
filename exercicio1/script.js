const addElement = () =>{
    const lista = document.getElementById("lista")
    const itemZero = document.createElement("li")
    itemZero.innerHTML = "Item 0"
    lista.insertAdjacentElement(`afterbegin`,itemZero)

    const itemCinco = document.createElement("li")
    lista.appendChild(itemCinco)
    itemCinco.innerHTML = "Item 5"
}
addElement()

/*const addElementCinco = () => {
    const listaCinco = document.getElementById("lista")
    const itemCinco = document.createElement("li")
    itemCinco.innerHTML = "Item 5"
    listaCinco.insertAdjacentElement(`beforeend`,itemCinco)
}
addElementCinco()*/