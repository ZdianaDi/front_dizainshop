// import React, { useState, useEffect } from "react";
// import "../App.css";

// const reviews = [
// {
// name:"Алина",
// text:"Украшение оказалось еще красивее, чем на фото. Очень тонкая работа и невероятная упаковка.",
// },

// {
// name:"София",
// text:"Заказывала подарок подруге — восторг полный. Очень душевный бренд и качество супер.",
// },

// {
// name:"Мария",
// text:"Люблю вещи с характером, и DiZain именно про это. Уже хочу второй заказ.",
// },

// {
// name:"Полина",
// text:"Консультация помогла выбрать идеальное украшение. Всё выглядит очень дорого.",
// }
// ];

// const Reviews = () => {

// const [current,setCurrent] = useState(0);

// useEffect(()=>{
// const interval = setInterval(()=>{
// setCurrent((prev)=>(prev + 1) % reviews.length);
// },4000);

// return ()=> clearInterval(interval);

// },[]);

// return (
// <section className="reviews-section">

// <h2 className="reviews-title">
// Отзывы
// </h2>

// <div className="reviews-box">

// <div className="review-card">

// <p className="review-text">
// {reviews[current].text}
// </p>

// <div className="review-name">
// — {reviews[current].name}
// </div>

// <div className="review-dots">
// {reviews.map((_,index)=>(
// <span
// key={index}
// className={index === current ? "dot active-dot" : "dot"}
// onClick={()=>setCurrent(index)}
// ></span>
// ))}
// </div>

// </div>

// </div>

// </section>
// );

// };

// export default Reviews;
import React, { useState, useEffect } from "react";
import "../App.css";

const reviews = [
  {
    photo: "/wow.jpg",  // путь к фото в папке public
  },
  {
    photo: "/wow2.jpg", 
  },
  {
    photo: "/wow3.jpg", 
  }
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reviews-section">
     <h2 className="section-title white-title">Отзывы</h2>

      <div className="reviews-box">
        <div className="review-card">
          <img 
            src={reviews[current].photo} 
            alt={`Отзыв ${reviews[current].name}`}
            className="review-screenshot"
          />

          <div className="review-name">
            — {reviews[current].name} —
          </div>

          <div className="review-dots">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={index === current ? "dot active-dot" : "dot"}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;