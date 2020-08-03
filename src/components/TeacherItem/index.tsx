import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/34621916?s=460&u=af7e55e6e5639ebc20c12647c64226946c6e3c8d&v=4"
          alt="Edicarla Silva"
        />
        <div>
          <strong>Edicarla Silva</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>Entusiasta dos números complexos</p>
      <p>Apaixonada por matemática</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
