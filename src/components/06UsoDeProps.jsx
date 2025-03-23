import React from "react";
import PropTypes from "prop-types";

function UsoDeProps() {
  const usuario = {
    nombre: "Emmanuel",
    apellido: "Barral",
    edad: 20,
    genero: "masculino",
  };

  return (
    <div>
      <Saludo usuario={usuario} />
    </div>
  );
}

function Saludo(props) {
  const { nombre, apellido, edad, genero } = props.usuario;

  return (
    <div>
      {nombre ? (
        <h1>
          Hola {nombre} {apellido}
        </h1>
      ) : (
        <h3>Falta el nombre del usuario</h3>
      )}

      <p>
        Tienes <strong>{edad}</strong> años y tu genero es
        <strong>{genero}</strong>
      </p>
    </div>
  );
}

Saludo.propTypes = {
  usuario: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
  }).isRequired,
};

export default UsoDeProps;
