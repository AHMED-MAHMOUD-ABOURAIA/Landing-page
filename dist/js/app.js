/**
 * @param  {} {constfragment=document.createDocumentFragment(
 * @param  {} ;constnavbar=document.querySelector("#navbar__list"
 * @param  {} ;for(leti=1;i<6;i++
 * @param  {} {constlistItem=document.createElement("li"
 * @param  {} ;constdata=document.getElementById(`section${i}`
 * @param  {} consta=data.getAttribute("data-nav"
 * @param  {} ;listItem.innerHTML=`<ahref="#section${i}"class="menu__link"id="${i}">${a}</a>`;fragment.appendChild(listItem
 * @param  {} ;}navbar.appendChild(fragment
 * @param  {} ;}generateListItems(
 */

// building the nav
function generateListItems(){
  const fragment = document.createDocumentFragment();
  const navbar = document.querySelector("#navbar__list");
  // Build menu
  for(let i = 1; i < 6; i++) {
    const listItem = document.createElement("li");
    
    const data = document.getElementById(`section${i}`);
    const a =  data.getAttribute("data-nav");
    
    // Scroll to section on link click
    listItem.innerHTML = `<a href="#section${i}" class="menu__link" id="${i}">${a}</a>`;
    
    fragment.appendChild(listItem);
    
  }
  navbar.appendChild(fragment);
}
generateListItems();

/**
 * @param  {} leti=1;i<6;i++
 * @param  {} {constdata=document.getElementById(`section${i}`
 * @param  {} ;document.getElementById(`${i}`
 * @param  {} .addEventListener("click"
 * @param  {} function(e
 * @param  {} {e.preventDefault(
 * @param  {'smooth'} ;data.scrollIntoView({behavior
 * @param  {'center'}} block
 */

//section smooth scroll

for(let i = 1; i < 6; i++) {

const data = document.getElementById(`section${i}`);

document.getElementById(`${i}`).addEventListener("click", function(e){
  e.preventDefault();
  data.scrollIntoView({
  behavior: 'smooth', block: 'center'
    });
  });
};

/**
 * @param  {} "section"
 * @param  {} ;constobserver=newIntersectionObserver((entries
 * @param  {} observer
 * @param  {} =>{entries.forEach(entry=>{if(!entry.isIntersecting
 * @param  {} {returnentry.target.classList.remove('your-active-class'
 * @param  {} ;;}entry.target.classList.add('your-active-class'
 * @param  {} ;}
 * @param  {} }
 * @param  {} ;sections.forEach(section=>{observer.observe(section
 * @param  {} ;}
 */

//Adding class 'active' to section when near top of viewport

let sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries,observer) =>{
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return entry.target.classList.remove('your-active-class');
      };
      entry.target.classList.add('your-active-class');
      });
    });
sections.forEach(section => {observer.observe(section);});

/**
 * @param  {} 'scroll'
 * @param  {} (
 * @param  {} =>{consttotalScroll=document.documentElement.scrollHeight-window.innerHeightconstscroll=window.scrollY;if(Math.ceil(scroll
 * @param  {} ===totalScroll
 * @param  {} {constbutton=document.querySelector(".hide"
 * @param  {} button.classList.add("visible"
 * @param  {} }}
 */

/*Adding a scroll to top button on the page 
that’s only visible when the user scrolls below the fold of the page.*/

window.addEventListener('scroll',() =>{
  const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scroll = window.scrollY;
  if (Math.ceil(scroll) === totalScroll){
    const button = document.querySelector(".hide");
    button.classList.add("visible");
  };
});