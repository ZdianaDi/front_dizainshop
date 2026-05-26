import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const GiftCertificate = () => {
  return (
    <section
  className="gift-certificate"
  id="gift-certificate"
>
      <h2 className="section-title dark">Подарочный сертификат</h2>

      <div className="gift-wrapper">
        <div className="gift-image">
          <img src="/gift.png" alt="gift certificate" />
        </div>

        <div className="gift-content">
          <p className="gift-text">
            Подарите близкому возможность выбрать украшение,
            которое действительно откликнется.
            Сертификат DiZain — это красивый подарок
            со смыслом, вниманием и эстетикой.
          </p>

         <Link to="/product/gift-certificate">
  <button className="gift-btn">
    Покупаю
  </button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default GiftCertificate;