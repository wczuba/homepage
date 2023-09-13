const firstName = 'Wojtek'
const age = 38

console.log(`Nazywam się ${firstName} i mam ${age} lat`)
alert(`Nazywam się ${firstName} i mam ${age} lat`)

const header = document.querySelector('.page-header__heading--js')

console.log(header.innerHTML)

header.innerHTML = 'Hej!'

function calculate(MyNumber) {
    return MyNumber*2
}

console.log(calculate(3))

const deathStar = {
    diameter: 120000, // property
    fire: (target) => { // method
        console.log(`${target} destroyed!`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
}

console.log(deathStar.name)

deathStar.fire('Arka Gdynia')