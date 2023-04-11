module.exports = class Order {
  #total; // total do pedido, valor total
  #items; // itens comprados, esse item tem como propriedade quantidade e produto
  #User; // usuário que fez o pedido
  constructor(items, user) {
    items.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        throw new Error("Quantidade indisponivel no estoque");
      }
    });
    this.#items = items;
    this.#User = user;
    this.#total = items.reduce(
      (sum, { product, quantity }) => sum + product.price * quantity,
      0
    ); // sum é a soma, e product e quantity é o item mas descrontruido, logo após é somado a soma que começa em zero com o preço e multiplicado pela quantidade
  }

  get data() {
    return {
      items: this.#items,
      user: this.#User,
      total: this.#total,
    };
  }
};
