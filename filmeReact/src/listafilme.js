import React from "react";
import Film from "./film";

const ListaFilme = (props) => {
    const {filme, sterge, editeaza} = props;
    const lista = filme.map((item) => (
         <Film 
         src= {item.src} 
         titlu={item.titlu} 
         an={item.an} 
         durata={item.durata} 
         descriere={item.descriere} 
         rating={item.rating} 
         id={item.id} 
         key={item.id}
         sterge={sterge}
         editeaza={editeaza} 
         />));
         
const stilh = {
        h2: {textAlign: "center", color: "#303436", fontStyle:"italic"}
      }

    return (
      <>
      <h2 className="mt-4" style={stilh.h2}>
        Filme animație
      </h2>
      <div>{lista}</div>
      </>
    )
}

export default ListaFilme;