import React from "react";
import "../App.css";

const Contacts = () => {
  return (
    <div className="contacts-page" id="contacts">

      <h1 className="contacts-title">
        Контакты
      </h1>

      {/* ОСНОВАТЕЛЬ */}

      <div className="contacts-block">

        <h2>
          Основатель бренда
        </h2>

        <p>
          Диана Зайнуллина
        </p>

        <p>
          Телефон: +7 (915) 333-97-87
        </p>

        <div className="contacts-links">

          <a
            href="https://t.me/diana_zainullina"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            Telegram
          </a>

          <a
            href="
https://vk.com/id567877525
"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            VK
          </a>

        </div>

      </div>

      {/* КОНТАКТЫ БРЕНДА */}

      <div className="contacts-block">

        <h2>
          Контакты бренда
        </h2>

        <p>
          Почта: dizain.brand@mail.ru
        </p>

        <p>
          Адрес: г. Москва
        </p>

        <div className="contacts-links">

          <a
            href="https://t.me/dizain_brand"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            Telegram бренда
          </a>

        </div>

      </div>

    </div>
  );
};

export default Contacts;