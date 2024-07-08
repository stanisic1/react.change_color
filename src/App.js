import { useState } from "react";
import "./App.css";
import Callback from "./components/Callback";

function App() {
  const [color, setColor] = useState(null);

  const getColor = (color) => {
    setColor(color);
  };

  return (
    <div className="App">
      <div className="container">
        <div
          className="color_container"
          style={{ background: `${color}` }}
        ></div>
        <Callback onAddColor={getColor} />
      </div>
    </div>
  );
}

export default App;
