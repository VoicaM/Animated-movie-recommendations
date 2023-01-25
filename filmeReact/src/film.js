import React from "react";
import {Container, Button, Row, Col } from "react-bootstrap";
import {BsTrash} from "react-icons/bs";
import {BsPencil} from "react-icons/bs";

const Film = (props) => {
  const { src, titlu, an, durata, descriere, rating, id, editeaza, sterge } = props; //Destructurare props

const stilb = {
    box: {maxWidth:"215px", boxShadow: "5px 10px 18px #C0C0C0"}
  };
  const stils = {
    svg: {
      pointerEvents: "none"
    }
  };

  return (
    <Container>
      <Row className="pt-2 mb-2 bg-dark text-white rounded border border-dark">
      <Col className="pl-2 pb-3" sm={4}>
      <img src={(`imagini/${src}`)} className="img-fluid" alt="Generic placeholder" style={stilb.box}/>
      </Col>
      <Col className="pl-2 pr-2 pb-2" sm={8}>
        <h5>{titlu.toUpperCase()}</h5>
        <p>{an}</p>
        <p>{durata}</p>
        <p>{descriere}</p>
        <p>{rating}/10</p>
        <div className="text-right text-danger">
        <Button variant="link" onClick={() => editeaza(id)} id={id} style={stils}><BsPencil size={30} /></Button> 
        <Button variant="link" onClick={() => sterge(id)} id={id} style={stils}><BsTrash size={30}/></Button>
        </div>
      </Col>
      </Row>
    </Container>
  );
};

export default Film;
