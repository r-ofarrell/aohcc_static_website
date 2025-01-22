const homeLink = document.getElementById("home-link");
const insuranceLink = document.getElementById("insurance-link");
const faqLink = document.getElementById("faq-link");

const navbarLinks = [homeLink, insuranceLink, faqLink];

function highlightCurrentPageButton(btn) {
  btn.classList.add("current-page");
  btn.classList.remove("navbar-link");
}

navbarLinks.map((link) => console.log(link));
