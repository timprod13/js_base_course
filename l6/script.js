'use strict'
const cartItem = {
    render(good) {
        return `<div class="good" data-index-number=${good.articul}>
                    <div class = "articul" ><b>ID: </b> ${good.articul}</div>
                    <div><b>Name</b>: ${good.name}</div>
                    <div><b>Price</b>: ${good.price}</div>
                    <img src="img/${good.pic}" alt="It was a product pic" width="100" height="100">
                    <button class = 'btn_prod' > Send into a basket</button>
                </div>`;
    },

    renderBascket(good) {
        return `<div class="goodbascket" data-index-number=${good.articul}>
                    <div class = "articul" ><b>ID: </b> ${good.articul}</div>
                    <div><b>Name</b>: ${good.name}</div>
                    <div><b>Price</b>: ${good.price}</div>
                    <div><b>Quantity</b>: ${good.quantity}</div>
                    <div><b>Count</b>: ${good.quantity * good.price}</div>
                </div>`;
    },

}

const basket = {
    goods: [],
    cartItem: null,
    init(cartItemClass) {
        this.cartItem = cartItemClass
        document.querySelector('.basket').addEventListener('click', event => {
            this.clickBascket(event)
        })
    },

    clickBascket(event) {
        if (event.target.className === 'btn_bascket') {
            let HTMLtext = `Purchase complete! You've buyed ${this.countGoods()} different products for a ${this.sumBascket()}`
            const bascketProduct = document.querySelector('.basket');
            bascketProduct.innerHTML = HTMLtext
            this.goods = []
        }

    },

    sumBascket() {
        let sum = 0;
        this.goods.forEach((good) => {
            sum += good.quantity * good.price;
        })
        return sum;
    },
    countGoods() {
        let countG = 0;
        this.goods.forEach((good) => {
            countG++;
        })
        return countG;
    },
    addGoods(product) {
        let goodObj = this.goods.find(good => good.articul === product.articul)
        if(typeof goodObj == "undefined") {
            this.goods.push(Object.assign({}, product));
        } else {
                goodObj.quantity ++
        }
        },
    renderItemToBascket() {
        let HTMLText = '<h2> Your basket </h2>'
        const bascketProduct = document.querySelector('.basket');
        this.goods.forEach((good) => {
            HTMLText += cartItem.renderBascket(good)

        })
        HTMLText += `<h2>You have ${this.countGoods()} different products in your basket. It costs ${this.sumBascket()}</h2>`
        HTMLText += '<button class = "btn_bascket" > Do the purchase</button>'
        bascketProduct.innerHTML = HTMLText
    },

    addProduct(good) {
        this.goods.push(Object.assign({}, good));
    }


}


const catalogProduct = {
    goods: [],
    cartItem: null,
    basket: null,
    init(cartItemClass,basketClass) {
        this.cartItem = cartItemClass
        this.basket = basketClass

        document.querySelector('.catalog').addEventListener('click', event => {
            this.clickProdutct(event)
        })
    },

    clickProdutct(event) {
        if (event.target.className === 'btn_prod') {
            const parent = event.target.parentNode
            this.findGood(parent.dataset.indexNumber)
        }

    },

    findGood(articul) {
        let goodObj = this.goods.find(good => good.articul === articul)
        basket.addGoods(goodObj)
        basket.renderItemToBascket()
    },

    renderCatalogItem() {
        const catalogProduct = document.querySelector('.catalog');
        this.goods.forEach((good) => {
            catalogProduct.insertAdjacentHTML('beforeend', cartItem.render(good))
        })
    },
    addProduct(good) {
        this.goods.push(Object.assign({}, good));
    }

}


function getGoods(name, articul, price, quantity, pic) {
    return {
        name: name,
        articul: articul,
        price: price,
        quantity:quantity,
        pic:pic
    }
}


const tomatos = getGoods('Tomato', '1', 300,1, 'tomato.jpg')
const cucumbers = getGoods('Cucumber', '2', 200,1, 'cucumber.jpg')
const watermelons = getGoods('Watermelon', '3', 30,1, 'watermelon.jpg')


catalogProduct.addProduct(tomatos)
catalogProduct.addProduct(cucumbers)
catalogProduct.addProduct(watermelons)

catalogProduct.renderCatalogItem()
catalogProduct.init(cartItem,basket)
basket.init(cartItem)