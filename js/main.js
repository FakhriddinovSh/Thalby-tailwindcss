let elBtn = document.querySelector("#btn");
let elHeader = document.querySelector(".site-header")

elBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--active")
})