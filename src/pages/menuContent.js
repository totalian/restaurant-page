const component = (() => {
    const menu = {
        "starters" : [
            {
                "mealName" : "Meal 1",
                "mealDescription" : "Description for Meal 1",
                "price" : "249.99"
            },
            {
                "mealName" : "Meal 2",
                "mealDescription" : "Description for Meal 2",
                "price" : "249.99"
            },
            {
                "mealName" : "Meal 3",
                "mealDescription" : "Description for Meal 3",
                "price" : "249.99"
            }
        ],
        "mains" : [
            {
                "mealName" : "Meal 4",
                "mealDescription" : "Description for Meal 4",
                "price" : "249.99"
            },
            {
                "mealName" : "Meal 5",
                "mealDescription" : "Description for Meal 5",
                "price" : "249.99"
            },
            {
                "mealName" : "Meal 6",
                "mealDescription" : "Description for Meal 6",
                "price" : "249.99"
            }
        ],
        "deserts" : [
            {
                "mealName" : "Meal 7",
                "mealDescription" : "Description for Meal 7",
                "price" : "249.99"
            },
            {
                "mealName" : "Meal 8",
                "mealDescription" : "Description for Meal 8",
                "price" : "249.99"
            },
            {
                "mealName" : "Meal 9",
                "mealDescription" : "Description for Meal 9",
                "price" : "249.99"
            }
        ]
    }

    const menuContent = document.createElement('div')
    menuContent.classList.add('page-content')

    // helper function to make divs for each menu item in a section
    const createMenuItems = menuSection => {
        let menuItemDivs = []
        let menuItems = menu[menuSection]

        menuItems.forEach(item => {
            let menuItemDiv = document.createElement('div')
            menuItemDiv.textContent = `${item.mealName}\n${item.mealDescription}\n${item.price}`
            menuItemDiv.classList.add('page-body')
            menuItemDivs.push(menuItemDiv)
        })

        return menuItemDivs
    }

    // starters
    // make title
    let starterTitle = document.createElement('p')
    starterTitle.textContent = "Starters"
    starterTitle.classList.add('page-title','page-body')
    menuContent.appendChild(starterTitle)

    // add items
    let starters = createMenuItems("starters")
    starters.forEach(div => {
        menuContent.appendChild(div)
        div.classList.add('page-body')
    })

    // mains
    let mainsTitle = document.createElement('p')
    mainsTitle.textContent = "Mains"
    mainsTitle.classList.add('page-title','page-body')
    menuContent.appendChild(mainsTitle)

    // add items
    let mains = createMenuItems("starters")
    mains.forEach(div => {
        menuContent.appendChild(div)
        div.classList.add('page-body')
    })

        
    // desserts
    let dessertTitle = document.createElement('p')
    dessertTitle.textContent = "Desserts"
    dessertTitle.classList.add('page-title','page-body')
    menuContent.appendChild(dessertTitle)

    // add items
    let desserts = createMenuItems("starters")
    desserts.forEach(div => {
        menuContent.appendChild(div)
        div.classList.add('page-body')
    })


    return menuContent
})()

export default component