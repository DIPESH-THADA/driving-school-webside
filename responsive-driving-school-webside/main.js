/* ============= for dropdown the menu items ============ */

const navMenu = document.querySelector(".nav__menu");
const navMenuOpen = document.querySelector(".nav__menu-open");
const navMenuClose = document.querySelector(".nav__menu-close");

navMenuOpen.addEventListener("click", () => {
  navMenu.style.display = "flex";
  navMenuOpen.style.display = "none";
  navMenuClose.style.display = "inline-block";
});

navMenuClose.addEventListener("click", () => {
  navMenu.style.display = "none";
  navMenuClose.style.display = "none";
  navMenuOpen.style.display = "inline-block";
});

/* ============= for dropdown the faq  ============ */

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("show");
    if (faq.classList.contains("show")) {
      faq.querySelector("i").className = "uil uil-angle-up";
    } else {
      faq.querySelector("i").className = "uil uil-angle-down";
    }
  });
});



const themeBtn = document.querySelector(".theme__btn");
themeBtn.addEventListener("click", () => {
  if (document.body.className === "dark") {
    document.body.className = "";
    themeBtn.innerHTML = `<i class="uil uil-moon"></i>`;
    localStorage.setItem("driving-school-web", "");
  } else {
    document.body.className = "dark";
    themeBtn.innerHTML = `<i class="uil uil-sun"></i>`;
    localStorage.setItem("driving-school-web", "dark");
  }
});

window.addEventListener("load", () => {
  document.body.className = localStorage.getItem("driving-school-web");
  if (localStorage.getItem("driving-school-web") == "") {
    themeBtn.innerHTML = `<i class="uil uil-moon"></i>`;
  } else{
    themeBtn.innerHTML = `<i class="uil uil-sun"></i>`
  }
});
