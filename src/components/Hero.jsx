import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "/idealhero.jpg",
    "/hero_1.png",
    "/hero_2.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const delays = [10000, 2000, 2000];

    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, delays[current]);

    return () => clearTimeout(timeout);
  }, [current, images.length]);

  return (
  <div className="hero" id="hero">

      <div className="hero-image">
        <img src={images[current]} alt="hero" />

        {current === 0 && (
          <>
            <div className="hero-text">
              <h1>
                <span className="hero-line">
                  Не выбирайте между стилем и эмоцией.
                </span>
                <br />
                Выбирайте своё.
              </h1>
            </div>

            <div className="hero-question">
              С чего начнём?
            </div>
          </>
        )}
      </div>

      <div className="categories">

        <Link
          to="/catalog?filter=Сумки"
          className="card"
        >
          <img src="/bag.png" alt="bags" />
          <button>Сумки</button>
        </Link>

        <Link
          to="/catalog?filter=Украшения"
          className="card"
        >
          <img src="/jewelry.png" alt="jewelry" />
          <button>Украшения</button>
        </Link>

      </div>

    </div>
  );
};

export default Hero;