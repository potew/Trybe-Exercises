import React from "react";
import { PainterContext } from '../contexts/PainterContext';

// This component is pretty simple. From context it takes the current selected color and that info it displays to the user.

function ColorPreview(props) {
  const {color} = React.useContext(PainterContext);

  return (
    <div className='colorPreview'>Selected color: {color}</div>
  );
}

export default ColorPreview;
