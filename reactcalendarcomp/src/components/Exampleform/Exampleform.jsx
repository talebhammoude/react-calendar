import 'bootstrap/dist/css/bootstrap.min.css';
import {Form , Button, Row, Col} from "react-bootstrap";
import "./Exampleform.css";
// import React, { useState } from 'react';

function Exampleform(props) {

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  return (
    <div>

      <div className='backdrop'/>
      <div className='form-dialog'>
      <Form    name="contact v1" onSubmit="submit"  method="POST" data-netlify="true">

      <Row className="mb-4">
        <h2>Skicka en förfrågan</h2>
      </Row>

      <Row className="mb-4"></Row>

      <Row className="mb-4">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Förnamn</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="..."
            defaultValue=""
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Efternamn</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="..."
            defaultValue=""
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" >
          <Form.Label>E-post</Form.Label>
          <Form.Control type="email" placeholder="namn@exempel.com" required />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
       
      </Row>

      <Row className="mb-4"></Row>


      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Önskad datum</Form.Label>
          <Form.Control type="date" placeholder="..." required value={props.dayValue} disabled />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Välj önskad tid</Form.Label>
          <Form.Select>
            <option value="t-1">12:00 - 13:00</option>
            <option value="t-2">13:10 - 14:10</option>
            <option value="t-3">14:20 - 15:20</option>
            <option value="t-4">15:30 - 16:30</option>
          </Form.Select>
        </Form.Group>
        
      </Row>


      <Row className="mb-4"></Row>


      <Row className="mb-2">
        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Beskriv ditt fall</Form.Label>
        <Form.Control as="textarea" rows={2} />
        </Form.Group>
      </Row>


      <Row className="mb-2">
      <Form.Group className="mb-3">
        <Form.Check
        
          // required="true"
          label="Okej med en annan tillgänglig tid denna dag"
          // feedback=""
          // feedbackType="invalid"
        />
      </Form.Group>
      </Row>


      <Button className='btn-primary' type="submit">Skicka iväg förfrågan</Button>
      <Button className='btn-primary' onClick={props.cancelForm}>Avbryt</Button>

    

    </Form>
      </div>
    </div>
  );
}

export default Exampleform;
