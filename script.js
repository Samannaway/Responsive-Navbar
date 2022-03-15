const hamBurgerButton = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".header")


function openNavbar(){
    header.classList.toggle("active")
}


hamBurgerButton.addEventListener("click", () => openNavbar())