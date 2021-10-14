import React,{useState} from 'react';
import './App.css';


 export default function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Você clicou {total} vezes!</p>
      <button onClick={() => setTotal(total + 1)}>Incremento</button>
      <button onClick={() => setTotal(total - 1)}>Decremento</button>
    </div>
  );
}




