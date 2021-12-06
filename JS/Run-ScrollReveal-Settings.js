/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '10px',
   duration: 2400,
   delay: 400
})

sr.reveal(`.Home-Page`)
sr.reveal(`
   .Intro, 
   
   .WhatAre, 
   .Same, 
   .Work, 
   .Create,
      
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

   .Concl,

   .Apps__Text,
   .Books__Text,
   .Videos
   `, {interval: 100}
)