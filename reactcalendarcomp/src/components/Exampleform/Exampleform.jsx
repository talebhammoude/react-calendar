import 'bootstrap/dist/css/bootstrap.min.css';
import {Form , Button} from "react-bootstrap";
import "./Exampleform.css";

function Exampleform(props) {
  return (
    <div>

      <div className='backdrop'/>
      <div className='form-dialog'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-postaddress</Form.Label>
            <Form.Control type="email" placeholder="Ange din e-postadress ..." />
            <Form.Text className="text-muted">
              Denna e-postadress kommer att användas för att vi ska kunna svara på din förfrågan.
            </Form.Text>
          </Form.Group>

        
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="En annan tid den dagen om det inte går" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
                    Skicka förfrågan
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Exampleform;
