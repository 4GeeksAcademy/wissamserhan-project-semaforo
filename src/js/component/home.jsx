import React, { useState } from 'react';
import Button from './Button';

const TrafficLight = () => {
  const [colorSeleccionado, setColorSeleccionado] = useState('');

  const colores = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
  };

  const estilos = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: 'none',
    margin: '10px',
  };

  return (
    <div className="semaforo vertical" style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center"
    }}>
      {Object.keys(colores).map((item) => 
        <Button item={item} styles={estilos} colorSeleccionado={colorSeleccionado} setColorSeleccionado={setColorSeleccionado} />
      )}
    </div>
  );
};

export default TrafficLight;