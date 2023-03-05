import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Register() {
  return (
    <section className='register'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-7'>
            <h2 className='text-center mb-3'>Police Community Relations Committee</h2>
            <h6 className='text-center mb-5'>Please enter your details</h6>
            <Form>
              <Row className='mb-4'>
                <Col>
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control placeholder="Occupation" />
                </Col>
                <Col>
                  <Form.Label>Office Address</Form.Label>
                  <Form.Control placeholder="Office Address" />
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <Form.Label>Home Address</Form.Label>
                  <Form.Control placeholder="Home Address" />
                </Col>
                <Col>
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Select aria-label="">
                    <option>Select Marital Status</option>
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                    <option value="3">Divorced</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <Form.Label>PCRC State</Form.Label>
                  <Form.Select aria-label="">
                    <option>Select State</option>
                    <option value="Abuja FCT">Abuja FCT</option>
                    <option value="Abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nassarawa">Nassarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Zone</Form.Label>
                  <Form.Control placeholder="Zone" />
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <Form.Label>Command</Form.Label>
                  <Form.Control placeholder="Command" />
                </Col>
                <Col>
                  <Form.Label>Division</Form.Label>
                  <Form.Control placeholder="Division" />
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <Form.Label>Membership Status</Form.Label>
                  <Form.Control placeholder="Membership Status" />
                </Col>
                <Col>
                  <Form.Label>Whatsapp</Form.Label>
                  <Form.Control placeholder="Whatsapp" type='tel' />
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control placeholder="Email" type='email' />
                </Col>
                <Col>
                  <Form.Label>Alternate Number</Form.Label>
                  <Form.Control placeholder="Other Number" type='tel' />
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <Form.Label>Next of Kin</Form.Label>
                  <Form.Control type="text" placeholder="Next of Kin" />
                </Col>
                <Col>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control placeholder="Phone Number" type='tel' />
                </Col>
              </Row>
              <Form.Group className="mb-4" controlId="">
                <Form.Label>Relationship</Form.Label>
                <Form.Select aria-label="">
                  <option>Select</option>
                  <option value="1">Sister</option>
                  <option value="2">Wife</option>
                  <option value="3">Husband</option>
                  <option value="3">Brother</option>
                  <option value="3">Children</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" className='w-100 py-3'>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register