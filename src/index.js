import './styles.css';
import { loadPage, navContact } from './loadPage';
import { loadMenu, myMenu } from './menu';
import { contentBox, navMenu, navHome, navContent } from './loadPage';
import { loadContact } from './contact';

loadPage();

navMenu.addEventListener ('click', () => {
    loadMenu();
})

navHome.addEventListener ('click', () => {
    contentBox.textContent = "The World's Best Bakery"
})

navContact.addEventListener('click', () => {
    loadContact()
})