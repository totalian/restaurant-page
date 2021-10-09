const component = (() => {
    let title = document.createElement('p')
    title.textContent = "Menu"
    title.classList.add('page-title')

    return title
})()

export default component