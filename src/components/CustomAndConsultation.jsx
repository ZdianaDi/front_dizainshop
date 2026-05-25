import React from "react";
import "../App.css";

const CustomAndConsultation = () => {
  return (
    <div>

      <div className="custom-section" id="custom">

  <div className="custom-left">

   <h2 className="section-title white-title">На заказ</h2>

    <p className="custom-text">
      Создаём украшения и сумки с нуля — специально для вас.
      Без шаблонов и повторов.
      Вы делитесь идеей, настроением или историей,
      а мы превращаем это в уникальный дизайн
      и берём на себя весь процесс:
      от эскиза до готового изделия.
    </p>

    <button className="custom-btn">
      Заказываю!
    </button>

  </div>

  <div className="custom-right">
    <img
      src="/castom.jpg"
      alt="custom"
      className="custom-image"
    />
  </div>

</div>

      {/* КОНСУЛЬТАЦИЯ */}
      <div className="consult-section" id="consult">

        <h2 className="section-title dark">
          Консультация стилиста <br />
          в подарок!
        </h2>

        <p className="consult-text">
          Стилист поможет подобрать украшение,
          которое действительно вам подходит.
          <br />
          С учётом внешности, стиля, образа жизни и повода,
          чтобы украшение не просто дополняло,
          а работало на вас и усиливало образ.
        </p>

        <button className="consult-btn">
          Мне надо!
        </button>

      </div>

    </div>
  );
};

export default CustomAndConsultation;