'use strict';

//1

console.log('Task 1')
let j = 0
while (j <= 100) {
    if (j > 1) {
        let n = 2
        let flag = true
        while (n <= 100) {
            if (j % n === 0 && j != n) {
                flag = false
                break
            }
            n++
        }
        if (flag) console.log(j)
    }
    j++
}

//2

console.log('Task 2')

let product = [
    ['Tomato', 10, 300],
    ['Cucumber', 20, 600],
    ['Watermelon', 25, 200]
]

function countBasketPrice(product) {
    let nn = 0
    let sumprod = 0
    while (nn < product.length) {
        sumprod += product[nn][2]
        nn++
    }
    return sumprod
}

console.log(`Basket value is ${countBasketPrice(product)}`)