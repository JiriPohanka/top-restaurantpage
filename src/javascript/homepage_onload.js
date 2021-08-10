import { createElement } from '../helpers/createElement';

const contentDiv = document.querySelector('#content')

function populateHomePage () {

    // hero slide on top of the landing page
    const heroSlide = createElement('section', {classes: ['slide'], id: 'hero-slide'}, contentDiv)
    const h1 = createElement('h1', {}, heroSlide)
    h1.textContent = 'Welcome to Pizza Heaven!'
    const slogan = createElement('p', {}, heroSlide)
    slogan.textContent = "Pizza lovers' heaven on Earth"
    

    // about us slide under hero slide with link to about us page
    const aboutUsSlide = createElement('section', {classes: ['slide']}, contentDiv)
    const aboutUsHeading = createElement('h2', {}, aboutUsSlide)
    aboutUsHeading.textContent = 'About us'
    const aboutUsText = createElement('p', {}, aboutUsSlide)
    aboutUsText.textContent = `We are a haven for all the pizza lovers
    around the World. We put ephasis on fresh ingredients and original
    recipes straight from the sunny penninsula of Italy. Read more about
    our history and our philosophy`
    const aboutUsButton = createElement('button', {classes: ['btn']}, aboutUsSlide)
    aboutUsButton.textContent = 'About us'
    aboutUsButton.addEventListener('click', () => console.log('leads to aboutUs page'))

    // menu teaser, first 3 pizza items and link to the whole menu page
    const menuTeaserSlide = createElement('section', {classes: ['slide']}, contentDiv)
    const menuTeaserHeading = createElement('h2', {}, menuTeaserSlide)
    menuTeaserHeading.textContent = 'Our menu'
    const menuTeaserText = createElement('p', {}, menuTeaserSlide)
    menuTeaserText.textContent = `We offer a wide selection of tasty pizzas.`
    const menuButton = createElement('button', {classes: ['btn']}, menuTeaserSlide)
    menuButton.textContent = 'See our menu'
    menuButton.addEventListener('click', () => console.log('leads to menu page'))
}

export {populateHomePage}
 