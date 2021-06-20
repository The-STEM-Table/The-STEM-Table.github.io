toggleNav = function() {  
  navLinks = document.querySelectorAll(".nav-link");

  for(i = 0; i < navLinks.length; i++) {
    if(navLinks[i].style.display !== "block") {
      navLinks[i].style.display = "block";
      navLinks[i].classList.add("animate__animated", "animate__fadeIn");
    }
    else {
      navLinks[i].style.display = "none";
    }    
  }  
}

toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener("click", toggleNav);

onScrollNav = function() {
  navHeight = document.querySelector(".nav-container").clientHeight;
  navContainer = document.querySelector(".nav-container");
  navLogo = document.querySelector("#nav-logo img");

  if (window.pageYOffset >= navHeight) {
    navContainer.classList.add("scrolled");
    navLogo.style.maxWidth = "12vw";
  }
  else {
    navContainer.classList.remove("scrolled");
    navLogo.style.maxWidth = "17vw";
  }

  console.log("Nav scrolled")
}

window.addEventListener("scroll", onScrollNav);