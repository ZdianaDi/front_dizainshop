import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { addToCart } from "../utils/cartStorage";
import "../App.css";

const ProductPage = () => {
  const { id } = useParams();

  const product = products.find((item) => String(item.id) === id);

  const [currentImage, setCurrentImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [certificateAmount, setCertificateAmount] = useState(2000);
  const [comment, setComment] = useState("");

  if (!product) {
    return (
      <div className="product-page">
        <h2>Товар не найден</h2>
      </div>
    );
  }

  const chooseOption = (optionName, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionName]: value,
    });
  };

  const handleAddToCart = () => {
    if (product.type === "certificate" && certificateAmount < 2000) {
      alert("Минимальная сумма сертификата — 2000₽");
      return;
    }

    const productForCart = {
      ...product,
      price:
        product.type === "certificate"
          ? certificateAmount
          : product.price,
    };

    addToCart(productForCart, {
      ...selectedOptions,
      comment,
    });

    alert("Товар добавлен в корзину");
  };

  return (
    <div className="product-page">

      <div className="product-gallery">

        <img
          src={product.images?.[currentImage]}
          alt={product.title}
          className="product-main-image"
        />

        <div className="product-dots">
          {product.images &&
            product.images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentImage(index)}
                className={
                  index === currentImage
                    ? "product-dot product-dot-active"
                    : "product-dot"
                }
              ></span>
            ))}
        </div>

      </div>

      <div className="product-info">

        <h1 className="product-page-title">
          {product.title}
        </h1>

        <div className="product-page-price">

          {product.oldPrice && (
            <span className="product-old-price">
              {product.oldPrice}₽
            </span>
          )}

          <span className="product-new-price">
            {product.type === "certificate"
              ? `${certificateAmount}₽`
              : `${product.price}₽`}
          </span>

        </div>

        {product.type === "certificate" && (
          <div className="product-option">

            <h3>Сумма сертификата</h3>

            <input
              type="number"
              min="2000"
              step="500"
              value={certificateAmount}
              onChange={(e) =>
                setCertificateAmount(Number(e.target.value))
              }
              className="certificate-input"
            />

            <p className="certificate-hint">
              Минимальная сумма — 2000₽
            </p>

          </div>
        )}

        {product.type === "stylist" && (
          <div className="stylist-note">
            Депозит 1000₽ полностью войдёт
            в стоимость будущего заказа.
          </div>
        )}

        {product.options &&
          product.options.map((option) => (
            <div className="product-option" key={option.name}>

              <h3>{option.name}</h3>

              <div className="product-option-values">

                {option.values.map((value) => (
                  <button
                    key={value}
                    onClick={() =>
                      chooseOption(option.name, value)
                    }
                    className={
                      selectedOptions[option.name] === value
                        ? "option-btn option-btn-active"
                        : "option-btn"
                    }
                  >
                    {value}
                  </button>
                ))}

              </div>
            </div>
          ))}

        <div className="product-option">

          <h3>Комментарий к заказу</h3>

          <textarea
            className="product-comment"
            placeholder="Например: цвет, размер, повод или пожелания"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

        </div>

        <button
          className="add-cart-btn"
          onClick={handleAddToCart}
        >
          Добавить в корзину
        </button>

      </div>

    </div>
  );
};

export default ProductPage;