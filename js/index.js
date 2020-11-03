// #1 'click' event
// get anchor links
// change links from black to green on 'click'
// used forEach, event listener, and ternary statement
const navA = document.querySelectorAll('nav a');
navA.forEach(item => {
    item.addEventListener('click', (event) => {
            // use preventDefault to stop page from refreshing
            // for form submission purposes
            event.target.preventDefault();
            (event.target.style.color === 'black') ? (event.target.style.color = 'forestgreen') : (event.target.style.color = 'black');
        })
        // addEventListener w/ ternary statement
})

// #2  'wheel' event
// get text with Let's Go
// on 'wheel' event remove text with Let's Go
const introTxt = document.querySelector('.text-content');
// wheel button of a pointing device is rotated in any direction
introTxt.addEventListener('wheel', (event) => {
    introTxt.remove();
})

// #3 'mousedown' event
// turns background of event green
const header = document.querySelector('header.main-navigation')
header.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor = 'forestgreen';
})


// #4 'mouseenter' event
const contentSecH2 = document.querySelector('section.content-section h2')
header.addEventListener('mouseenter', (event) => {
    // add stopPropagation to prevent nested h2 bckgrnd color from changing
    event.target.stopPropagation();
    event.target.style.backgroundColor = 'gray';
})

// #5 'mouseleave' event
const contentInverseH2 = document.querySelector('section.content-section.inverse-content ')
header.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'forestgreen';
})

// #6 'mousemove' event
const destinH2list = document.querySelectorAll('.content-destination h2');
destinH2list.forEach(element => {
    element.addEventListener('mousemove', (event) => {
        if (event.target.style.color == 'green') {
            event.target.style.color = 'gray';
        } else {
            event.target.style.fontFamily = 'lobster';
            event.target.style.color = 'green';
            event.target.style.textTransform = 'uppercase';
        }
    })
});

// #7 'mouseover' event
const destinH4list = document.querySelectorAll('section.content-pick h4');
destinH4list.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        if (event.target.style.color == 'red') {
            event.target.style.color = 'black';
        } else {
            event.target.style.fontFamily = 'lobster';
            event.target.style.color = 'red';
            event.target.style.textTransform = 'uppercase';
        }
    })
});

// #8 'mouseout' event
// get section with boat img
const boatSec = document.querySelector('section.content-destination img');
// add bus icon on mouseout
boatSec.addEventListener('mouseout', () => {
    // add bus icon adjacent img
    boatSec.insertAdjacentHTML('afterend', '<img src="https://img.icons8.com/dusk/64/000000/bus.png"/>');
});

// #9 'mouseup' event
// click and let go of primary mouse button
// get fun bus logo text
const hLogo = document.querySelector('h1.logo-heading');
// change font sz and font family on mouseup
hLogo.addEventListener('mouseup', (event) => {
    event.target.style.fontFamily = 'Lobster';
    event.target.style.fontSize = '5vw';
    event.target.style.color = 'green';
    event.target.style.textShadow = '2px 2px #3D5D40';
})

// #10 'contextmenu' event
// requires right click
// change bus p
const busP = document.querySelector('.intro p');
// change p font color to yellow
busP.addEventListener('contextmenu', (event) => {
    event.target.style.color = 'yellow';
})

// get bus img
const busImg = document.querySelector('.intro img');
// change img src
busImg.src = "https://assets.codepen.io/3163723/taton-moise-Sk2P0HIxUac-unsplash.jpg";

const signUpBtns = document.querySelectorAll('.btn');

signUpBtns.forEach(element => {
    element.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'green';
        event.target.style.color = 'white';
    })
})