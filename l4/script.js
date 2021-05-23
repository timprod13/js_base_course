'use strict';

/*1*/

function getMyObject(num) {
    if (num > 999) {
        console.log(`${num} is more than 999!`)
        return {}
    } else {
        return {
            units: Math.floor(num % 10),
            tens: Math.floor(num / 10 % 10),
            hundreds: Math.floor(num / 100 % 10),

        };
    }
}

let num = +prompt('Iput a number from 0 to 999')
const myObg = getMyObject(num)
console.log(myObg)

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
const tomatos = getGoods('Tomato', 10, 300)
const cucumbers = getGoods('Cucumber', 20, 600)
const watermelon = getGoods('Watermelon', 25, 200)

basket.goods = [tomatos, cucumbers, watermelon]
console.log(`Basket value is  ${basket.sumBasket()}`);