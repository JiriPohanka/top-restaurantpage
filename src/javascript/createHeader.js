import { createElement, createMenuItem } from '../helpers/createElement';

const createHeader = () => {   
    const header = document.querySelector('header')
    const navTop = createElement('nav', {classes: ['main-nav']}, header)
    const topMenuWrap = createElement('ul', {classes: ['nav-wrap-ul']}, navTop)
    const menuItem1 = createMenuItem('Home', '#', topMenuWrap)
    const menuItem2 = createMenuItem('Menu', '#', topMenuWrap)
    const menuItem3 = createMenuItem('Contact', '#', topMenuWrap)
}

export default createHeader