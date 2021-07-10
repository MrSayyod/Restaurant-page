// import { node } from "webpack";
import { nodeCreator, chainAppend } from "./nodeCreator";

const Menu = (()=> {
  const addMenuPage = ()=> {
    const menuDiv = nodeCreator('div', {id: 'menu-div-container'})
    const foodMenu = [
      {
        name: 'Grilled Pizza',
        recipe: "Pizza dough, extra-virgin olive oil, mozzarella, tomato, cherry tomatoes, ricotta, basil, red pepper flakes",
        price: '7.99$'
      },
      {
        name: 'Beef Stew',
        recipe: "Vegetable oil, beef chuck stew meat, extra-virgin olive oil, onion, carrots, celery, Kosher salt, ground black pepper, garlic, tomato paste,low-sodium beef broth, red wine, Worcestershire sauce, dried or fresh thyme leaves, bay leaves, baby potatoes, frozen peas, chopped parsley",
        price: '9.59$'
      },
      {
        name: 'Salisbury Steak',
        recipe: "Ground beef, egg, bread crumbs, ketchup, Worcestershire sauce, garlic clove, kosher salt, ground black pepper, extra-virgin olive oil, unsalted butter, onion, thyme, mushrooms, flour, tomato paste, beef stock",
        price: '15.99$'
      },
      {
        name: 'Meatball sub soup',
        recipe: "Ground beef, Italian bread crumbs, garlic, Italian parsley, red pepper flakes, kosher salt, ground black pepper, extra-virgin olive oil, onion, clove garlic, tomato paste, crushed tomatoes, low-sodium beef broth, skim milk, mozzarella, grated Parmesan, dried oregano, Baguette slices",
        price: '11.20$'
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