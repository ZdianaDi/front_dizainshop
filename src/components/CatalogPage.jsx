import React, { useState } from "react";
import "../App.css";
import productsData from "../data/products";
import { Link, useSearchParams } from "react-router-dom";

const filters = [
  "Все товары",
  "Сумки",
  "Украшения",
  "Хит продаж",
  "Новинки",
  "Браслеты",
  "Броши",
  "Серьги",
  "На шею",
  "Кольца",
  "Сертификат",
  "НА ЗАКАЗ",
];

const CatalogPage = () => {

  const [products] = useState(productsData);

  const [search, setSearch] = useState("");

  const [searchParams] = useSearchParams();

  const startFilter =
    searchParams.get("filter") || "Все товары";

  const [activeFilter, setActiveFilter] =
    useState(startFilter);

  const filteredProducts = products.filter((item) => {

    if (
      search &&
      !item.title.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    if (activeFilter === "Все товары") return true;
    if (activeFilter === "Хит продаж") return item.isHit;
    if (activeFilter === "Новинки") return item.isNew;

    return item.category === activeFilter;
  });

  return (
    <div className="catalog-page">

      {/* ПОИСК */}
      <div className="catalog-search-wrapper">
        <input
          placeholder="Поиск по названию"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ФИЛЬТРЫ */}
      <div className="catalog-filters">
        {filters.map((item) => (
          <span
            key={item}
            onClick={() => setActiveFilter(item)}
            className={
              activeFilter === item
                ? "active-filter"
                : ""
            }
          >
            {item}
          </span>
        ))}
      </div>

      {/* СЕТКА */}
      <div className="catalog-grid">
        {filteredProducts.map((item) => (
          <Link
            to={`/product/${item.id}`}
            className="product-card"
            key={item.id}
          >

            <img
              src={item.images[0]}
              alt={item.title}
              className="product-image"
            />

            <div className="product-title">
              {item.title}
            </div>

            <div className="product-price">

              {item.oldPrice && (
                <span className="old-price">
                  {item.oldPrice}₽
                </span>
              )}

              <span className="new-price">
                {item.price}₽
              </span>

            </div>

          </Link>
        ))}
      </div>

    </div>
  );
};

export default CatalogPage;