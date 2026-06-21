// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Fade-in animation

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

},{
  threshold:0.15
});

document.querySelectorAll(".card, .about-grid, .gallery img").forEach(el=>{
  observer.observe(el);
});

// Header shadow on scroll

window.addEventListener("scroll", ()=>{

  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
  }else{
    header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";
  }

});

// Counter animation

const counters = document.querySelectorAll(".stats h2");

const animateCounter = (counter)=>{

  const target = counter.innerText.replace("+","").replace("%","");

  let current = 0;

  const increment = target / 100;

  const update = ()=>{

    if(current < target){

      current += increment;

      counter.innerText =
      Math.ceil(current) +
      (counter.innerText.includes("%") ? "%" : "+");

      requestAnimationFrame(update);

    }else{

      if(counter.innerText.includes("%")){
        counter.innerText = target + "%";
      }else{
        counter.innerText = target + "+";
      }

    }

  };

  update();

};

const statsSection = document.querySelector(".stats");

let started = false;

window.addEventListener("scroll", ()=>{

  if(!started &&
     window.scrollY >
     statsSection.offsetTop - 500){

    counters.forEach(counter=>{
      animateCounter(counter);
    });

    started = true;
  }

});

// Gallery hover effect

document.querySelectorAll(".gallery img").forEach(img=>{

  img.addEventListener("mouseenter", ()=>{

    img.style.transform = "scale(1.05)";

  });

  img.addEventListener("mouseleave", ()=>{

    img.style.transform = "scale(1)";

  });

});
