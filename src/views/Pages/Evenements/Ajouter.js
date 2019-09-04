import React, { Component } from 'react';
import TimeInput from 'react-time-input';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios'
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class Ajouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      nameevent: '',
      startdate: '',
      enddate: '',
      numTel: '',
      email: '',
      time: '',
      adresse: '',
      city: '',
      description: '',
      user: '',
      id: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  };
 
  async onSubmit(e) {


    e.preventDefault();
const user =  JSON.parse(await localStorage.getItem('User'))
    console.log('hh', user)
    const newEvent = {
      nameevent: this.state.nameevent,
      startdate: this.state.startdate,
      enddate: this.state.enddate,
      numTel: this.state.numTel,
      email: this.state.email,
      time: this.state.time,
      adresse: this.state.adresse,
      city: this.state.city,
      description: this.state.description,
      user: user._id
    };
    // console.clear()
    axios.post('http://localhost:5000/eventt/addevent', newEvent)
      .then(r => console.log('fff',r.data))
      console.log("helllo")
      // .catch(error => {
      //   console.log('Error fetching and parsing data', error);
      // });
  };
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12"   >
            <Card>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">

                    </Col>
                    <Col xs="12" md="9">
                      <strong> </strong>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nom du l'événement</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="nameevent" placeholder="Text"
                        value={this.state.nameevent}
                        onChange={this.onChange} />

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email-input" name="email" placeholder="Entrer Email" autoComplete="email"
                        value={this.state.email}
                        onChange={this.onChange} />

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">numero téléphone</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={this.state.phone}
                        onChange={phone => this.setState({ phone })} />
                    </Col>
                  </FormGroup>



                  <Form action="" method="post">
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="date-input">Date: de</Label>

                      </Col>

                      <Col xs="12" md="3">
                        <Input type="date" id="date-input" name="startdate" placeholder="date"
                          value={this.state.startdate}
                          onChange={this.onChange} />
                      </Col>
                      <span>a</span>
                      <Col xs="12" md="3" >
                        <Input type="date" id="date-input" name="enddate" placeholder="date"
                          value={this.state.enddate}
                          onChange={this.onChange} />
                      </Col>

                    </FormGroup>
                    <FormGroup row>
                      {/* <Col md="3">
                        <Label htmlFor="date-input"> heure </Label>
                      </Col>
                      <Col xs="12" md="3">
                        <TimeInput
                          initTime='00:00'
                          ref="TimeInputWrapper"
                          className='form-control'
                          mountFocus='true'
                          onTimeChange={this.onTimeChangeHandler}
                          name="time"
                          value={this.state.time}
                          onChange={this.onChange}
                        />
                      </Col> */}

                    </FormGroup>

                  </Form>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Adresse</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="adresse" placeholder="Text" value={this.state.adresse}
                        onChange={this.onChange}
                      />

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Ville</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="city" id="select"
                        value={this.state.city}
                        onChange={this.onChange}>
                        <option value="0"></option>
                        <option value="1">Ariana</option>
                        <option value="2">Béja</option>
                        <option value="3">Ben Arous</option>
                        <option value="4">Bizerte</option>
                        <option value="5">Gabés</option>
                        <option value="6">Gafsa</option>
                        <option value="7">Jendouba</option>
                        <option value="8">Kairouan</option>
                        <option value="9">Kasserine</option>
                        <option value="10">kébili</option>
                        <option value="11">Kef</option>
                        <option value="12">Mahdia</option>
                        <option value="13">Manouba</option>
                        <option value="14">Medenine</option>
                        <option value="15">Monastir</option>
                        <option value="16">Nabeul</option>
                        <option value="17">Sfax</option>
                        <option value="18">Sidi Bouzid</option>
                        <option value="19">Siliana</option>
                        <option value="20">Sousse</option>
                        <option value="21">Tataouine</option>
                        <option value="22">Touzer</option>
                        <option value="23">Tunis</option>
                        <option value="24">Zaghouan</option>

                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Discription</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="descriptiont" id="textarea-input" rows="9"
                        placeholder="Content..."
                        value={this.state.description}
                        onChange={this.onChange} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-multiple-input">Photos</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                    </Col>
                  </FormGroup>
                  <FormGroup row hidden>
                    <Col md="3">
                      <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Label className="custom-file">
                        <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                        <span className="custom-file-control"></span>

                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Label className="custom-file">
                        <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                        <span className="custom-file-control"></span>

                      </Label>
                    </Col>
                  </FormGroup>
                  <Col xs="12" md="9">
                  <Button outline color="success" size="lg" onClick={this.onSubmit} >Ajouter</Button>{' '}
              
              </Col>
                </Form>
              </CardBody>
         
              {/* <Button color="primary" size="x-sm">AJOUTER</Button>{' '}
              <Button color="secondary" size="x-sm">ANNULER</Button> */}
                  
         </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Ajouter;
