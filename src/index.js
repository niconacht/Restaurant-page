import {loadMenu} from './menu.js';
function pageLoad(){ 
    window.addEventListener("load", () => {
        const html = `<header>
        <nav class= "navbar">
          <span class="navbar-toggle" id="js-navbar-toggle">
          <i class="fas fa-bars"></i>
        </span>
            <a class="logo" href="index.html">Bread&<br>Beer</a>
            <ul class="top-nav nav-elem" id="nav-menu">
              <li>
                <a href="index.html" class="nav-elem">Home</a>
                <li id="menu">
                  Menu
                </li>
                <li>
                  <a href="findus.html" class="nav-elem">Find us</a>
                </li>
              </li>
            </ul>
          </nav>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@400;700&display=swap" rel="stylesheet">
        </header>
        <div id="main-container">
         <div class="intro-card">
           <p class="main-intro">
              Bread & Beer für dich und deine Freunde! <br>
              Wir servieren Euch die leckersten Biere und das saftigste Brot, mit Liebe hergestellt in Berlin & Brandenburg.<br>
              Eat Local!
           </p>
         </div>
         <button class="btn reservation-btn"><a href="http://opentable.com"></a>Book a Table</button>
        </div>`;
        document.getElementById("content").innerHTML += html;
        
    });
}

//nav logic

pageLoad();

document.addEventListener("click", (e) => {
    if (e.target.id === "menu") {
                loadMenu();
    }
});

