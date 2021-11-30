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
