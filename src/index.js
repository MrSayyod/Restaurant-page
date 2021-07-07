import Navbar from "./navbar";
import Content from './content'
import Home from './home'
// import menu from './menu'
// import { doc } from "prettier";
import Menu from "./menu";
import Footer from './footer'
import Contact from './contact'

Navbar.addNavLink()
Content.addContent()
Home.addHomePage()
Footer.addFooter()


const clearContent = () => {
  const divForContent = document.getElementsByClassName('content-div')[0]
  if (divForContent.childNodes.length == 1) {
    divForContent.removeChild(divForContent.lastChild)
  }
}

const showHomePage = ()=> {
  clearContent()
  Home.addHomePage()
  const menuButton = document.getElementById('show-menu-btn')
  menuButton.addEventListener('click', showMenu)
}

const showMenu = () => {
  clearContent()
  Menu.addMenuPage()
}

const showContact = () => {
  clearContent()
  Contact.addContact()
}


document.addEventListener('DOMContentLoaded', ()=> {
  const homePage = document.getElementById('home')
  const menu = document.getElementById('menu')
  const contact = document.getElementById('contact')
  homePage.addEventListener('click', showHomePage)
  menu.addEventListener('click', showMenu)
  contact.addEventListener('contact', showContact)
})