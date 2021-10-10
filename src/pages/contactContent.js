const component = (() => {
    const contactContent = document.createElement('div')
    contactContent.classList.add('page-content')

    // add title to page
    const pageTitle = document.createElement('p')
    pageTitle.textContent = "Our Address"
    pageTitle.classList.add('page-title')
    contactContent.appendChild(pageTitle)

    // add the address
    const address = document.createElement('p')
    address.textContent = "101 Exford Prince Avenue\nSurrey\nJT5 9JK"
    address.classList.add('page-body')
    contactContent.appendChild(address)

    // add the phone number
    const phoneNumber = document.createElement('p')
    phoneNumber.classList.add('page-body')
    phoneNumber.textContent = "(0208) 252 5252"
    contactContent.appendChild(phoneNumber)
    

    return contactContent
})()

export default component