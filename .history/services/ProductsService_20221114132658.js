const PRODUCTS = [
    {
        id: 100,
        name: 'Tonic and Pink Gin',
        price: 90,
        image: require('../assets/products/1.jpg'),
        description: 'pink drink.'
    },
    {
        id: 101,
        name: 'jack and cola',
        price: 60,
        image: require('../assets/products/2.jpg'),
        description: 'jack and cola.'
    },
    {
        id: 102,
        name: 'Beer',
        price: 2,
        image: require('../assets/products/3.jpg'),
        description: '.'
    }
    ,
    {
        id: 103,
        name: 'Beer',
        price: 2,
        image: require('../assets/products/3.jpg'),
        description: '.'
    }
    ,
    {
        id: 104,
        name: 'Beer',
        price: 2,
        image: require('../assets/products/3.jpg'),
        description: '.'
    }
    ,
    {
        id: 105,
        name: 'Beer',
        price: 2,
        image: require('../assets/products/3.jpg'),
        description: '.'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

