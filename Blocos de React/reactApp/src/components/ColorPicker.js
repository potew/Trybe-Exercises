import { PainterContext } from '../contexts/PainterContext';
import React from "react";
import './ColorPicker.css';

// This component uses contexts colors and the setter to set the selected color. It just displays a list of all available colors to pick. Once we click on the color, the color is passed to setColor.

function ColorPicker(_) {
  const { colors, setColor } = React.useContext(PainterContext);

  const colorOption = color => {
    return (
      <div
        key={color}
        className='color'
        style={{ backgroundColor: color }}
        onClick={() => setColor(color)}
      />
    );
  };

  const colorOptions = () => {
    return colors.map(color => {
      return colorOption(color);
    });
  };

  return <div className="colorpicker">{colorOptions()}</div>;
}

export default ColorPicker;