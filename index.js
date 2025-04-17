
/* 1. Navbar Starts */

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

    // Creating anchortag inside loop ensure anchor tag will created as per array length on which forLoop has been applied
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

    // Red background on nav
    redRoad.classList.add('redRoad')
    nav.appendChild(redRoad)
    
    // prepand means appending child to the top most of the body before any elements
    document.body.prepend(nav);
  });
  

// Navbar Ends