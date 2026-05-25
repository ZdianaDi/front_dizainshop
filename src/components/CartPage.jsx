import React, { useState } from "react";
import "../App.css";
import { getCart, saveCart } from "../utils/cartStorage";

const CartPage = () => {
  const [cart, setCart] = useState(getCart());

  const removeItem = (cartId) => {
    const updated = cart.filter((item) => item.cartId !== cartId);
    setCart(updated);
    saveCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="section-title white-title">Корзина</h1>

      {cart.length === 0 ? (
        <p className="cart-empty">Корзина пуста</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.cartId}>
                <img src={item.image} alt={item.title} />

                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>{item.price}₽</p>

                  {Object.entries(item.selectedOptions || {}).map(
                    ([name, value]) => (
                      <span key={name}>
                        {name}: {value}
                      </span>
                    )
                  )}
                </div>

                <button onClick={() => removeItem(item.cartId)}>
                  Удалить
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            Итого: {total}₽
          </div>

          <a href="/checkout" className="checkout-btn">
  Оформить заказ
</a>
        </>
      )}
    </div>
  );
};

export default CartPage;