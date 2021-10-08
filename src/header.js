import Logo from './logo.svg'

const header = (() => {
    // wrapper for the logo and restaurant name
    const container = document.createElement('div')
    container.classList.add('header')

    // get svg logo and add it to container
    const logo = new Image()
    logo.src = Logo
    container.appendChild(logo)

    // get restaurant name and add it to container
    const pageName = document.createElement('h1')
    pageName.textContent = "The Half Moon Bowl"
    container.appendChild(pageName)

    return container
})()

export default header