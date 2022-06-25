'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// using forEach method

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal))
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


/*
////////////////////

// Selecting elements

// Selecting the entire document
console.log(document.documentElement);
// selecting head and body
console.log(document.head);
console.log(document.body);

// querySelector
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// document.getElementById('section--1');//here doesn't need to # to select the element
// // to get all the elements with the name button
// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
//  .insertAdjacentHTML
const message = document.createElement('div');//creating div element DOM object
// adding class
message.classList.add('cookie-message');
// message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie"> Got it </button>';

// prepending basically adds the elements as the first child of the element
// hearder.prepend(message);

// append basically adds the elements as the last child of the element
header.append(message);

// to add elements on multiple copies
// hearder.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message);//old ways
})


// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%'

console.log(getComputedStyle(message).color);

// Changing height of message
// message.style.height = getComputedStyle(message).height + 40 + 'px';
// parsing value
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// changing color on document root
// document.documentElement.style.setProperty('--color-primary', 'orangered')

// Changign attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

// set attribute
logo.alt = "Beautiful logo";
logo.setAttribute('company', 'Banklist')

// Doen't read non standard attributes

// To get attributes
console.log(logo.src);//http://127.0.0.1:5500/img/logo.png
console.log(logo.getAttribute('src'));//img/logo.png //use this

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
// version-number into camelCase
console.log(logo.dataset.versionNumber);

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');//not includes

// Don't use
logo.className = 'jonas'

*/


// Smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('section--1');

btnScrollTo.addEventListener('click', function (e) {

})



