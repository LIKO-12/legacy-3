const navbarElement = document.querySelector(".navbar");
const toggleButton = document.querySelector(".navbar .mobile-toggle");

toggleButton.onclick = () => navbarElement.classList.toggle("active");