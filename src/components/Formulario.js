import React from "react";
import { useSelect } from "../hooks/useSelect";
import styles from "./Formulario.module.css";
import PropTypes from "prop-types";

export const Formulario = ({ setCategoria }) => {
  const opciones = [
    { values: "general", label: "General" },
    { values: "business", label: "Negocios" },
    { values: "entertainment", label: "Entretenimiento" },
    { values: "health", label: "Salud" },
    { values: "science", label: "Ciencia" },
    { values: "technology", label: "Tecnologia" },
  ];

  const [categoria, SelectNoticias] = useSelect("general", opciones);

  const buscarNoticias = (e) => {
    e.preventDefault();

    setCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
          <SelectNoticias />
          <div className="input-field col s12 ">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  setCategoria: PropTypes.func.isRequired,
};
