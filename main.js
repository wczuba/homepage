const firstName = 'Wojtek'
const age = 38

console.log(`Nazywam się ${firstName} i mam ${age} lat`)
alert(`Nazywam się ${firstName} i mam ${age} lat`)

const header = document.querySelector('.page-header__heading--js')

console.log(header.innerHTML)

header.innerHTML = 'Hej!'