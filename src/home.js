import { nodeCreator, chainAppend } from "./nodeCreator";

const Home = (()=> {
  const addHomePage = ()=> {

    const homeDiv = nodeCreator('div', {id: 'home-div-container'})
    homeDiv.innerHTML = `
    <h2>Welcome to our restaurant</h2>
    <h3>Bon Appetit!</h3>
    `;
    const showMenu = nodeCreator('button', {id: 'show-menu-btn', class: 'menu-btn'}, 'Show Menu' )
    chainAppend([homeDiv, showMenu])
    const contentDiv = document.getElementsByClassName('content-div')[0]
    chainAppend([contentDiv, homeDiv])
  }
  return {addHomePage}
})()

export default Home