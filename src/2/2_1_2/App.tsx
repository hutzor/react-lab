import { useState } from "react";

function ColorSwitch({
  onChangeColor
}: {
  onChangeColor: () => void;
}) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();   
    onChangeColor();      
  }

  return (
    <button onClick={handleClick}>
      Change color
    </button>
  );
}

export default function App() {
  const [clicks, setClicks] = useState(0);

  
  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    const rand = () => 150 + Math.round(Math.random() * 100);
    return `rgb(${rand()}, ${rand()}, ${rand()})`;
  }

  function handleChangeColor() {
    document.body.style.backgroundColor = getRandomLightColor();
  }

  return (
    <div style={{ width: "100%", height: "100%" }} onClick={handleClickOutside}>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}
