// Exercício 11 do repo https://github.com/NashReact/jest-exercises

/*let cart = [];
const item = {
    name: 'Item',
    price: 1,
  };*/

// setPrice(item: Object, price: Number) => item: Object
const setPrice = (objeto, price) => {
    objeto['price'] = price;
    return objeto;
};
  
// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
    cart.push(item);
    return cart;
};
/*
setPrice(item,123);
addToCart(cart, item);
addToCart(cart, item);
addToCart(cart, item);
console.log(cart);
*/

describe('setPrice()', () => {
it('Should set the price in the given item object, immutably.', () => {
    const item = {
        name: 'test',
        price: 30,
    };
    const copy = Object.assign({}, item);

    const actual = setPrice(item, 50);
    const expected = {
    name: 'test',
    price: 50,
    };

    expect(actual).toEqual(expected);
    expect(item).not.toEqual(copy);
    });
});

describe('addToCart()', () => {
it('should add item to cart, immutably', () => {
    const originalCart = [];
    const item = {
        name: 'Violator',
        price: 30,
        };
    const copy = originalCart.slice();

    const actual = addToCart(originalCart, item);
    const expected = [item];

    expect(actual).toEqual(expected);
    expect(originalCart).not.toEqual(copy);
});
});