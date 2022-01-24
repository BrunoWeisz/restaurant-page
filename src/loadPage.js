import './style.css'
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
//import backgroundImage from './media/background.png';

function loadPage(){
    const mainDiv = document.querySelector("#content");

    const topBar = document.createElement("div");
    topBar.classList.add("top-bar");
    mainDiv.appendChild(topBar);

    /*Button creation*/ 
    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.classList.add("top-button");
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.add("top-button");
    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.add("top-button");
    
    topBar.appendChild(homeButton);
    topBar.appendChild(menuButton);
    topBar.appendChild(contactButton);

    /*------*/
    const contents = document.createElement("div");
    contents.classList.add("page-center");
    mainDiv.appendChild(contents);

    contents.appendChild(homePage());
    
    /*Button behaviour*/

    homeButton.addEventListener("click", (ev)=>{displayHome(contents)});
    menuButton.addEventListener("click", (ev)=>{displayMenu(contents)});
    contactButton.addEventListener("click", (ev)=>{displayContact(contents)});

}

function displayHome(aPlace){
    aPlace.replaceChild(homePage(),aPlace.firstChild);
}
function displayMenu(aPlace){
    aPlace.replaceChild(menuPage(),aPlace.firstChild);
}
function displayContact(aPlace){
    aPlace.replaceChild(contactPage(),aPlace.firstChild);
}

export default loadPage;