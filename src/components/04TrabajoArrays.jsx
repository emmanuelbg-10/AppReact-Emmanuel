import React, { useState, useRef } from "react";

function TrabajoArrays() {
  const array = [
    { id: 1, value: 13 },
    { id: 2, value: 4 },
    { id: 3, value: 5 },
    { id: 4, value: 9 },
  ];

  return (
    <div>
      <ul>
        {array.map((num) => (
          <li key={num.id}>{num.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrabajoArrays;
