import { useState } from "react";

const Callback = (props) => {
  const [activeColor, setActiveColor] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    props.onAddColor(value);
  };

  return (
    <section>
      <input
        type="text"
        id="input"
        aria-label="input"
        value={activeColor}
        onChange={handleChange}
      />
    </section>
  );
};

export default Callback;
