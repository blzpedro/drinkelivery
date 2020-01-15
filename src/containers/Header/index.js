import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

export default function Header(){
    return (
        <div className="header">
            <Link to="/cadastro">Cadastre-se</Link>
            <Link className="btnEntrar" to="/login">Entrar</Link>
        </div>
    )
}