//Drop down 
let menuIcon = document.querySelector(".menu_icon")
let dropDownMenu = document.querySelector(".dropDownMenu")

console.log("menuIcoN", menuIcon);
menuIcon.addEventListener('click', () => {
    dropDownMenu.classList.toggle("visible");
})