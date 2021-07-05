// import { node } from "webpack";
import { nodeCreator, chainAppend } from "./nodeCreator";

const Menu = (()=> {
  const addMenuPage = ()=> {
    const menuDiv = nodeCreator('div', {id: 'menu-div-container'})
    const foodMenu = [
      {
        name: 'Food1',
        recipe: 'Recipe 1',
        price: 'Price 1'
      },
      {
        name: 'Food2',
        recipe: 'Recipe 2',
        price: 'Price 2'
      },
      {
        name: 'Food3',
        recipe: 'Recipe 3',
        price: 'Price 3'
      },
      {
        name: 'Food4',
        recipe: 'Recipe 4',
        price: 'Price 4'
      },
    ]
    const menuSection = nodeCreator('section', {class: 'menu-section'})
    const ul = nodeCreator('ul')
    foodMenu.forEach((foodItem)=> {
      const li = nodeCreator('li')
      const foodDiv = nodeCreator('div', {class: 'food-div'})
      const headerForFoodDiv = nodeCreator('div', {class: 'header-for-food-div'})
      const foodName = nodeCreator('h3', {class: 'foodName'}, foodItem.name)
      const foodPrice = nodeCreator('span', {class: 'foodPrice'}, foodItem.price)
      const foodRecipe = nodeCreator('p', {class: 'foodRecipe'}, foodItem.recipe)
      chainAppend([headerForFoodDiv, foodName])
      chainAppend([headerForFoodDiv, foodPrice])
      chainAppend([foodDiv, headerForFoodDiv])
      chainAppend([foodDiv, foodRecipe])
      chainAppend([ul, li,foodDiv])
    })
    chainAppend([menuSection, ul])
    const contentDiv = document.getElementsByClassName('content-div')[0]
    chainAppend([contentDiv, menuDiv, menuSection])
  }
  return { addMenuPage }
})()

export default Menu