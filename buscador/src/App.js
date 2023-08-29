import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css';
import api from './service/api';

function App() {

  const [input, setInput] = useState('');

  async function aoClicar(){

    if (input === ''){
      alert("Preencha um CEP!")
      return;
    } try {
      const response = await api.get(`${input}/json`);
      console.log(response);
    } catch {
      alert("Digite um CEP valído, Cabaço <3")
    }
  }

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

