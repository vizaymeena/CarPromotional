
/* 1. navbar starts */

window.addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('nav');
    let div = document.createElement('div');
    const ul = document.createElement('ul');
    const li = document.createElement('li'); 

    nav.classList.add('nav');
    div.classList.add('navDiv');

    // Website Name
    let title = document.createElement('h1')
    title.textContent='Road Fury'
    title.classList.add('title')
    div.appendChild(title)

    li.classList.add('navLinks');
  
    // Loop
    ['Home','Cars','About','Help','Register','Login'].forEach(e => {

    // Creating anchortag inside loop ensure anchor tag will created as per array length on which forLoop has applied
      const a = document.createElement('a');
      a.textContent = e;
      a.href = '#';
      a.classList.add('anchors');
      li.appendChild(a); 
    });
  
    ul.appendChild(li); 
    div.appendChild(ul);
    nav.appendChild(div);
    const redRoad = document.createElement('div')
    
    nav.appendChild(redRoad)
    
    // prepand means appending child to the top most of the body before any elements
    document.body.prepend(nav);
  });
  

// navbar ends


/* 2. flex section starts*/

window.addEventListener('DOMContentLoaded', () => {
  const products = [
     { title: 'Jaguar F-Type R', about: "Roars like a beast, hugs corners like your ex never could. Pure adrenaline on wheels.", price: 1+'cr', img: "Images/car2.webp"
     },

     {title: 'Jaguar XJ',about: "Feels like sitting in a five-star hotel... if that hotel could hit 155 mph.",price: 2+'cr',img: "Images/car3.webp"
     },

     {title: 'Jaguar I-Pace',about: "Electric, sleek, and faster than your morning coffee hit. The future is growling.",price: 3+'cr',img: "Images/car7.webp"
     },

     {title: 'Jaguar XF',about: "Classy enough for business, crazy enough for backroads. A suit with sneakers.",price: 1.9+'cr',img: 'Images/car4.jpeg'
     },

     {title: 'Jaguar E-Type (Classic)',about: "James Bond didn't drive this—but he should've. Timeless curves and vintage speed.",price:85+'lac',img: 'Images/car5.jpeg'
     },

     {title: 'Jaguar F-Pace SVR',about: "An SUV that sounds like thunder and moves like a cheetah on caffeine.",price: 99+'lac',img: 'Images/car6.jpeg'
     },
  ]

  let container = document.querySelector('.containerCard');

  products.forEach((e) => {
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <div class="cardImage">
        <img src="${e.img}" alt="${e.title}">
      </div>
      <div class="cardContent">
        <h3 class="cardTitle">${e.title}</h3>
        <p class="cardDescription">${e.about} <span class='readMore'> ... </span></p>
      </div>
      <div class="cardPrice">
        ${e.price}
      </div>
    `;

   

    container.appendChild(card);
  });
});


// Show cars based on categories
const cars = [
  { brand: "Hyundai", model: "i20", description: "Compact and stylish.", image: "Images/newcars/hi20.jpg" },
  { brand: "Hyundai", model: "2020", description: "Compact and stylish.", image: "Images/newcars/hcreta.avif" },
  { brand: "Hyundai", model: "2020", description: "Compact and stylish.", image: "Images/newcars/hexter.webp" },


  { brand: "Kia", model: "Seltos", description: "Bold and powerful.", image: "Images/newcars/kia.jpg" },
  { brand: "Kia", model: "Seltos", description: "Bold and powerful.", image: "Images/newcars/kiasonet.jpg" },
  { brand: "Kia", model: "Seltos", description: "Bold and powerful.", image: "Images/newcars/kiasonet2.jpeg" },

  { brand: "Mahindra", model: "Thar", description: "Adventure ready.", image: "Images/newcars/mahindra1.avif" },

  { brand: "Mahindra", model: "Thar", description: "Adventure ready.", image: "Images/newcars/mahindra3.jpg" },
  { brand: "Mahindra", model: "Thar", description: "Adventure ready.", image: "Images/newcars/mahindra2.avif" },

  { brand: "Suzuki", model: "Swift", description: "Sporty and fun.", image: "Images/newcars/suzuki1.avif" },
  { brand: "Suzuki", model: "Swift", description: "Sporty and fun.", image: "Images/newcars/suzuki2.jpg" },
  { brand: "Suzuki", model: "Swift", description: "Sporty and fun.", image: "Images/newcars/suzuki3.webp" },

  { brand: "Skoda", model: "Octavia", description: "Elegant and premium.", image: "Images/newcars/skoda1.avif" },
  { brand: "Skoda", model: "Octavia", description: "Elegant and premium.", image: "Images/newcars/skoda2.jpg" },

]

// Select elements
window.addEventListener("DOMContentLoaded",()=>{
  let categoryItems = document.querySelectorAll('.sublist')
  let carContainer = document.querySelector('.right')

// Function to display cars
  function displayCars(filteredCars) {
    carContainer.innerHTML = "" // Clear existing cars

    filteredCars.forEach(car => {
      carContainer.innerHTML += `
        <div class="invcard">
          <div class="invimg"><img src="${car.image}" alt="${car.model}"></div>
          <div class="invcontent">
            <h2 class="invtitle">${car.brand} ${car.model}</h2>
            <p class="invdescription">${car.description}</p>
            <a href="#" class="invbutton">Explore More</a>
         </div>
        </div>
     `
    })
  }

// Event listeners for categories
  categoryItems.forEach(item => {
   item.addEventListener('click', () => {
      const selectedCategory = item.getAttribute('data-category');
      if (selectedCategory === "All") {
       displayCars(cars)
      } else {
        const filteredCars = cars.filter(car => car.brand === selectedCategory)
        displayCars(filteredCars)
      }
   })
  })

// Initially show all cars
  displayCars(cars)

})
