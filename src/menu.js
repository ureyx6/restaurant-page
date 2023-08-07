import { contentBox } from './loadPage';





const myMenu = [];
class menuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        myMenu.push(this);
    }

};
const item1 = new menuItem('brownie', '$2')
const item2 = new menuItem('cookie', '$1')
const item3 = new menuItem('cupcake', '$3')
const item4 = new menuItem('chocolates', '$1')



function loadMenu() {
    contentBox.textContent = "";
    let tempDiv2 = document.createElement('div')
    tempDiv2.classList.add('menu-items')
    contentBox.append(tempDiv2)
    myMenu.forEach( e => {
        let tempDiv = document.createElement('div')
        tempDiv.textContent = e.title + ' ' + e.price
        tempDiv2.append(tempDiv)
    })
}

export { loadMenu } 
export { myMenu }



