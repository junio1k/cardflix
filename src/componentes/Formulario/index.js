import { useState } from "react";
import Button from "../Button";
import Campotexto from "../Input";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoNovoCardCadastrado({
            nome,
            data,
            foto,
            lista
        })
        console.log("card salvo",nome , data, foto, lista)
    }
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [foto, setFoto] = useState('');
    const [lista, setLista] = useState('');
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Insira as informações sobre seu card favorito.</h2>
                <Campotexto 
                inputLabel="Nome"
                obrigatorio={true} 
                valor={nome} 
                aoAlterado={valor => setNome(valor)} 
                placeholder = "Nome" />
                <Campotexto 
                inputLabel="Data"
                obrigatorio={true} 
                valor={data} 
                aoAlterado={valor => setData(valor)}  
                placeholder = "Data de lançamento"/>
                <Campotexto 
                inputLabel="Foto"
                obrigatorio={true} 
                valor={foto} 
                aoAlterado={valor => 
                setFoto(valor)} 
                placeholder = "Foto" />
                <ListaSuspensa 
                obrigatorio={true} 
                categorias={props.time}
                valor={lista} 
                aoAlterado={valor => setLista(valor)}
                />
                
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Formulario;