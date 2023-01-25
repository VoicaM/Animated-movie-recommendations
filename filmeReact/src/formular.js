import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formular = (props) => {
  const [id, setId] = useState(props.obmodif.id);
  const [src, setSrc] = useState(props.obmodif.src);
  const [titlu, setTitlu] = useState(props.obmodif.titlu);
  const [an, setAn] = useState(props.obmodif.an);
  const [durata, setDurata] = useState(props.obmodif.durata);
  const [descriere, setDescriere] = useState(props.obmodif.descriere);
  const [rating, setRating] = useState(props.obmodif.rating);

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const film ={src, titlu, an, durata, descriere, rating, id};

    if (id > 0) {
      props.editez(film);
    } else {
      props.transmit(film);
    }

    setSrc("");
    setTitlu("");
    setAn("");
    setDurata("");
    setDescriere("");
    setRating("");
    setId(0);
  };

  const stilh = {
    h3: { textAlign: "center", color: "#303436", fontStyle:"italic" }
  };

  const stilf = {
    form: {color: "#303436"}
  }

  return (
    <>
    <h3 className="mt-2" style={stilh.h3}>
    {id > 0 ? "Editare film" : "Film nou"}
    </h3>
      <Form className="mb-3" style={stilf.form} onSubmit={tratezSubmit}>
        <Form.Group>
          <Form.Label>Denumire imagine:</Form.Label>
          <Form.Control
            type="text"  
            value={src}
            onChange={(e) => setSrc(e.target.value)} 
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Titlu film:</Form.Label>
          <Form.Control
            type="text"
            value={titlu}
            onChange={(e) => setTitlu(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>An apariție:</Form.Label>
          <Form.Control
            type="text"
            value={an}
            onChange={(e) => setAn(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Durată:</Form.Label>
          <Form.Control
            type="text"
            value={durata}
            onChange={(e) => setDurata(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Descriere:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rating IMDb:</Form.Label>
          <Form.Control
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </Form.Group>
        <div className="text-center"><Button variant="dark" type="submit">
          Memorează
        </Button></div>
      </Form>
      </>
  );
};

export default Formular;