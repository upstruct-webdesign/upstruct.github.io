/* Beliebte Pakete Rotation */
const pakete = [
  document.getElementById("paket-s"),
  document.getElementById("paket-s-plus"),
  document.getElementById("paket-premium"),
];

let positionen = ["left", "center", "right"];

function updateView() {
  pakete.forEach((paket, index) => {
    paket.classList.remove("left", "center", "right");
    paket.classList.add(positionen[index]);
  });
}

document
  .querySelector(".rotation-button.right")
  .addEventListener("click", () => {
    // Rotate left → [left, center, right] becomes [center, right, left]
    positionen.push(positionen.shift());
    updateView();
  });

document
  .querySelector(".rotation-button.left")
  .addEventListener("click", () => {
    // Rotate right → [left, center, right] becomes [right, left, center]
    positionen.unshift(positionen.pop());
    updateView();
  });

// Init
updateView();

/* Footer */
const trigger = document.getElementById("socialTrigger");
const tooltip = document.getElementById("socialTooltip");

let tooltipVisible = false;
let hideTimeout;

trigger.addEventListener("mouseenter", () => {
  tooltipVisible = true;
  tooltip.classList.add("show");
  clearTimeout(hideTimeout);
});

trigger.addEventListener("mouseleave", () => {
  hideTimeout = setTimeout(() => {
    if (!tooltip.matches(":hover")) {
      tooltip.classList.remove("show");
      tooltipVisible = false;
    }
  }, 150);
});

tooltip.addEventListener("mouseenter", () => {
  if (tooltipVisible) {
    clearTimeout(hideTimeout);
  }
});

tooltip.addEventListener("mouseleave", () => {
  tooltip.classList.remove("show");
  tooltipVisible = false;
});

/* Header */
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openSidebarBtn");
const mainContent = document.getElementById("mainContent");


sidebar.classList.add("transparent");

openBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  openBtn.classList.toggle("rotated");
  mainContent.classList.toggle("leftSpace");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
    sidebar.classList.remove("transparent");
  } else {
    header.classList.remove("scrolled");
    sidebar.classList.add("transparent"); 
  }
});

/* Über Uns */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

/* Unsere Versprechen */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.unsereVersprechen-Container');

  // Obere 3 Boxen (von rechts)
  const topBoxes = document.querySelectorAll('.unsereVersprechen-Container .versprechen-container:nth-child(-n+3)');
  topBoxes.forEach(box => box.classList.add('animate-from-right'));

  // Untere 3 Boxen (von links)
  const bottomBoxes = document.querySelectorAll('.unsereVersprechen-Container .versprechen-container:nth-child(n+4)');
  bottomBoxes.forEach(box => box.classList.add('animate-from-left'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          topBoxes.forEach(box => box.classList.add('visible'));
          bottomBoxes.forEach(box => box.classList.add('visible'));
        } else {
          topBoxes.forEach(box => box.classList.remove('visible'));
          bottomBoxes.forEach(box => box.classList.remove('visible'));
        }
      });
    }, { threshold: 0.2 });

    observer.observe(container);
  }
});



// Elemente auswählen
const image = document.querySelector(".überUns-Image");
const text = document.querySelector(".überUns-text");

// Startklassen hinzufügen
image.classList.add("hidden-left");
text.classList.add("hidden-right");

// Beobachten
observer.observe(image);
observer.observe(text);
