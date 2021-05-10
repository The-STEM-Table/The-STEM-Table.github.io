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