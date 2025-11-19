const burgerMenu = document.querySelector(".burgermenu");
const burgerPannel = document.querySelector(".burgerpannel");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  burgerPannel.classList.toggle("active");
});
// ton code ici est good 👍