let menu = document.getElementById("menu2");
menu.style.top = "-100vh";
let element = document.getElementById("navOpen");
element.addEventListener("click", function () {
    menu.style.top = 0;
});
element = document.getElementById("close");
element.addEventListener("click", function () {
    menu.style.top = "-100vh";
    console.log("aisi");
});