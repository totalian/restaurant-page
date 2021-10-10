import './style.css';
import Header from './components/header.js'
import Navbar from './components/navbar.js'
import Hero from './components/hero.js'
import Body from './components/body.js'

document.body.appendChild(Header)
document.body.appendChild(Navbar)
document.body.appendChild(Hero.heroContainer)
document.body.appendChild(Body.bodyContent)