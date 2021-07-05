import Navbar from "./navbar";
import Content from './content'
import Home from './home'
// import menu from './menu'
// import { doc } from "prettier";
import Menu from "./menu";

Navbar.addNavLink()
Content.addContent()
Home.addHomePage()


const clearContent = () => {
  const divForContent = document.getElementsByClassName('content-div')[0]
  if (divForContent.childNodes.length == 1) {
    divForContent.removeChild(divForContent.lastChild)
  }
}

const showMenu = () => {
  clearContent()
  Menu.addMenuPage()
}


document.addEventListener('DOMContentLoaded', ()=> {
  const menu = document.getElementById('menu')
  menu.addEventListener('click', showMenu)
})