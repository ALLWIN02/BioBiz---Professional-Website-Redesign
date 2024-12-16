document.addEventListener("DOMContentLoaded", function () {
  
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  
  const cards = document.querySelectorAll(".card");
  const animateCards = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  };

  window.addEventListener("scroll", animateCards);

  
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });

  
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".scroll-wrapper");

  let scrollStep = 1;
  let scrollInterval = setInterval(() => {
    scrollContainer.scrollLeft += scrollStep;
    if (
      scrollContainer.scrollLeft >=
      scrollContainer.scrollWidth - scrollContainer.clientWidth
    ) {
      scrollStep = -1; 
    } else if (scrollContainer.scrollLeft === 0) {
      scrollStep = 1; 
    }
  }, 20); 

  
  scrollContainer.addEventListener("mouseenter", () => {
    clearInterval(scrollInterval);
  });

  scrollContainer.addEventListener("mouseleave", () => {
    scrollInterval = setInterval(() => {
      scrollContainer.scrollLeft += scrollStep;
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollStep = -1;
      } else if (scrollContainer.scrollLeft === 0) {
        scrollStep = 1;
      }
    }, 20);
  });
});
