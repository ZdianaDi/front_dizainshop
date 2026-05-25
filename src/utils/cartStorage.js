const CART_KEY = "dizain_cart";

export const getCart = () => {
  const saved = localStorage.getItem(CART_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (product, selectedOptions) => {
  const cart = getCart();

  const cartItem = {
    cartId: Date.now(),
    productId: product.id,
    title: product.title,
    price: product.price,
    image: product.images[0],
    selectedOptions,
    quantity: 1,
  };

  const updatedCart = [...cart, cartItem];
  saveCart(updatedCart);
};