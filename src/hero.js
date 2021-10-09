import Home from './home.png'

const component = (() => {
    // make the container with basic styling
    const heroContainer = document.createElement('div')
    heroContainer.classList.add('hero-container')

    // make the default title
    const heroTitle = document.createElement('h1')
    heroTitle.textContent = "Home"

    // make the default hero image
    const heroImage = new Image()
    heroImage.src = Home

    // add the default values to the container
    heroContainer.appendChild(heroTitle)
    heroContainer.appendChild(heroImage)

    // function to update content of hero container
    const updateContainer = (title, color, image) => {
        heroTitle.textContent = title
        heroContainer.style.backgroundColor = color
        heroImage.src = image
    }

    return {heroContainer,updateContainer}
})()

export default component