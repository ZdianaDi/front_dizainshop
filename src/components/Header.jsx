import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="desktop-header">
        <div className="nav-left">
          <a href="#brand" className="nav-link">О бренде</a>

          <Link to="/catalog" className="nav-link">Каталог</Link>

          <a href="#gift-certificate" className="nav-link">
            Подарочный сертификат
          </a>
        </div>

        <a href="#hero" className="logo-link">
          <div className="logo">
            ДиЗайн
            <div className="sublogo">для самых-самых</div>
          </div>
        </a>

        <div className="nav-right">
          <a href="#custom" className="nav-link">На заказ</a>
          <a href="#reviews" className="nav-link">Отзывы</a>
          <a href="#contacts" className="nav-link">Контакты</a>
          <a href="#faq" className="nav-link">Вопросы</a>

          <Link to="/cart">
            <FaShoppingBag className="cart-icon" />
          </Link>
        </div>
      </div>

      <div className="mobile-header">
        <div className="mobile-nav-top">
          <a href="#brand" className="mobile-nav-link">О бренде</a>
          <Link to="/catalog" className="mobile-nav-link">Каталог</Link>
          <a href="#gift-certificate" className="mobile-nav-link">Сертификат</a>
          <a href="#custom" className="mobile-nav-link">На заказ</a>
        </div>

        <div className="mobile-main-row">
          <button className="burger-btn" onClick={() => setMenuOpen(true)}>
            <HiMenu />
          </button>

          <a href="#hero" className="logo-link">
            <div className="mobile-logo">
              DiZain
              <span>BY DIANA ZAINULLINA</span>
            </div>
          </a>

          <Link to="/cart">
            <FaShoppingBag className="mobile-cart" />
          </Link>
        </div>
      </div>

      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
        <button className="close-menu" onClick={closeMenu}>
          <IoClose />
        </button>

        <a href="#hero" onClick={closeMenu}>Главная</a>
        <a href="#brand" onClick={closeMenu}>О бренде</a>
        <Link to="/catalog" onClick={closeMenu}>Каталог</Link>
        <a href="#gift-certificate" onClick={closeMenu}>Подарочный сертификат</a>
        <a href="#custom" onClick={closeMenu}>На заказ</a>
        <a href="#reviews" onClick={closeMenu}>Отзывы</a>
        <a href="#contacts" onClick={closeMenu}>Контакты</a>
        <a href="#faq" onClick={closeMenu}>Вопросы</a>
        <Link to="/cart" onClick={closeMenu}>Корзина</Link>
        
      </div>
    </header>
  );
};

export default Header;