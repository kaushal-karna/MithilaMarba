console.log("Script is loading...");
console.log(
  "Hello, My name is kaushal karn and i am projecting my work here see my creations...."
);
const menuToggle = document.getElementById("menu-toggle");
const hamburger = document.querySelector('label[for="menu-toggle"]');
const navMenu = document.querySelector(".nav-menu");

// Function that handles clicks when the menu is open
function handleOutsideClick(e) {
  // If click is on hamburger or inside the menu, do nothing (let default behavior happen)
  if (hamburger.contains(e.target) || navMenu.contains(e.target)) return;

  // Otherwise close the menu and remove this listener
  menuToggle.checked = false;
  document.removeEventListener("click", handleOutsideClick);
}

// Watch for checkbox state changes (open/close)
menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    // Menu just opened -> add outside click listener
    // Use setTimeout to ensure label's default toggling finishes if needed
    setTimeout(() => {
      document.addEventListener("click", handleOutsideClick);
    }, 0);
  } else {
    // Menu closed -> remove listener (cleanup)
    document.removeEventListener("click", handleOutsideClick);
  }
});
