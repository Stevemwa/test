const navMenu = document.getElementById('nav_menu'),
navToggle=document.getElementById('nav_toggle'),
navClose=document.getElementById('nav_close')

if(navToggle){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
  })
}

if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* SKILLS Tabs*/

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
  let itemClass =this.parentNode.className
  for ( i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className ='skills__content skills__open'
  }
}

skillsHeader.forEach((el) => {
el.addEventListener('click', toggleSkills)
});

/* Qualification tabs*/
const tabs =document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')
  tabs.forEach(tab => {
    tab.classList.remove('qualification__active')
  })
  tab.classList.add('qualification__active')
  })
})


/* Qualification tabs*/
