const PRODUCTS = [
    {
        id: 100,
        name: 'Rum Stake',
        price: 190,
        image: require('../assets/products/food1.jpg'),
        description: 'pink drink.'
    },
    {
        id: 101,
        name: 'T-bone Stake',
        price: 160,
        image: require('../assets/products/food2.jpg'),
        description: 'jack and cola.'
    },
    {
        id: 102,
        name: 'Atlantic salmon',
        price: 140,
        image: require('../assets/products/food3.jpg'),
        description: '.'
    }
    ,
    {
        id: 103,
        name: 'Tenderloin Steak ',
        price: 150,
        image: require('../assets/products/food4.jpg'),
        description: '.'
    }
    ,
    {
        id: 104,
        name: 'Platter 1',
        price: 960,
        image: require('../assets/products/food7.png'),
        description: '.'
    }
    ,
    {
        id: 105,
        name: 'Platter 2',
        price: ,
        image: require('../assets/products/food8.png'),
        description: '.'
    },

];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

