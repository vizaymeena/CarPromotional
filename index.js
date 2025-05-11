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
})
var swiper = new Swiper(".coverflow_container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
});
