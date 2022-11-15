const PRODUCTS = [
    {
        id: 100,
        name: 'Rum Stake',
        price: 90,
        image: require('../assets/products/food1.jpg'),
        description: 'pink drink.'
    },
    {
        id: 101,
        name: 'jack and cola',
        price: 60,
        image: require('../assets/products/food2.jpg'),
        description: 'jack and cola.'
    },
    {
        id: 102,
        name: 'Craft Beer',
        price: 40,
        image: require('../assets/products/food3.jpg'),
        description: '.'
    }
    ,
    {
        id: 103,
        name: 'Tenderloin Steak ',
        price: 50,
        image: require('../assets/products/food4.jpg'),
        description: '.'
    }
    ,
    {
        id: 104,
        name: 'Platter 1',
        price: 960,
        image: require('../assets/products/food5.png'),
        description: '.'
    }
    ,
    {
        id: 105,
        name: 'Platter 2',
        price: 325,
        image: require('../assets/products/food6.png'),
        description: '.'
    },

];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

