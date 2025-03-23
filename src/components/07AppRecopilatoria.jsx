import { func } from "prop-types";
import React, { useRef, useState, useEffect } from "react";

function AppRecopilatoria() {
  const frases = [
    "En un lugar de la Mancha",
    "de cuyo nombre no quiero acordarme",
    "no hay mucho tiempo que habia un hildago",
    "de los de lanza en astillero, adraga, antigua, rocín flaco y galgo corredor",
  ];
  const [frase, setFrase] = useState(frases[0]);

  useEffect(() => {
    const colorAleatorio = `rgb(
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;

    document.body.style.backgroundColor = colorAleatorio;

    const index = frases.indexOf(frase);
    console.log("Estas leyendo el parrafo " + (index + 1));
  }, [frase]);

  function Next() {
    const index = frases.indexOf(frase);
    if (index !== -1 && index < frases.length - 1) {
      setFrase(frases[index + 1]);
    }
  }

  function Back() {
    const index = frases.indexOf(frase);
    if (index > 0) {
      setFrase(frases[index - 1]);
    }
  }

  return (
    <div>
      <p>{frase}</p>
      <div>
        <button onClick={Next}>Siguiente</button>
        <button onClick={Back}>Atras</button>
      </div>
    </div>
  );
}

export default AppRecopilatoria;
