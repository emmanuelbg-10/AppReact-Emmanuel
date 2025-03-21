import React, { useRef, useState, useEffect } from "react";
import monedasJson from "../assets/monedas.json"; // Importamos un archivo JSON con nombres de monedas

function ConversorDeEuros() {
  const dinero = useRef(null); // Referencia al input donde el usuario ingresa la cantidad en euros
  const [result, setResultado] = useState(null); // Estado para almacenar el resultado de la conversión
  const [valorCambio, setValorCambio] = useState({}); // Estado para almacenar las tasas de cambio
  const [monedaDestino, setMonedaDestino] = useState("EUR"); // Estado para almacenar la moneda seleccionada

  // useEffect para obtener las tasas de cambio desde la API al cargar el componente
  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/8fce9b45f25c02f479d21c95/latest/EUR"
    )
      .then((response) => response.json()) // Convertimos la respuesta a JSON
      .then((dataCambio) => {
        setValorCambio(dataCambio.conversion_rates); // Guardamos las tasas de cambio en el estado
      })
      .catch((error) => {
        console.error("Error al acceder a la API: ", error); // Mostramos un error en caso de fallo
      });
  }, []);

  // Función para realizar la conversión de euros a la moneda seleccionada
  function convertir() {
    const dineroIngresado = parseFloat(dinero.current.value); // Obtenemos el valor ingresado por el usuario
    if (dineroIngresado && valorCambio[monedaDestino]) {
      // Verificamos que el valor ingresado y la tasa de cambio existan
      const result = (dineroIngresado * valorCambio[monedaDestino]).toFixed(2); // Realizamos la conversión y redondeamos a 2 decimales
      // Guardamos el resultado de la conversión junto con el nombre de la moneda seleccionada
      const nombreMoneda = monedasJson.monedas[monedaDestino]; // Obtenemos el nombre de la moneda o su código si no está en el JSON
      setResultado(`${result} ${nombreMoneda}`); // Actualizamos el estado con el resultado formateado
    }
  }

  return (
    <div>
      <h1>Conversor de Euros</h1>

      {/* Selector para elegir la moneda de destino */}
      <p>
        <label>Selecciona moneda: </label>
        <select
          value={monedaDestino}
          onChange={(e) => setMonedaDestino(e.target.value)} // Actualizamos la moneda seleccionada
        >
          {Object.keys(valorCambio)
            .sort(
              (a, b) =>
                monedasJson.monedas[a].localeCompare(monedasJson.monedas[b]) // Ordenamos las monedas alfabéticamente
            )
            .map((moneda) => (
              <option key={moneda} value={moneda}>
                {monedasJson.monedas[moneda]}
                {/* Mostramos el nombre de la moneda */}
              </option>
            ))}
        </select>
      </p>

      {/* Input para ingresar la cantidad en euros */}
      <p>
        <input
          ref={dinero}
          type="number"
          step={0.1}
          placeholder="Cantidad en Euros"
        />
      </p>

      {/* Botón para realizar la conversión */}
      <button onClick={convertir}>Convertir</button>

      {/* Mostramos el resultado de la conversión si existe */}
      {result && <h3>El resultado es: {result}</h3>}
      {console.log(valorCambio)}
    </div>
  );
}

export default ConversorDeEuros;
