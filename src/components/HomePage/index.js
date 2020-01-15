import React from 'react';
import {Helmet} from "react-helmet";
import Header from '../../containers/Header'
import logo from '../../assets/logo-drinkelivery.svg'
import { Link } from 'react-router-dom';
import './styles.css'

export default function HomePage() {
  return (
    <>  
        <Header/>
        <Helmet>
            <title>Drinkelivery | Home</title>
        </Helmet>
        <div>
            <img src={logo} className="imgLogo"></img>
            <Link className="btnPecaAgora" to="/login">Peça agora</Link>
        </div>
    </>
  );
}