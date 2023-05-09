function Click() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value / 100;
  const bmi = weight / (height * height);

  document.getElementById("bmititle").innerHTML = `Your BMI: ${bmi.toFixed(1)}`;

  const elem1 = document.getElementById("bmi1");
  const elem2 = document.getElementById("bmi2");
  const elem3 = document.getElementById("bmi3");
  const elem4 = document.getElementById("bmi4");
  const elem5 = document.getElementById("bmi5");

  if (bmi <= 0) {
    elem1.style.display = "none";
    elem2.style.display = "none";
    elem3.style.display = "none";
    elem4.style.display = "none";
    elem5.style.display = "none";
  } else if (bmi < 18.5) {
    elem1.style.display = "block";
    elem2.style.display = "none";
    elem3.style.display = "none";
    elem4.style.display = "none";
    elem5.style.display = "none";
  } else if (bmi < 25) {
    elem1.style.display = "none";
    elem2.style.display = "block";
    elem3.style.display = "none";
    elem4.style.display = "none";
    elem5.style.display = "none";
  } else if (bmi < 30) {
    elem1.style.display = "none";
    elem2.style.display = "none";
    elem3.style.display = "block";
    elem4.style.display = "none";
    elem5.style.display = "none";
  } else if (bmi > 30) {
    elem1.style.display = "none";
    elem2.style.display = "none";
    elem3.style.display = "none";
    elem4.style.display = "block";
    elem5.style.display = "none";
  } else {
    elem1.style.display = "none";
    elem2.style.display = "none";
    elem3.style.display = "none";
    elem4.style.display = "none";
    elem5.style.display = "none";
    document.getElementById("bmititle").innerHTML = `
    Enter an appropriate value`;
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const boxes = document.querySelectorAll(".card");
function handleBoxMouseEnter(event) {
  boxes.forEach(function (box) {
    if (box !== event.target) {
      box.style.opacity = 0.6;
    }
  });
}

function handleBoxMouseLeave(event) {
  boxes.forEach(function (box) {
    box.style.opacity = 1;
  });
}

boxes.forEach(function (box) {
  box.addEventListener("mouseenter", handleBoxMouseEnter);
  box.addEventListener("mouseleave", handleBoxMouseLeave);
});

const fadeInLeft = document.querySelector(".fade-in-left");

const fadeInLeftObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
});

fadeInLeftObserver.observe(fadeInLeft);
