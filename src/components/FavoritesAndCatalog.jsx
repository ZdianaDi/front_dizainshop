import React from "react";
import "../App.css";

const FavoritesAndCatalog = () => {
  return (
    <div className="fav-section">

      {/* TITLE */}
     <h2 className="section-title white-title">Каталог</h2>


      {/* CATALOG CARD */}
      <div className="catalog-card" id="catalog">

        <div className="catalog-img">
          <img src="/Framm.jpg" alt="catalog" />
        </div>

        <a href="/catalog" className="catalog-btn">
          Перейти
        </a>

      </div>

    </div>
  );
};

export default FavoritesAndCatalog;