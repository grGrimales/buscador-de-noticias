import React, { Fragment, useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoNoticias } from "./components/ListadoNoticias";

function App() {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultaApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=04b21d3a4ac3409584ab17a49085c22c`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    };
    consultaApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
