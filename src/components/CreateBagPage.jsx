import React, { useState } from "react";
import "../App.css";
import { addToCart } from "../utils/cartStorage";

const bagOptions = {
  model: ["Мини", "WIDE", "Шоппер"],
  color: ["Бордовый", "Молочный", "Черный", "Розовый"],
  handle: ["Короткая", "Длинная", "Через плечо"],
  decor: ["Без декора", "Бант", "Бусины", "Подвеска"],
};

const CreateBagPage = () => {
  const [customBag, setCustomBag] = useState({
    model: "WIDE",
    color: "Бордовый",
    handle: "Короткая",
    decor: "Без декора",
  });

  const price = 6500;

  const chooseOption = (name, value) => {
    setCustomBag({
      ...customBag,
      [name]: value,
    });
  };

  const addCustomBagToCart = () => {
    const product = {
      id: Date.now(),
      title: `Сумка на заказ ${customBag.model}`,
      price,
      images: ["/products/custom-bag.jpg"],
    };

    addToCart(product, customBag);
    alert("Сумка добавлена в корзину");
  };

  return (
    <div className="create-bag-page">
      <h1 className="create-bag-title">Создай свою сумку</h1>

      <div className="create-bag-layout">
        <div className="bag-preview">
          <div className="bag-preview-card">
            <img src="/products/custom-bag.jpg" alt="custom bag" />
          </div>

          <p className="bag-preview-note">
            Предпросмотр условный. Итоговый дизайн согласуем перед изготовлением.
          </p>
        </div>

        <div className="bag-constructor">
          {Object.entries(bagOptions).map(([key, values]) => (
            <div className="bag-option" key={key}>
              <h3>
                {key === "model" && "Модель"}
                {key === "color" && "Цвет"}
                {key === "handle" && "Ручка"}
                {key === "decor" && "Декор"}
              </h3>

              <div className="bag-option-buttons">
                {values.map((value) => (
                  <button
                    key={value}
                    onClick={() => chooseOption(key, value)}
                    className={
                      customBag[key] === value
                        ? "bag-option-btn active-bag-option"
                        : "bag-option-btn"
                    }
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="bag-result">
            <h3>Ваш дизайн</h3>
            <p>Модель: {customBag.model}</p>
            <p>Цвет: {customBag.color}</p>
            <p>Ручка: {customBag.handle}</p>
            <p>Декор: {customBag.decor}</p>
            <strong>{price}₽</strong>
          </div>

          <button className="create-bag-btn" onClick={addCustomBagToCart}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBagPage;