// cloneNode Real world example

const template = document.querySelector('.card'); // a div you designed once

for (let i = 0; i < 5; i++) {
  const card = template.cloneNode(true); // deep copy
  card.querySelector('p').textContent = `Card #${i+1}`;
  document.body.appendChild(card);
}
