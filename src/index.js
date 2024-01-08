import { v4 as uuidv4 } from 'uuid'
import test from './assets/test.png'
import generateJoke from './generateJoke'
import './styles/main.scss'

console.log(123)
console.log(uuidv4())

const image = document.getElementById('laughId')
image.src = test

const element = document.createElement('div')
const element2 = document.createElement('h1')
element2.innerHTML = "Hello HELLo"
element.appendChild(element2)
document.body.appendChild(element)

const getAnotherJoke = document.getElementById('jokeBtn')
getAnotherJoke.addEventListener('click', () => {
    generateJoke()
})

generateJoke()

