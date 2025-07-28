
import { useEffect , useState} from 'react';
import './App.css';
import Card from './componentes/Card';
import Formulario from './componentes/Formulario';
import Navegador from './componentes/Menu';
import axios from 'axios'

  const cards = [
    {nome: "Filme"},
    {nome: "Série"},
    {nome: "Anime"}
  ];
 
  function App() {
    const [colaboradores, setColaboradores] = useState([]);
    const cardCadastrado = (colaborador)=> {
      console.log(colaborador)
      setColaboradores([...colaboradores, colaborador]);
    }
    const deleteCard = (nome) => {
      alert('Fui clicado')
      setColaboradores(prevCard => prevCard.filter(cardCheck => cardCheck.nome !== nome))
    }
    
    const [pesquisa, setPesquisa] = useState(''); 
    const searchCard = (pesquisado) => {
      setPesquisa(pesquisado);
      console.log(pesquisa)
    }
    /*const url = 'http://localhost:3001/Cards';
    const [post, setPost] = useState([]);
    useEffect(() => {
      axios.get(url)
      .then(resposta => setPost(resposta.data))
      .catch(error => console.error(error))
    }, [])*/
  return(
    <div>
      <Navegador 
      valor={pesquisa} 
      aoPesquisar={search => searchCard(search)}
      />
      <Formulario  time={cards.map( nome => nome.nome)} aoNovoCardCadastrado={card => cardCadastrado(card)}/>
      {cards.map( card =>  <Card 
      key={card.nome}
      time={card.nome}
      colaboradores={colaboradores.filter(colaborador => colaborador.lista === card.nome)}
      onDelete = {deleteCard}
      />)}
    </div>
  );
}

export default App;
