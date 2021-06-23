class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._alert = new Bind(
      new Alert(),
      new AlertView($('#alertView')),
      'message'
    );

    this._products = new Bind(
      new ProductsList(),
      new ProductsView($('#products')),
      'add',
      'clear'
    );

    this.allProducts();
  }

  async allProducts() {
    const service = new ProductsService();
    const products = await service.allProducts();

    const data = products.map(product => new Product(product.image, product.description, product.value));
    
    this._products.add(data);
  }
}
