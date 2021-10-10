const component = (() => {
    const bodyContent = document.createElement('div')
    bodyContent.classList.add('body-content')

    const updateContent = content => {
        bodyContent.appendChild(content)
    }

    const clearContent = () => {
        while(bodyContent.firstChild){
            bodyContent.lastChild.remove()
        }
    }

    return {bodyContent,updateContent,clearContent}
})()

export default component