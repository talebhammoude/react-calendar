import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Form , Button, Row, Col} from "react-bootstrap";
import "./Exampleform.css";
// import React, { useState } from 'react';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


function Exampleform(props) {
  
  
const [body , setBody]= useState({ name: "", email: "", message: "" });
  


const handleSubmit = e => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...body })
  })
    .then(() => {
      console.log("Success!");
    })
    .catch(error => console.log(error));

  e.preventDefault();
};

const handleChange = e => setBody({ [e.target.name]: e.target.value });


  return (
    <div >

      <div className='backdrop' />
      <div className='form-dialog'>


      
      <Form   onSubmit={handleSubmit}  >
      {/* <input type="hidden" name="form-name" value="contact"  /> */}

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
            name="Förnamn:"
            onChange={handleChange}
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
            name="Efternamn:"
            onChange={handleChange}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" >
          <Form.Label>E-post</Form.Label>
          <Form.Control type="email" placeholder="namn@exempel.com" required name="E-post:" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
       
      </Row>

      <Row className="mb-4"></Row>


      <Row className="mb-3">
        <Form.Group as={Col} md="6" >
          <Form.Label >Önskad datum</Form.Label>
          <Form.Control  type="text"   required value={props.dayValue} readOnly  name="Datum:" onChange={handleChange} />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Välj önskad tid</Form.Label>
          <Form.Select name="Tid:"  onChange={handleChange}>
            <option id="no-options" value="no-value"></option>
            <option id="12:00 - 13:00" value="12:00 - 13:00">12:00 - 13:00</option>
            <option id="13:10 - 14:10" value="13:10 - 14:10">13:10 - 14:10</option>
            <option id="14:20 - 15:20" value="14:20 - 15:20">14:20 - 15:20</option>
            <option id="15:30 - 16:30" value="15:30 - 16:30">15:30 - 16:30</option>
          </Form.Select>
        </Form.Group>
        
      </Row>


      <Row className="mb-4"></Row>


      <Row className="mb-2">
        <Form.Group className="mb-1"  >
        <Form.Label>Beskriv ditt fall</Form.Label>
        <Form.Control id="description1" as="textarea" rows={2} name="Beskrivning:" onChange={handleChange} required/>
        </Form.Group>
      </Row>


      {/* <Row className="mb-2">
      <Form.Group className="mb-3">
        <Form.Check
        
          // required="true"
          label="Okej med en annan tillgänglig tid denna dag"
          // feedback=""
          // feedbackType="invalid"
          name="Okej med annan tid:"
          value=""
        />
      </Form.Group>
      </Row> */}

      
      <Button  className='btn-primary'   type="submit"  >Skicka iväg förfrågan</Button>
      <Button className='btn-primary' onClick={props.cancelForm}>Avbryt</Button>
     

    

    </Form>
    
      </div>
    </div>
  );
}

export default Exampleform;
