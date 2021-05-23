'use strict'

/*1*/

function createDesk() {
    const containerElement = document.getElementById('desk')
    let mySm = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (let row = 0; row < 9; row++) {
        const trElem = document.createElement('tr')
        containerElement.appendChild(trElem);

        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('td')
            if (col % 2 !== 0 && row % 2 == 0 && row !== 0) cell.className = 'cellblack'
            else if (col % 2 == 0 && row % 2 !== 0 && col !== 0) cell.className = 'cellblack'
            if (col === 0 && row > 0) cell.innerText = `${row}`
            if (col > 0 && row === 0) cell.innerText = `${mySm[col - 1]}`
            trElem.appendChild(cell)
        }
    }
}

createDesk();

/*2*/

function getBasket() {
    return {
        goods: [],
        sumBasket() {
            let sum = 0;
            this.goods.forEach((good) => {
                sum += good.count * good.price;
            })
            return sum;
        },
        countGoods() {
            let countG = 0;
            this.goods.forEach((good) => {
                countG++;
            })
            return countG;
        }
    }
}

function getGoods(name, price, count) {
    return {
        name: name,
        price: price,
        count: count
    }
}

const basket = getBasket()
const divBasket = document.querySelector('.basket')


const tomatos = getGoods('Tomato', 300, 10)
const cucumbers = getGoods('Cucumber', 600, 20)
const watermelons = getGoods('Watermelon', 200, 25)
basket.goods = [tomatos, cucumbers, watermelons]
let HTMLtext = ``
if (basket.countGoods() === 0) {
    HTMLtext = `<p>Basket is empty!</p>`
} else {
    HTMLtext = `<p>Basket has ${basket.countGoods()} products. It's value is ${basket.sumBasket()}</p>`

}
divBasket.innerHTML = HTMLtext

/*3*/

let produсts = [tomatos, cucumbers, watermelons]

HTMLtext = ``
produсts.forEach((good) => {
    HTMLtext += `<div class="product">
                       <div>Product: ${good.name}</div>
                       <div>Price: ${good.price}</div>
                       <div>Count: ${good.count}</div>
                   </div>`
})

const divCatalog = document.querySelector('.catalog')
divCatalog.innerHTML = HTMLtext