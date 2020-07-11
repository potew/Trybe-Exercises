import { PainterContext } from "../contexts/PainterContext";
import React, { useState } from "react";
import "./PaintGrid.css";

// This one may be a little long. From context we take the colors and the current color. Then we need to draw a grid, the grid is a 2D array.. This grid will be of size 10x10. For storing what color is on what point on the grid we use useState.

// When we do actually draw the table representing the grid. We must handle the click and mousemove events of the cell. Nobody wants to click 100 times, you want to just drag across the grid. But when we drag, the left mouse button must be pressed, otherwise it will just rewrite the cell all the time.

// Also to save us from unnecessary re-draws, we have to check is the color of a given cell is already that color. If it is, then there is no need to update the grid, as it will make no difference.

function PaintGrid(_) {
  const { colors, color } = React.useContext(PainterContext);

  const rows = 10;
  const cols = 10;

  const initGrid = [];
  for (var i = 0; i < rows; i++) {
    initGrid[i] = [];
    for (var j = 0; j < cols; j++) {
      initGrid[i][j] = colors[0];
    }
  }

  const [grid, setGrid] = useState(initGrid);

  const updateGrid = (i, j) => {
    if (grid[i][j] === color) {
      return;
    }
    grid[i][j] = color;
    setGrid([...grid]);
  };

  const updateGridWithMouse = (e, i, j) => {
    if (e.buttons === 1) {
      updateGrid(i, j);
    }
  };

  const resetBtn = () => {
    return (
      <div class="column">
        <button onClick={() => setGrid(initGrid)}>Reset</button>
      </div>
    );
  };

  const drawTableCell = (r_i, c_i) => {
    return (
      <td
        key={c_i}
        className="painterBlock"
        onClick={() => updateGrid(r_i, c_i)}
        onMouseMove={e => updateGridWithMouse(e, r_i, c_i)}
        style={{
          backgroundColor: grid[r_i][c_i]
        }}
      />
    );
  };

  const drawTableRows = (row, r_i) => {
    return (
      <tr key={r_i}>{row.map((col, c_i) => { return drawTableCell(r_i, c_i)})}</tr>
    );
  };

  const drawGrid = () => {
    return (
      <div className="column">
        <table>
          <tbody>
          {grid.map((row, r_i) => { return drawTableRows(row, r_i)})}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <React.Fragment>
      {drawGrid()}
      {resetBtn()}
    </React.Fragment>
  );
}

export default PaintGrid;