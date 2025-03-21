import React, { useState } from "react";

function Boton() {
  const [result, setResultado] = useState(null);

  const holaMundo = <h1 className="centrar-titulo">hola Mundo</h1>;

  // Función que suma los valores de dos inputs y los limpia
  function sumar() {
    // Obtenemos los valores de los inputs
    const input1 = document.querySelector(".input1")?.value;
    const input2 = document.querySelector(".input2")?.value;
    // Si alguno está vacío, devolvemos null
    if (!input1 || !input2) {
      return null;
    }
    // Convertimos a enteros y sumamos
    const resultado = parseInt(input1, 10) + parseInt(input2, 10);
    // Limpiamos los inputs
    const elInput1 = document.querySelector(".input1");
    const elInput2 = document.querySelector(".input2");
    if (elInput1) elInput1.value = "";
    if (elInput2) elInput2.value = "";
    return resultado;
  }

  // Función que se ejecuta al pulsar el botón
  const botonPulsado = () => {
    const res = sumar();
    if (res !== null) {
      setResultado(res);
    }
  };

  return (
    <>
      <div>{holaMundo}</div>
      <div>
        <label form="input1">
          Ingrese un numero:
          <input type="number" className="input1" id="input1" />{" "}
        </label>
        <br></br>
        <label form="input2">
          Ingrese otro numero:
          <input type="number" className="input2" id="input2" />
        </label>
      </div>
      <div>
        <button onClick={botonPulsado}>Click me</button>
        {result !== null && <p>El resultado es: {result}</p>}
      </div>
    </>
  );
}

export default Boton;
