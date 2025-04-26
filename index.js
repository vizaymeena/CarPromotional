
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
  
  let sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.classList.remove('active');
  });
  
  
  let selectedSection = document.getElementById(carType);
  selectedSection.classList.add('active');
}

//