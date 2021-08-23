// building the nav
function generateListItems(){
  const fragment = document.createDocumentFragment();
  const navbar = document.querySelector("#navbar__list");
  // Build menu
  for(let i = 1; i < 6; i++) {
    const listItem = document.createElement("li");
    
    const data = document.getElementById(`section${i}`)
    const a =  data.getAttribute("data-nav");
    
    // Scroll to section on link click
    listItem.innerHTML = `<a href="#section${i}" class="menu__link" id="${i}">${a}</a>`;
    
    fragment.appendChild(listItem);
    
  }
  navbar.appendChild(fragment);
}
generateListItems();

//section smooth scroll

for(let i = 1; i < 6; i++) {

const data = document.getElementById(`section${i}`);

document.getElementById(`${i}`).addEventListener("click", function(e){
  e.preventDefault();
  data.scrollIntoView({
  behavior: 'smooth', block: 'center'
    });
  })
}

// Adding class 'active' to section when near top of viewport

let sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries,observer) =>{
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('your-active-class');
      })
    }
  );
sections.forEach(section => {observer.observe(section);})

