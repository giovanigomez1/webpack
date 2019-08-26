import Titulodelachingader from "./Title.js"
import Input from "./Input.js"
import Button from "./Button.js"
import renderList from "./renderlist.js"


const container = document.createElement('div')
const input = Input()
const button = Button()
const ul = document.createElement('ul')

button.addEventListener("click", () => renderList(ul, input.value))

container.appendChild(Titulodelachingader("Fibonacci"))
container.appendChild(input)
container.appendChild(button)
container.appendChild(ul)

document.body.appendChild(container)
