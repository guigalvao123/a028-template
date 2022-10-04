let escondeSenha = (event) => {
    event.preventDefault()
    let mudarSenha = document.getElementById("password")
    mudarSenha.setAttribute("type", "password")

    const mudarClasse = document.querySelector(".light")
    mudarClasse.classList.remove("light")
    mudarClasse.classList.add("dark")
}

