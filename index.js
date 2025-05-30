window.addEventListener('DOMContentLoaded', () => {
	let stringerModel = document.querySelector('.kia_stringer_models')
	let stringerArrow = document.querySelector('.arrow_left')

	try {
			stringerArrow.addEventListener('click', () => {
			stringerModel.classList.toggle('show')
		})
	} 
	catch (error) {
		console.error("error accured at toggle arrow button", error)
	}
}
)


