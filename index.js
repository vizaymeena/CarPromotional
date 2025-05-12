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

// Grid
 const cars = [
    {
      name: "Kia Seltos",
      image: "./Images/kia/kia_htk.avif",
    },
    {
      name: "Kia Cyrus",
      image: "./Images/kia/kia_hte.avif",
    },
    {
      name: "Kia Carnival",
      image: "./Images/kia/kia_htk(o).jpg",
    },
    {
      name:"Kia Sonet",
      image:"./Images/kia/kia-sonet.jpg",
    },
    {
      name:"Kia EV6",
      image:"./Images/kia/kiaev6.jpg",
    }
  ];

  let carGrid = document.getElementById("carGrid");

  cars.forEach((car) => {
    let card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}" />
      <h4>${car.name}</h4>
      <p>See specification</p>
    `;

    carGrid.appendChild(card);
  });
