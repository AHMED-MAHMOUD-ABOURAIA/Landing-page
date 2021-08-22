
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

function generateListItems(){
const fragment = document.createDocumentFragment();
const navbar = document.querySelector("#navbar__list");
for(let i = 1; i < 6; i++) {
  const listItem = document.createElement("li");
  
  const data = document.getElementById(`section${i}`)
  const a =  data.getAttribute("data-nav");
  
  listItem.innerHTML = `<a href="#section${i}" class="menu__link">${a}</a>`;
  
  fragment.appendChild(listItem);
}
navbar.appendChild(fragment);
}
generateListItems();

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

//# sourceMappingURL=main.js.map
