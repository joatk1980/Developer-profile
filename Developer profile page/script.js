//Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

//listens to whether user clicking toggle for dark mode 
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode"); //adds dark mode if dark mode box checked
  } else {
    body.classList.remove("dark-mode");
  } //else removes dark mode 
});


//Dropdown menu
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

// Toggle dropdown on click of the button
dropdown.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});

// Hide the dropdown when pointer leaves both the dropdown and the button
dropdown.addEventListener("mouseleave", function () {
  setTimeout(function () {
    dropdownContent.classList.remove("show");
  }, 300);
});

// Prevent hiding when the pointer is over the dropdown
dropdownContent.addEventListener("mouseenter", function () {
  dropdownContent.classList.add("show");
});

// Hide the dropdown when pointer leaves the dropdown content
dropdownContent.addEventListener("mouseleave", function () {
  setTimeout(function () {
    dropdownContent.classList.remove("show");
  }, 300);
});

// Toggle dark mode for drop down menu
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

//Carousel functionality
const slideContainer = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let counter = 1; // Start at the first original image 
const totalImages = images.length; // Total images including cloned ones
const imageWidth = images[0].clientWidth; // Get the width of an image

// Clone first and last images for seamless loop
const firstClone = images[1].cloneNode(true);
const lastClone = images[totalImages - 2].cloneNode(true);

slideContainer.appendChild(firstClone); // Add first image clone to the end
slideContainer.insertBefore(lastClone, images[0]); // Add last image clone to the start

// Set initial position to show the first image correctly
slideContainer.style.transform = `translateX(${-imageWidth * counter}px)`;

// Function to move to the next slide
const moveToNextSlide = () => {
  if (counter >= totalImages - 1) {
    // If we're on the first cloned slide
    counter = 1; // Jump back to the original first slide
    slideContainer.style.transition = "none"; // Disable transition for the jump
    slideContainer.style.transform = `translateX(${-imageWidth * counter}px)`;

    // Re-enable transition after a short timeout
    setTimeout(() => {
      slideContainer.style.transition = "transform 0.5s ease"; // Smooth transition
      counter++;
      slideContainer.style.transform = `translateX(${-imageWidth * counter}px)`;
    }, 50);
  } else {
    counter++;
    slideContainer.style.transition = "transform 0.5s ease"; // Smooth transition
    slideContainer.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
};

// Function to move to the previous slide
const moveToPrevSlide = () => {
  if (counter <= 0) {
    // If we're on the last cloned slide
    counter = totalImages - 2; // Jump back to the original last slide
    slideContainer.style.transition = "none"; // Disable transition for the jump
    slideContainer.style.transform = `translateX(${-imageWidth * counter}px)`;

    // Re-enable transition after a short timeout
    setTimeout(() => {
      slideContainer.style.transition = "transform 0.5s ease"; // Smooth transition
      counter--;
      slideContainer.style.transform = `translateX(${-imageWidth * counter}px)`;
    }, 50);
  } else {
    counter--;
    slideContainer.style.transition = "transform 0.5s ease"; // Smooth transition
    slideContainer.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
};

// Auto-scroll function
const autoScrollInterval = setInterval(moveToNextSlide, 3000); // Auto-scroll every 3 seconds

// Event listeners for manual navigation
prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

//Back to top button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
