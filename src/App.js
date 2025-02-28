import{useState} from 'react';

function Square() {
    const [value, setValue] = useState(null);
    function handleClick() {
      setValue("x");
    }
  
  return <button className="square" onClick={handleClick}>{value}</button>;
}
export default function Board() {
  return (
  <>
  <div className="Board-row">
      <Square />
      <Square />
      <Square />
  </div>
  <div className="Board-row">
      <Square />
      <Square />
      <Square />
  </div>
  <div className="Board-row">
      <Square />
      <Square />
      <Square />

  </div>
  </>
);
}