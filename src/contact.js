import { nodeCreator } from "./nodeCreator"

const Contact = (()=> {
  const addContact = ()=> {
    const contactDiv = nodeCreator('div', {id: 'contact-div-container'})
    contactDiv.innerHTML = `
    <h1>Contact Us</h1>
    <p>Phone: +1 234 567-8900</p>
    <p>Email: example@gmail.com</p>
    <div>Find us in social networks:
      <ul>
        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
    `
    const contentDiv = document.getElementsByClassName('content-div')[0]
    chainAppend([contentDiv, contactDiv])
  }
  return {addContact}
})()

export default Contact