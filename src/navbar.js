import { nodeCreator, chainAppend } from './nodeCreator'

const Navbar = (() => {
  const addNavLink = () => {
    const container = document.getElementById('container')
    const childDiv = nodeCreator('div', {class: 'nav-divs'})
    const home = nodeCreator('button', {id: 'home', class: 'nav-btn'}, 'Home')
    const menu = nodeCreator('button', {id: 'menu', class: 'nav-btn'}, 'Menu')
    const contact = nodeCreator('button', {id: 'contact', class: 'nav-btn'}, 'Contact Us')
    childDiv.appendChild(home)
    childDiv.appendChild(menu)
    childDiv.appendChild(contact)
    chainAppend([container, childDiv])
  }
  return {addNavLink}
})()

export default Navbar