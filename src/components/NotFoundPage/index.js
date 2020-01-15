import React from 'react';
import {Helmet} from "react-helmet";

export default function NotFoundPage() {
  return (
    <>
        <Helmet>
            <title>Drinkelivery | Not Found</title>
        </Helmet>
        <h1>Não foi possivel encontrar essa rota :(.</h1>
    </>
  );
}