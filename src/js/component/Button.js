import React from 'react'

const Button = ({item, colorSeleccionado, setColorSeleccionado, styles}) => {

    const styleOnHover = (color) => {
        return color === colorSeleccionado ? `0 0 30px ${color}` : '';

      };
    
      const handleMouseEnter = (color) => {
        setColorSeleccionado(color);
      };
    
      const handleMouseLeave = () => {
        setColorSeleccionado('');
      };

  return (
    <button
    style={{ backgroundColor: item, boxShadow: styleOnHover(item), ...styles }}
    onMouseEnter={() => handleMouseEnter(item)}
    onMouseLeave={handleMouseLeave}
  />
  )
}

export default Button