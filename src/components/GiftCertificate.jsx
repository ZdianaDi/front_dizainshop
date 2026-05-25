import React from "react";
import "../App.css";

const GiftCertificate = () => {
  return (
    <section className="gift-section">
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

          <button className="gift-btn">
            Покупаю
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftCertificate;