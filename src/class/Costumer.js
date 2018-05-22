import ShoppingCart from './ShoppingCart';
class Costumer {
  constructor(name){
      this.shoppingCart = new ShoppingCart();
      this.name = name;
    }

    getCart(){
      return this.shoppingCart.getItems();
    }

    addToCart(item){
      this.shoppingCart.addItem(item);
    }

    getCartTotal(){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return `$${this.getCart().map((item) => item.price).reduce(reducer).toFixed(2)}`;
    }
}


export default Costumer;
