import { nodeCreator, chainAppend } from "./nodeCreator";

const Footer = (()=> {
  const addFooter = ()=> {
    const footer = nodeCreator('footer')
    const container = document.getElementById('container')
    footer.innerHTML = `
    <div>
    © SSS 2021
  </div>
  <div>
    <a href="https://github.com/MrSayyod" target="blank" class="icons"><i class="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/in/sayyod-saidov-507b0818b" target="blank" class="icons"><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/sayyodsaidov" target="blank" class="icons"><i class="fab fa-twitter"></i></a>
    <a href="https://www.facebook.com/sayyod" target="blank" class="icons"><i class="fab fa-facebook"></i></a>
  </div>
    `
    chainAppend([container, footer])
  }
  return {addFooter}
})()

export default Footer