const cardOne = document.querySelector('.card__content p');
cardOne.innerHTML = '<sup>Hello</sup> World!';
//-----------------------------------------------------
const sec1 = document.querySelector('.testimonials');
const newHeading = document.createElement('h2');
const para = document.createElement('p');
const newHeadingText = document.createTextNode('Advice for new udacity students');
para.textContent = 'Set aside specific blocks of time each week for your coursework. Add those blocks to your calendar and set reminders.';
newHeading.appendChild(newHeadingText);
sec1.appendChild(newHeading);
newHeading.insertAdjacentHTML('beforeEnd', para.outerHTML);
