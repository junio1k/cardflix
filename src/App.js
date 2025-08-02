
import { useEffect , useState} from 'react';
import './App.css';
import Card from './componentes/Card';
import Formulario from './componentes/Formulario';
import Navegador from './componentes/Menu';


  const cards = [
    {nome: "Filme", corPrimaria:"#506266", corSecundaria:"#6d858aff" },
    {nome: "Série", corPrimaria:"#CA2508", corSecundaria:"#bd4631ff"},
    {nome: "Anime",corPrimaria:"#140000", corSecundaria:"#494343ff"}
  ];
 
  function App() {
    const [colaboradores, setColaboradores] = useState([]);
    const cardCadastrado = (colaborador)=> {
      console.log(colaborador)
      setColaboradores([...colaboradores, colaborador]);
    }
    const deleteCard = (nome) => {
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
    <div className='app-cardflix'>
      <Navegador 
      valor={pesquisa} 
      aoPesquisar={search => searchCard(search)}
      />
      <div className='app-form'>
        <Formulario time={cards.map( nome => nome.nome)} aoNovoCardCadastrado={card => cardCadastrado(card)}/>
      </div>
      {cards.map( card =>  <Card 
      key={card.nome}
      time={card.nome}
      corPrimaria={card.corPrimaria}
      corSecundaria={card.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.lista === card.nome)}
      onDelete = {deleteCard}
      />)}
    </div>
  );
}

export default App;
