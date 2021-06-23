class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  async allProducts() {
    const products = await this._http.get('/api/products');
    return products;
  }
}
