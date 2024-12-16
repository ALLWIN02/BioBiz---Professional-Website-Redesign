document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add animation to cards on scroll
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

  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

  // Show button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Smooth scroll to top
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
      scrollStep = -1; // Reverse direction
    } else if (scrollContainer.scrollLeft === 0) {
      scrollStep = 1; // Forward direction
    }
  }, 20); // Adjust scrolling speed

  // Pause scrolling on hover
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
