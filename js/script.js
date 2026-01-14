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

// Search functionality
// ================= SEARCH POPUP =================

const openSearch = document.getElementById("openSearch");
const searchPopup = document.getElementById("searchPopup");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const products = [
  "Wedding Kalash",
  "Puja Thali",
  "Mithila Saree",
  "Sindoor Box",
  "Mangalsutra",
  "Ritual Coconut",
  "Wedding Diyas",
];

/* Open popup */
openSearch.addEventListener("click", () => {
  searchPopup.style.display = "flex";
  searchInput.focus();
});

/* Close popup on outside click */
searchPopup.addEventListener("click", (e) => {
  if (e.target === searchPopup) {
    closeSearch();
  }
});

/* Close helper */
function closeSearch() {
  searchPopup.style.display = "none";
  searchInput.value = "";
  searchResults.style.display = "none";
  searchResults.innerHTML = "";
}

/* Search input */
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";

  if (!value) {
    searchResults.style.display = "none";
    return;
  }

  searchResults.style.display = "block";

  products
    .filter((item) => item.toLowerCase().includes(value))
    .forEach((item) => {
      const div = document.createElement("div");
      div.textContent = item;

      div.addEventListener("click", () => {
        goToProduct(item);
      });

      searchResults.appendChild(div);
    });
});

/* Enter key support */
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && searchInput.value.trim() !== "") {
    goToProduct(searchInput.value);
  }
});

/* Navigation logic (for now demo) */
function goToProduct(name) {
  closeSearch();
  alert("Searching for: " + name);
  // Later you can redirect:
  // window.location.href = `/search.html?q=${encodeURIComponent(name)}`;
}


// Whatsapp redirect Script 
document.getElementById("submitDetails").addEventListener("click", function () {
  const role = document.getElementById("role").value;
  const cast = document.getElementById("cast").value;
  if (!role || !cast) {
    alert("Please select Bride/Groom and cast")
    return;
  }
   
  // 🔴 ADMIN WHATSAPP NUMBER (with country code)
  const adminNumber = "9779814325635";
  const message = `New Mithila Marba Request 🧾
  Role: ${role.toUpperCase()}
  Cast: ${cast.toUpperCase()} 
  `;
  const whatsappURL = "https://wa.me/" + adminNumber + "?text=" + encodeURIComponent(message);
  window.location.href = whatsappURL;
})