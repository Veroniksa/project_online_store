class ProductsList{
    constructor(container = '.products'){ //куда все товары нужно вывести
        this.container = container;
        this.goods = []; // заполнение массива с помощью _fetchProducts 
        this._fetchProducts();
        this.calcPrice();
    } 
    
    _fetchProducts(){
        this.goods = [// заполняем массив объектами
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    render() {// вывод информации о товарах
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
//            block.innerHTML += productObj.render();
        }
    }



    calcPrice(){
        let span = document.querySelector("span");

        let totalPrice = 0;
        this.goods.forEach(function(el){
            totalPrice += el.price;
        })
        span.insertAdjacentHTML("beforeend", `Товары в корзине на сумма: ${totalPrice}`)
        return console.log(totalPrice);
    /*
    margin-left: 40px;
    padding: 5px;
    border: 1px solid aliceblue;
    border-radius: 5%;
    box-sizing: border-box;
    background: aliceblue; 
    */
    }
    
}

class NotAvailable extends ProductsList{
    constructor(){
        super()

    }
    removeProduct(){

    }

}


class ProductItem{
	constructor(product, img = 'https://picsum.photos/200/150?random'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
		
	}
	
	render(){
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}

    
}

class FavoriteGoods extends ProductItem{
    constructor(){
        super()

    }

    addProduct(){

    }


    removeProduct(){

    }
}

let list = new ProductsList();
list.render();
