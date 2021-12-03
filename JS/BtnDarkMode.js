// =============== Btn DarkMode ===============
const Toggle = document.getElementById('BtnDark');
const Body = document.querySelector('body');

Toggle.addEventListener('click', A=>{
	Toggle.classList.toggle('bxs-sun')

	if (Toggle.classList.contains('bxs-sun')) {
      Toggle.classList.remove('bxs-moon')
		Body.setAttribute('id', 'Dark')
	} else {
      Toggle.classList.add('bxs-moon')
		Body.setAttribute('id', '')
	}
})