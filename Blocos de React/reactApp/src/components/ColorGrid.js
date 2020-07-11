import React from "react";
import '../App.css';
import { colors, PainterContext } from '../contexts/PainterContext';
import ColorPicker from "./ColorPicker";
import ColorPreview from "./ColorPreview";
import PaintGrid from "./PaintGrid";

// This is our main component. It contains all the components we will use. Think of it as a layout component. In it we use the first of React Hooks — useState. This will give us a variable color and a setter to change it.

// Now when we defined the Context.Provider we can set what values it will have. In our case we want that the context contains a list of colors, the current selected color and the setter to change it.

function ColorGrid() {
  // Estado para color e setColor:
  const [ color, setColor ] = React.useState(colors[0]);

  return (
    <div className="App container">
      <PainterContext.Provider value={{colors, color, setColor}}>
        <ColorPicker />
        <ColorPreview />
        <br />
        <PaintGrid />
      </PainterContext.Provider>
    </div>
  )
}

export default ColorGrid;