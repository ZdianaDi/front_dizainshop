import React, { useState } from "react";
import "../App.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Введите email и пароль");
      return;
    }

    if (isLogin) {
      alert("Вход выполнен");
    } else {
      alert("Регистрация выполнена");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">
          {isLogin ? "Вход" : "Регистрация"}
        </h1>

        <p className="auth-subtitle">
          {isLogin
            ? "Войдите в личный кабинет DiZain"
            : "Создайте аккаунт DiZain"}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Пароль"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" type="submit">
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>

        <button
          className="auth-switch"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Нет аккаунта? Зарегистрироваться"
            : "Уже есть аккаунт? Войти"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;