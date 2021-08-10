import { createElement, createMenuItem } from '../helpers/createElement';

const createFooter = () => {   
    const footer = document.querySelector('footer')
    const navFooter = createElement('nav', {classes: ['footer-nav']}, footer)
    const footerMenuWrap = createElement('ul', {classes: ['nav-wrap-ul']}, navFooter)
    const menuItem1 = createMenuItem('Home', '#', footerMenuWrap)
    const menuItem2 = createMenuItem('Menu', '#', footerMenuWrap)
    const menuItem3 = createMenuItem('Contact', '#', footerMenuWrap)
}

export default createFooter