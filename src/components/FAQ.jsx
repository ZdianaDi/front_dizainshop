import React, { useState } from "react";
import "../App.css";

const faqItems = [
  {
    question: "Как оформить заказ?",
    answer: "Выберите изделие в каталоге, добавьте его в корзину и оставьте контактные данные. Я свяжусь с вами для подтверждения заказа.",
  },
  {
    question: "Можно ли сделать украшение на заказ?",
    answer: "Да, можно. Вы можете описать идею, настроение или показать референсы, а я помогу создать индивидуальное изделие.",
  },
  {
    question: "Сколько времени занимает изготовление?",
    answer: "Срок зависит от сложности изделия. Обычно изготовление занимает от нескольких дней до двух недель.",
  },
  {
    question: "Есть ли доставка?",
    answer: "Да, доставка обсуждается индивидуально после оформления заказа.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="section-title white-title">Вопросы</h2>

      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
            >
              <span>{item.question}</span>
              <span className="faq-plus">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;