let flexContainer = document.createElement('div')
let header = document.createElement('div')
let headerText = document.createElement('div')
let nav = document.createElement('div')
let navHome = document.createElement('div')
let navContact = document.createElement('div')
let navMenu = document.createElement('div')
let contentBox = document.createElement('div')
let content = document.getElementById('content')


function loadPage() {

    flexContainer.classList.add('flex-container')

    header.classList.add('header')
    headerText.classList.add('header-text')
    nav.classList.add('nav')
    navHome.classList.add('nav-home')
    navContact.classList.add('nav-contact')
    navMenu.classList.add('nav-menu')
    contentBox.classList.add('content-box')


    content.append(flexContainer)
    flexContainer.append(header, contentBox)
    header.append(headerText, nav)
    nav.append(navHome, navMenu, navContact)
    contentBox.textContent = "The World's Best Bakery"
    headerText.textContent = "BAM BAKERY"
    navHome.textContent = "Home"
    navMenu.textContent = "Menu"
    navContact.textContent = "Contact"
}

export { loadPage };
export {
    contentBox,
    navMenu,
    navHome,
    navContact
};