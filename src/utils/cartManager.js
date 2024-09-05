import { EventEmitter } from 'events';

export var cartEventEmitter = new EventEmitter();

class ShoppingCart {
  constructor() {
    // Obtener el carrito actual del localStorage o inicializar un array vacío si no existe
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
  }

  // Agregar un producto al carrito
  addProduct(product, amount = 1) {
    const existingProduct = this.cart.find(
      (item) => item.product.id === product.id
    );

    if (existingProduct) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      existingProduct.amount += amount;
    } else {
      // Si el producto no está en el carrito, agregarlo con la cantidad especificada
      this.cart.push({ product, amount });
    }

    // Actualizar el carrito en el localStorage
    this.saveCart();
    cartEventEmitter.emit('cartChanged');
  }

  // Eliminar un producto del carrito
  removeProduct(productId) {
    this.cart = this.cart.filter((item) => item.product.id !== productId);

    // Actualizar el carrito en el localStorage
    this.saveCart();
    cartEventEmitter.emit('cartChanged');
  }

  // Aumentar la cantidad de un producto en el carrito
  increaseAmount(productId) {
    const product = this.cart.find((item) => item.product.id === productId);

    if (product) {
      product.amount += 1;
      // Actualizar el carrito en el localStorage
      this.saveCart();
      cartEventEmitter.emit('cartChanged');
    }
  }

  // Disminuir la cantidad de un producto en el carrito
  decreaseAmount(productId) {
    const product = this.cart.find((item) => item.product.id === productId);

    if (product && product.amount > 1) {
      product.amount -= 1;
      // Actualizar el carrito en el localStorage
      this.saveCart();
      cartEventEmitter.emit('cartChanged');
    }
  }

  // Obtener la suma de todos los precios en el carrito
  getTotalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.product.price * item.amount,
      0
    );
  }

  getIva() {
    return this.cart.reduce(
      (total, item) =>
        total +
        ((item.product.price * item.product.Taxes[0].percentage) / 100) *
          item.amount,
      0
    );
  }

  getSubTotal() {
    const totalPrice = this.getTotalPrice();
    const iva = this.getIva();

    return totalPrice - iva;
  }

  // Método privado para guardar el carrito en el localStorage
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}

export default new ShoppingCart();
