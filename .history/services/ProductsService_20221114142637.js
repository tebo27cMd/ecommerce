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
        name: 'Craft Beer',
        price: 40,
        image: require('../assets/products/3.jpg'),
        description: '.'
    }
    ,
    {
        id: 103,
        name: 'Passion Fruit  ',
        price: 50,
        image: require('../assets/products/3.jpeg'),
        description: '.'
    }
    ,
    {
        id: 104,
        name: 'Spring Water',
        price: 20,
        image: require('../assets/products/6.jpg'),
        description: '.'
    }
    ,
    {
        id: 105,
        name: 'Milkshake',
        price: 80,
        image: require('../assets/products/4.jpg'),
        description: '.'
    },   {
        idf: 105,
        name: 'Milkshake',
        price: 80,
        image: require('../assets/products/4.jpg'),
        description: '.'
    }

];
const FOO

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

