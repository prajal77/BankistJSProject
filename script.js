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
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // get the coordinate of the element we want to scroll
  // const slcords = section1.getBoundingClientRect();
  // console.log(slcords);
  // console.log(e.target.getBoundingClientRect());
  // // boundingclientRect is relative to the viewpoint
  // // We can get current scrolling position
  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // current height and width viewport
  // console.log('height/Width viewport', document.documentElement.clientHeight,
  //   document.documentElement.clientHeight);
  // Scrolling
  // Current position + current scroll
  // window.scrollTo(slcords.left + window.pageXOffset,
  //   slcords.top + window.pageYOffset);

  /// passing an object 
  // window.scrollTo({
  //   left: slcords.left + window.pageXOffset,
  //   top: slcords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  // modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});


/*
// ________________Event_______________________
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading heading');
  // remove the event after handling
  // h1.removeEventListener('mouseenter', alertH1)

}
h1.addEventListener('mouseenter', alertH1)

// remove the event after some time passout
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

// Attaching eventListener to an element
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: You are reading the heading')
// }


// ----benefit of using of addeventlistener---
// -it allows multiple event listeners to the same event
// - we can remove  event handler if we don't need anymore


*/


// page navigation

//select three links
// using forEach to attach an event handler to each element
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute(('href'));
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });

//     // console.log('link');
//   })
// })

// using event bubling to implement event delegation

// 1. add event listener to common parent element that we interested in
//  2. and in that evetn listener Determine what element originated the event 
// using event.target to know where the event actually happenend

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  // matching strategy
  // check target element match the element
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute(('href'));
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
    // console.log('link');
  }

})

/*
// -------DOM Travaersing--------

const h1 = document.querySelector('h1');

// going downwards: child
console.log(h1.querySelectorAll('.highlight'));
// to get direct children
console.log(h1.childNodes);//this gives every single nodes of every single
//type that there exists

console.log(h1.children);//html collection live collection, updated 

// first and last element child
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// parent element which is not direct parent 
h1.closest('.header').style.background = 'var(--gradient-secondary)'
// closest parent eleement that has the class "header" 
// and its simpley applied all style to that element

// querrySelector  finds element children no matter how dip on the DOM Tree
// closest finds the parent element no matter how far up on the DOM treee

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// for nodes
console.log(h1.previousSibling);
console.log(h1.nextSibling);

// all the sibling
console.log(h1.parentElement.children);
// spread into an array
[...h1.parentElement.children].forEach(function (el) {
  //change all the sibiling except the element itself
  if (el !== h1) el.style.transform = 'scale(0.5)';
})
*/

// tabbled component
const tabs = document.querySelectorAll('.operations__tab');
const tabsConstainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// taking all the taps and attaching an event handler

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

// using event delegations
// for event delegation we need to attach event handler on the common parent element
// of all the elements that we're interested in
// we need the event to figure out where the click happended
tabsConstainer.addEventListener('click', function (e) {
  // matching stragies
  // const clicked = e.target.parentElement;
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  // ignore where the result is null
  // guard clause
  if (!clicked) return;//if not clicked element return
  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  clicked.classList.add('operations__tab--active');

  // // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

});