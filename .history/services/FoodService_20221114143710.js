const PRODUCTSFOOD = [
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
    },

];

export function getProducts() {
    return PRODUCTSFOOD;
}

export function getProduct(id) {
    return PRODUCTSF.find((product) => (product.id == id));
}

