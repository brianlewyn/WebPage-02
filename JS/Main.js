/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
Section = [
   document.getElementById('Home-Page'),
   document.getElementById('Links'),
   document.getElementById('More'),
   document.getElementById('About')
]

function scrollActive(){
   const scrollY = window.pageYOffset

   Section.forEach(current => {
      const sectionHeight = current.offsetHeight - 55,
            sectionTop = current.offsetTop,
            sectionId = current.getAttribute('id')

      if((scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)){
         document.querySelector(`.Nav__Links a[href*=${sectionId}]`).classList.add('Active-Link')
      }else{
         document.querySelector(`.Nav__Links a[href*=${sectionId}]`).classList.remove('Active-Link')
      }
   })
}
window.addEventListener('scroll', scrollActive)


/* ========== Scroll Reveal Animation ========== */
const sr = ScrollReveal({
   origin: 'top',
   distance: '4px',
   duration: 2000,
   delay: 200
  //  reset: true
})
sr.reveal(`
  #WhatAre-A,
  #IsTheSame-A,
  #HowDoesItWork-A,
  #HowToCreate-A,

     #Habit01-A,
     #Habit02-A,
     #Habit03-A,
     #Habit04-A,
     #Habit05-A,
     #Habit06-A,
     #Habit07-A,
     #Habit08-A,
     #Habit09-A,
     #Habit10-A,

#Apps,
#Books
`)


/* ========== Btn Music Animation ========== */
let Btn = document.getElementById('Btn-Music')
let Aside = document.querySelector('aside')

Btn.onclick = function() {
	Aside.classList.toggle('Box-Music')
}