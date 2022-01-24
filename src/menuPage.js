function menuPage(){
    let menuDiv = document.createElement("div");

    const mainTitle = document.createElement("h2");
    mainTitle.textContent = "Here\'s my menu";
    mainTitle.classList.add("title");

    menuDiv.appendChild(mainTitle);

    return menuDiv;
}

export default menuPage;