class ShoppingCart {
  constructor(){
    this.totalCost = 0;
    this.items = [];
  }

  addItem(item){
    this.items.push(item);
  }
  getItems(){
    return this.items;
  }
}

export default ShoppingCart;

