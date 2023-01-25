
import React, { useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ListaFilme from "./listafilme";
import Formular from "./formular";
import NotFound from "./notfound";
import Informatii from "./informatii";
import {Route, Link, Switch, useHistory } from "react-router-dom";

export default function App() {
  const [lista, setLista] = useState([]);
  const [modif, setModif] = useState(false);
  const [edit, setEdit] = useState({}); 


  useEffect(() => {
    fetch("http://localhost/recomandariPHP/recomandari.php")
      .then((rezultat) => rezultat.text())
      .then((listafilme) => setLista(JSON.parse(listafilme)));
  }, [modif]);

  const stergeFilm = (id) => {
    const dateScript = JSON.stringify({ id: parseInt(id, 10) });
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };

    fetch("http://localhost/recomandariPHP/recomandari.php", config).then(() => {
      setModif(!modif); 
    });
  };

  const adaugaFilm = (elm) => {
    const dateScript = JSON.stringify(elm);
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };
    fetch("http://localhost/recomandariPHP/recomandari.php", config).then(() => {
      setModif(!modif);
    });
};

const history = useHistory();
  const editeazaFilm = (id) => {
    var obiect = lista.find((item) => {
      return parseInt(item.id, 10) === parseInt(id, 10);
    });
    if (obiect) {
      setEdit(obiect);
      history.push("/formular"); 
    }
  };

  
  const editFilm = (elm) => {
    const dateScript = JSON.stringify(elm);
    const config = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };

    
    fetch("http://localhost/recomandariPHP/recomandari.php", config).then(() => {
      setModif(!modif); 
    });

    
    setEdit({});
    history.push("/"); 
  };

  const stil = {
    container: {maxWidth: "750px"},
  };
  
  const stilmt = {
    fontWeight:"bold",
    color:"#C0C0C0"
  
  };

  return (
    <Container style={stil.container}>
       <Navbar bg="secondary" variant="dark" expand="lg">
       <Navbar.Brand>
          <Nav.Link as ={Link} to="/" style={stilmt}>
            MovieTime
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Recomandări
            </Nav.Link>
            <Nav.Link as={Link} to="/formular">
              Formular
            </Nav.Link>
            <Nav.Link as={Link} to="/informatii">
              Informații
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
      <Route exact path="/">
      <ListaFilme
        filme={lista}
        sterge={stergeFilm}
        editeaza={editeazaFilm}
      />
      </Route>
      <Route path="/formular">
      <Formular transmit={adaugaFilm} editez={editFilm} obmodif={edit} />
      </Route>
        <Route path="/informatii">
            <Informatii />
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    </Container>
  );
}





