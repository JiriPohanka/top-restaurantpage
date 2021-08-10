//factory function for new DOM elements
function createElement(element, atributesObj, parentNode) {

    if (!parentNode) {
        throw new Error("calling createElement helper without parentNode parameter")
    }

    const newElement = document.createElement(element)
    parentNode.appendChild(newElement)

    if (atributesObj.classes) {
        for (let elClass of atributesObj.classes) {
            newElement.classList.add(elClass)
        }
    }

    if (atributesObj.id) {
        newElement.setAttribute('id', atributesObj.id)
    }

    return newElement
}


// to create individual <a><li>Menu Item</li></a>
function createMenuItem(targetPageName, targetURL, parentUL) {
    if (!parentUL) {
        throw new Error("calling createMenuItem helper without the parentUL parameter")
    }
    
    const navLink = createElement('a', {classes: ['nav-link']}, parentUL)
    navLink.setAttribute('href', targetURL)    

    // add text into the menu item
    createElement('li', {}, navLink).textContent = targetPageName

    return navLink
}

export { createElement, createMenuItem }