class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    const array = data.products;
    let chunks = Array.from({ length: array.length / 4 }, () =>
     array.splice(0, 4)
    );

    return `
      ${chunks.map((row) => {
        return `
            <div class="products__row">
              <ol class="products__list">
              ${row.map(
                (product) =>
                  `
                <li class="products__card">
                  <div class="card">
                    <img
                      class="card__img"
                      src=${product.image}
                      alt=${product.description}
                    />
                    <p class="card__description">
                      ${product.description}
                    </p>
                    <p class="card__price">R$ ${product.value}</p>
                  </div>
                </li> `
              ).join('')}
              </ol>
            </div>
            
            `;
      }).join('')}
      
    `;
  }
}
