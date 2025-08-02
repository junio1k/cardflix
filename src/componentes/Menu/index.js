/*import "./menu.css";
import {useState} from 'react'
import axios from "axios";

const Navegador = ({valor, aoPesquisar}) => {
    const url = 'http://localhost:3001/Cards';
    const [resultado, setResultado] = useState([]);
    const searchServer = () => {
      axios.get(url)
      .then(resposta => {
        //Filtrando o resultado do card
        const filtrados = resposta.data.filter(card => card.nome.toLowerCase().includes(valor.toLowerCase())
        );
        setResultado(filtrados);
      })
      .catch(error => console.error(error))  
    }

    const aoPesquisado = (evento) => {
        aoPesquisar(evento.target.value);
    }  
    return(
        <nav className="nav">
            
            <div className="title-nav">
                <h1>CardFlix</h1>
            </div>
            <ul className="nav-list">
                <li><a>Filmes</a></li>
                <li><a>Séries</a></li>
                <li><a>Animes</a></li>
            </ul>
            <button onClick={searchServer}><img className="lupa" src="./lupa.png"></img></button>
            <div>
            <input value={valor} onChange={aoPesquisado}></input>
              {resultado.length > 0 ? (
                resultado.map(card => <div key={card.id}>
                  <p>{card.genre}</p>
                  <img src={card.img} alt={`${card.nome} imagem`}></img>
                  <p>{card.nome}</p>
                </div>)
              ):(
                <p>Nenhuma informação encontrada.</p>
              )}
            </div>
        </nav>
    );
};

export default Navegador;*/

import "./menu.css";
import { useState } from 'react';
import axios from "axios";

const Navegador = ({ valor, aoPesquisar }) => {
  const url = 'http://localhost:3001/Cards';
  const [resultados, setResultados] = useState([]);

  const searchServer = () => {
    axios.get(url)
      .then(resposta => {
        console.log("Dados recebidos de resposta.data", resposta.data)
        const textBusca = valor.trim().toLowerCase();
        // Filtra os resultados com base no input do usuário
        const filtrados = resposta.data.filter(card =>
           card.nome.toLowerCase().includes(textBusca)
          );
        console.log("Filtrados", filtrados);
        setResultados(filtrados);
      })
      .catch(error => console.error(error));
  };

  const aoPesquisado = (evento) => {
    aoPesquisar(evento.target.value);
  };

  return (
    <nav className="nav">
      <div className="title-nav">
        <h1>CardFlix</h1>
      </div>

      <ul className="nav-list">
        <li><a>Filmes</a></li>
        <li><a>Séries</a></li>
        <li><a>Animes</a></li>
      </ul>

      <div className="button-input_nav">
        <input className="input-nav" value={valor} onChange={aoPesquisado} placeholder="Digite o nome do card..." />
        <button clasName="button-nav" onClick={searchServer}>
          Buscar
        </button>
      </div>

      {/* Exibe os resultados abaixo */}
      <div className="nav-results">
        {resultados.length > 0 ? (
          resultados.map(card => (
            <div key={card.id}>
              <p className="results-name">{card.nome}</p>
              <img src={card.img} alt={card.nome} width={150} />
              <p className="results-genre">{card.genre}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
      <hr></hr>
    </nav>
    
  );
};

export default Navegador;