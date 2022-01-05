/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const Sections = document.querySelectorAll('section[id]')
const ScrollActive = function() {
   const ScrollY = window.pageYOffset

   Sections.forEach(current => {
      const SectionHeight = current.offsetHeight,
            SectionTop = current.offsetTop - 1,
            SectionId = current.getAttribute('id')

      if((ScrollY > SectionTop) && (ScrollY <= SectionTop + SectionHeight)) {
         document.querySelector(`.Menu-Links a[href*=${SectionId}]`).classList.add('Active-Link')
      } else {
         document.querySelector(`.Menu-Links a[href*=${SectionId}]`).classList.remove('Active-Link')
      }
   })
}
window.addEventListener('scroll', ScrollActive)
