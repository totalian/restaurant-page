import homeImage from './home.png'
import menuImage from './menu.png'
import contactImage from './contact.png'
import Hero from './hero.js'
// import homeContent from '.homeContent.js'
// import menuContent from '.menuContent.js'
// import contactContent from '.menuContent.js'

const component = (() => {

    // Data for the nav bar
    const pages =
    {
        leftItems: [
            {
                "pageName": "Home",
                "color": "#FFA7A7",
                "image": homeImage,
                // "content": homeContent
            },
        ],
        rightItems: [
            {
                "pageName": "Menu",
                "color": "#A7B0FF",
                "image": menuImage,
                // "content": menuContent
            },
            {
                "pageName": "Contact",
                "color": "#A7DAFF",
                "image": contactImage,
                // "content": contactContent
            },
        ]
    }

    // make the nav bar
    const navBar = document.createElement('nav')
    navBar.classList.add('navbar')

    // make the left and right sections
    const leftSection = document.createElement('ul')
    const rightSection = document.createElement('ul')

    // helper function add multiple items to a nav bar with a callback on each item
    const addToNavSection = (section, pageNames) => {
        let navItems = []
        for (let i = 0; i < pageNames.length; i++) {
            let listItem = document.createElement('li')
            listItem.innerHTML = `<a href = "#">${pageNames[i].pageName}</a>`
            section.appendChild(listItem)
            navItems.push({listItem,pageName:pageNames[i]})
        }
        return navItems
    }

    // add links to nav bar but also place them into arrays
    let leftSectionItems = addToNavSection(leftSection, pages.leftItems)
    let rightSectionItems = addToNavSection(rightSection, pages.rightItems)

    // make an array of all nav items
    let navItems = [leftSectionItems, rightSectionItems].flat()

    // make sure home has the selected class
    navItems[0].listItem.classList.add('selectedNavItem')

    // add Event listeners to other nav items to show their selected state
    navItems.forEach(item => {
        item.listItem.addEventListener('click', () => {
            // first remove selected class from all
            navItems.forEach(item => {
                item.listItem.classList.remove('selectedNavItem')
            })
            // add selected class to the clicked item
            item.listItem.classList.add('selectedNavItem')

            // call function to update hero image
            let heroImage = new Image()
            heroImage.src = item.pageName.image
            Hero.updateContainer(item.pageName.pageName,item.pageName.color,heroImage.src)

            // call function to update the content
        })
    })

    // add sections to nav bar
    navBar.appendChild(leftSection)
    navBar.appendChild(rightSection)

    return navBar
})()

export default component