/* 
data_nav is a textContent a has id #sectionx and class menu_list 
for loop li to put a tags
for of loop to put the lis then put them to a document fragment then to put it to ul
pay attention to youractive class in css classList
*/

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
const navbar = document.querySelector("#navbar__list");
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");
const listItem4 = document.createElement("li");
const listItem5 = document.createElement("li");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
listItem1.innerHTML = "<a href='#'>Section 1</a>";
listItem2.innerHTML = "<a href='#'>Section 2</a>";
listItem3.innerHTML = "<a href='#'>Section 3</a>";
listItem4.innerHTML = "<a href='#'>Section 4</a>";
listItem5.innerHTML = "<a href='#'>Section 5</a>";
navbar.append(listItem1, listItem2, listItem3, listItem4, listItem5);

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
