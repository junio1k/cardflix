import { useState } from "react";
import "./campotexto.css";

const Campotexto = (props) => {
    const placeholder = "...";
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value);
        console.log(props.valor)
    }
    return(
        <div className="campotexto">
            <label>{props.inputLabel}</label>
            <input 
            onChange={aoDigitar} 
            value={props.valor} 
            placeholder={props.placeholder + placeholder} 
            required={props.obrigatorio}>
            </input>
        </div>
    );
}

export default Campotexto;