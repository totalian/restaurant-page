import HomeContent from '../pages/homeContent'

const component = (() => {
    const bodyContent = document.createElement('div')
    bodyContent.classList.add('body-content')

    // make the default content
    bodyContent.appendChild(HomeContent)

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