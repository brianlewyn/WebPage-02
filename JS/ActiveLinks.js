/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const Sections = document.querySelectorAll('section[id]')
const ScrollActive = function() {
   const ScrollY = window.pageYOffset

   Sections.forEach(current => {
      const SectionHeight = current.offsetHeight,
            SectionTop = current.offsetTop + 650,
            SectionId = current.getAttribute('id')

      if((ScrollY >= SectionTop) && (ScrollY <= SectionTop + SectionHeight)) {
         document.querySelector(`.Menu-Links a[href*=${SectionId}]`).classList.add('Active-Link')
      } else {
         document.querySelector(`.Menu-Links a[href*=${SectionId}]`).classList.remove('Active-Link')
      }
   })
}
window.addEventListener('scroll', ScrollActive)



/*=============== SCROLL SECTIONS ACTIVE LINK: REMOVE ===============*/
const Second = document.querySelectorAll('.SecondSubList > li a')
const Third = document.querySelectorAll('.ThirdSubList > li a')

let Devp = document.querySelector('a[href="#Development"]')
let WhatAre = document.querySelector('a[href="#WhatAre-A"]')
let Tips = document.querySelector('a[href="#Tips"]')
let Apps = document.querySelector('a[href="#Apps"]')
let Best = document.querySelector('a[href="#TheBestHabits-A"]')
let Habit1 = document.querySelector('a[href="#Habit01-A"]')


const ClassNeed = function(NvHigh, NvLow){
   if (NvHigh.classList.contains('Active-Link')) {
      NvLow.classList.add('Need')
   } else {
      NvLow.classList.remove('Need')
   }
}

const VS = function() {
   Third.forEach(i =>{
      if (i.classList.contains('Active-Link')) {
         document.querySelector('.Menu-Links > li .Active-Link').classList.remove('Active-Link')
         document.querySelector('.SecondSubList > li .Active-Link').classList.remove('Active-Link')
      }
   })
   Second.forEach(i =>{
      if (i.classList.contains('Active-Link')) {
         document.querySelector('.Menu-Links > li .Active-Link').classList.remove('Active-Link')
      }
   })

   ClassNeed(WhatAre, Devp)
   ClassNeed(Habit1, Best)
   ClassNeed(Apps, Tips)
}
window.addEventListener('scroll', VS)




// const ScrollMain = function(){
//    const ScrollY = window.pageYOffset,
//          Home = document.getElementById('Home'),
//          HomeHeight = Home.offsetHeight,
//          Main = document.querySelector('main'),
//          MainHeight = Main.offsetHeight

//    if (ScrollY > HomeHeight && ScrollY < MainHeight) {
//       console.log('Hi')
      
//    } else {
//       console.log('Bye')
//    }
// }
// window.addEventListener('scroll', ScrollMain)