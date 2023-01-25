import React from 'react';
import {Container, Row} from "react-bootstrap";

const stilp = {
    indent: {textIndent: "50px"}
}

const stilh = {
    h2: {color: "#303436", fontStyle:"italic"}
}

const Informatii = () => {
    return (
    <Container>
    <Row className="justify-content-center align-items-center">
    <h2 style={stilh.h2}>Despre MovieTime</h2>
    <img className="m-3" src="imagini/imInf.jpg"  alt="Generic placeholder"></img>
    <p style={stilp.indent}>Am decis realizarea unei aplicații prin intermediul căreia se recomandă filme de animație deoarece conține diverse filme care pot fi vizionate în familie, acestea fiind atent selecționate.
    De asemenea, vizionarea unor astfel de filme cu siguranță îi vor încânta pe cei mici, dar nu numai, deoarece bucuria copilăriei își va face simțită prezența și în cazul adulților. Fiecare film dispune și de o scurtă descriere pentru ca alegerea filmului potrivit să se realizeze mai ușor.
    Ratingul este cel acordat în momentul adăugării filmelor și nu se actualizează. Vizionare plăcută!
    </p>
    <img src="imagini/imInf1.png"  alt="Generic placeholder"></img>
    </Row>
    </Container>
     );
}

export default Informatii;