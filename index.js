
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
     { title: 'Jaguar F-Type R', about: "Roars like a beast, hugs corners like your ex never could. Pure adrenaline on wheels.", price: 50000, img: "Images/car2.webp"
     },

     {title: 'Jaguar XJ',about: "Feels like sitting in a five-star hotel... if that hotel could hit 155 mph.",price: 50000,img: "Images/car3.webp"
     },

     {title: 'Jaguar I-Pace',about: "Electric, sleek, and faster than your morning coffee hit. The future is growling.",price: 50000,img: "Images/car7.webp"
     },

     {title: 'Jaguar XF',about: "Classy enough for business, crazy enough for backroads. A suit with sneakers.",price: 50000,img: 'Images/car4.jpeg'
     },

     {title: 'Jaguar E-Type (Classic)',about: "James Bond didn't drive this—but he should've. Timeless curves and vintage speed.",price: 50000,img: 'Images/car5.jpeg'
     },

     {title: 'Jaguar F-Pace SVR',about: "An SUV that sounds like thunder and moves like a cheetah on caffeine.",price: 50000,img: 'Images/car6.jpeg'
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
        $${e.price}
      </div>
    `;

   

    container.appendChild(card);
  });
});


// sidebar categories
function showContent(carType) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.classList.remove('active');
  });
  
  // Show the selected section
  const selectedSection = document.getElementById(carType);
  selectedSection.classList.add('active');
}

// right appear category

window.addEventListener('DOMContentLoaded',()=>{
  
  const cars = [
    // Suvs
    { name: "Mahindra Thar", model: 2020, price: "14lac", image: "./Images/cat/catsuv1.jpg", category: "SUVs" },
    { name: "Mahindra Thar", model: 2020, price: "14lac", image: "./Images/cat/catsuv2.jpg", category: "SUVs" },
    { name: "Mahindra Thar", model: 2020, price: "14lac", image: "./Images/cat/catsuv3.jpg", category: "SUVs" },
    { name: "Mahindra Thar", model: 2020, price: "14lac", image: "./Images/cat/catsuv4.jpg", category: "SUVs" },
    { name: "Mahindra Thar", model: 2020, price: "14lac", image: "./Images/cat/catsuv5.jpg", category: "SUVs" },
    { name: "Mahindra Thar", model: 2020, price: "14lac", image: "./Images/cat/catsuv6.jpg", category: "SUVs" },
    { name: "Mahindra Thar", model: 2020, price: "14lac", image: "./Images/cat/catsuv7.jpg", category: "SUVs" },
    { name: "Mahindra Thar", model: 2020, price: "14lac", image: "./Images/cat/catsuv8.jpg", category: "SUVs" },
    { name: "Mahindra Thar", model: 2020, price: "14lac", image: "./Images/cat/catsuv9.jpg", category: "SUVs" },

    // Sedan
    { name: "Hyundai Verna", model: 2022, price: "10lac", image: "./Images/cat/catsedan1.jpg", category: "Sedan" },
    { name: "Hyundai Verna", model: 2022, price: "10lac", image: "./Images/cat/catsedan2.jpg", category: "Sedan" },
    { name: "Hyundai Verna", model: 2022, price: "10lac", image: "./Images/cat/catsedan3.jpg", category: "Sedan" },
    { name: "Hyundai Verna", model: 2022, price: "10lac", image: "./Images/cat/catsedan4.jpg", category: "Sedan" },
    { name: "Hyundai Verna", model: 2022, price: "10lac", image: "./Images/cat/catsedan5.jpg", category: "Sedan" },
    { name: "Hyundai Verna", model: 2022, price: "10lac", image: "./Images/cat/catsedan6.jpg", category: "Sedan" },

    // coupe and xuv
    { name: "BMW M4", model: 2021, price: "80lac", image: "./Images/cat/catcoupe1.jpg", category: "Coupe" },
    { name: "XUV700", model: 2024, price: "19lac", image: "./Images/cat/catxuv1.jpg", category: "XUVs" },
  ];

  const categoryList = document.getElementById("categoryList");
  const cardContainer = document.getElementById("cardContainer");

  function renderCards(filter) {
    cardContainer.innerHTML = ""; // Clear previous cards

    const filtered = filter === "All" ? cars : cars.filter(car => car.category === filter);

    filtered.forEach(car => {
      const card = document.createElement("div");
      card.className = "cCard";
      card.innerHTML = `
        <div>
          <img src="${car.image}" alt="${car.name}">
          <div class="cCardContent">
            <span>${car.name}</span>
            <span>Model: <span>${car.model}</span></span>
            <span>Price: <span>${car.price}</span></span>
          </div>
        </div>`;
      cardContainer.appendChild(card);
    });
  }

  categoryList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const selectedCategory = e.target.getAttribute("data-category");
      renderCards(selectedCategory);
    }
  });

  // Initial render
  renderCards("All");


})