class ProductsList {
    
  constructor() {
    this._products = [];
  }

  add(products) {
    this._products = [].concat(this._products, products);
  }

  get products() {
    return [].concat(this._products);
  }

  clear() {
    this._products = [];
  }
}
