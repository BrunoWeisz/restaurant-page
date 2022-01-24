function contactPage(){
    let contactDiv = document.createElement("div");

    const mainTitle = document.createElement("h2");
    mainTitle.textContent = "Here\'s my number";
    mainTitle.classList.add("title");

    contactDiv.appendChild(mainTitle);

    return contactDiv;
}

export default contactPage;