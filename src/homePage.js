function homePage(){
    let homeDiv = document.createElement("div");

    const mainTitle = document.createElement("h2");
    mainTitle.textContent = "The Glissand Restaurant";
    mainTitle.classList.add("title");

    homeDiv.appendChild(mainTitle);

    return homeDiv;
}

export default homePage;