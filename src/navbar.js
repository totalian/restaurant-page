const component = (() => {
    // make the nav bar
    const navBar = document.createElement('nav')
    navBar.classList.add('navbar')

    // make the left and right sections
    const leftSection = document.createElement('ul')
    const rightSection = document.createElement('ul')

    // helper function add multiple items to a nav bar
    const addToNavSection = (section,...pageNames) => {
        let navItems = []
        for(let i = 0; i < pageNames.length; i++){
            let listItem = document.createElement('li')
            listItem.innerHTML = `<a href = "#">${pageNames[i]}</a>`
            section.appendChild(listItem)
            navItems.push(listItem)
        }
        return navItems
    }

    // add links to nav bar but also place them into arrays
    let leftSectionItems = addToNavSection(leftSection,"Home")
    let rightSectionItems = addToNavSection(rightSection,"Menu","Contact")

    // make an array of all nav items
    let navItems = [leftSectionItems,rightSectionItems].flat()

    // make sure home has the selected class
    navItems[0].classList.add('selectedNavItem')

    // add Event listeners to other nav items to show their selected state
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // first remove selected class from all
            navItems.forEach(item => {
                item.classList.remove('selectedNavItem')
            })
            // add selected class to the clicked item
            item.classList.add('selectedNavItem')
        })
    })

    // add sections to nav bar
    navBar.appendChild(leftSection)
    navBar.appendChild(rightSection)

    return navBar
})()

export default component