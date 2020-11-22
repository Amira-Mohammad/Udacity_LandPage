
/*Define Global Variables*/
const navBar = document.getElementById("navbar__list");
const pageSections = document.querySelectorAll("section");
/*End Global Variables*/

/* build the nav dinamically*/
$(navBar).css("textAlign" , "center")
buildMyNavBar = () =>{
myNav ='';
pageSections.forEach(section =>{
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;
    myNav += `<li><a class="nav_link list-unstyled mx-2" href="#${sectionID}">${sectionDataNav}</a></li>`
})
navBar.innerHTML= myNav
}
// call function that builds navbar dinamically
buildMyNavBar()
/* build the nav dinamically*/


/* start class active functionality to section when near top of viewport*/

const offset = (section)=>{
    return Math.floor(section.getBoundingClientRect().top);
}

const removeActiveClass = (section) =>{
    section.classList.remove("your-active-class");
    section.style.cssText = "background-color : linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);"
}

const addActiveClass = (isActive , section) =>{
    if(isActive){
        section.classList.add("your-active-class");
        section.style.cssText = "background-color : pink;"
    }
}
/* End class active functionality to section when near top of viewport*/

/* start class active functionality implementation*/
const sectionActivation = ()=>{
    pageSections.forEach(section =>{
        const eleSection = offset(section)

        inviewPort = () => eleSection < 150 && eleSection >= -150;

        removeActiveClass(section);
        addActiveClass(inviewPort() , section )
    })
}

window.addEventListener("scroll" ,sectionActivation )
/* End class active functionality implementation*/




/* start show ScrollToTop*/
const scrollToTop = document.querySelector("#ScrollToTop")
window.addEventListener("scroll" , ()=>{
    if(window.pageYOffset > 100){
        scrollToTop.classList.remove("d-none")
    }else{
        scrollToTop.classList.add("d-none")
    }
} )

/* End ScrollToTop*/



