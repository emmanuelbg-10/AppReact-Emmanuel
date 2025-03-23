import React, { useState } from "react";

function Contador() {
  const [result, setResultado] = useState(0);

  function Restar() {
    if (result > 0) {
      setResultado(result - 1);
    }
  }

  function Sumar() {
    setResultado(result + 1);
  }

  return (
    <>
      <div>
        <button onClick={Restar}>-</button>
        <input
          type="text"
          value={result}
          size="2"
          style={{ textAlign: "center" }}
        ></input>
        <button onClick={Sumar}>+</button>
      </div>
    </>
  );
}

export default Contador;
