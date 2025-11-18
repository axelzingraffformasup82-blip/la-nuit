const menuburgerItemHeaders = document.querySelectorAll(
  ".menuburger-item-header"
);
menuburgerItemHeaders.forEach(menuburgerItemHeader =>) {
  menuburgerItemHeaders.addEventListener("click", event =>) {
    menuburgerItemHeader.classList.toggle("active");
  }
}
