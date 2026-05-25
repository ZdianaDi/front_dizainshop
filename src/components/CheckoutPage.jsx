import React, { useState } from "react";
import "../App.css";
import { getCart, saveCart } from "../utils/cartStorage";

const CheckoutPage = () => {
  const [cart] = useState(getCart());

  const [form, setForm] = useState({
    name: "",
    phone: "",
    telegram: "",
    city: "",
    delivery: "Самовывоз",
    comment: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();

    const order = {
      id: Date.now(),
      customer: form,
      items: cart,
      total,
      status: "Новый заказ",
      createdAt: new Date().toISOString(),
    };

    console.log("Новый заказ:", order);

    alert("Заказ оформлен! Я свяжусь с вами для подтверждения.");

    saveCart([]);
    window.location.href = "/";
  };

  return (
    <div className="checkout-page">
      <h1 className="section-title white-title">Оформление заказа</h1>

      {cart.length === 0 ? (
        <p className="checkout-empty">Корзина пуста</p>
      ) : (
        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleOrder}>
            <h2>Ваши данные</h2>

            <input
              name="name"
              placeholder="Имя"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Телефон"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              name="telegram"
              placeholder="Telegram / Instagram"
              value={form.telegram}
              onChange={handleChange}
            />

            <input
              name="city"
              placeholder="Город"
              value={form.city}
              onChange={handleChange}
              required
            />

            <select
              name="delivery"
              value={form.delivery}
              onChange={handleChange}
            >
              <option>Самовывоз</option>
              <option>Доставка по городу</option>
              <option>Почта / СДЭК</option>
            </select>

            <textarea
              name="comment"
              placeholder="Комментарий к заказу"
              value={form.comment}
              onChange={handleChange}
            />

            <button className="checkout-submit" type="submit">
              Подтвердить заказ
            </button>
          </form>

          <div className="checkout-summary">
            <h2>Ваш заказ</h2>

            {cart.map((item) => (
              <div className="checkout-item" key={item.cartId}>
                <img src={item.image} alt={item.title} />

                <div>
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
              </div>
            ))}

            <div className="checkout-total">
              Итого: {total}₽
            </div>

            <p className="checkout-note">
              Оплата будет подключена позже. Сейчас заказ сохраняется как заявка.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;