const revealItems = document.querySelectorAll(".panel, .hero-card, .info-strip, .gallery-panel, .contact-panel");
const phoneButtons = document.querySelectorAll(".phone-toggle");
const phoneNumbers = document.querySelectorAll(".phone-number");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

phoneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.phoneTarget;

    phoneNumbers.forEach((number) => {
      number.classList.toggle("is-active", number.id === targetId);
    });

    phoneButtons.forEach((item) => {
      const isCurrent = item === button;
      item.classList.toggle("primary", isCurrent);
      item.classList.toggle("secondary", !isCurrent);
    });
  });
});
