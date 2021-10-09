const component = (() => {
    let title = document.createElement('p')
    title.textContent = "Who We Are"
    title.classList.add('page-title')

    return title
})()

export default component