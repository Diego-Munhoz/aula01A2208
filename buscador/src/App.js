import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css';

function App() {

  function aoClicar(){
    alert('O que você, você mesmo digitou: ' + input)
  }
  
  const [input, setInput] = useState('');

  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..." value={input} onChange={(e) => setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={aoClicar}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      <main className="main">
        <h2> Cep: </h2>
        <span>Rua: </span>
        <span>Bairro: </span>
        <span>Estado: </span>
      </main>
    </div>
  );
}

export default App;

