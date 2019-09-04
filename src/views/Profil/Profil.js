import React, { Component } from 'react';

import TimeInput from 'react-time-input';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Profil extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
  
        <Row>
          <Col xs="12"   >
            <Card>
              <CardHeader>
                <strong>Ajouter un événements</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                    
                    </Col>
                    <Col xs="12" md="9">
                    <strong>Entrer Vos Informations </strong>  
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nom du l'établissement</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    
                    </Col>
                  </FormGroup>
                       <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">numero téléphone</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <PhoneInput
    placeholder="Enter phone number"
    value={ this.state.phone }
    onChange={ phone => this.setState({ phone }) } />
                    </Col>
                  </FormGroup>
               
                 
          
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Adresse</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    
                    </Col>
                  </FormGroup>
                
             
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Ville</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="Select" id="select">
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
                      <Label htmlFor="textarea-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>
          <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">photo de profil</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-multiple-input">photos de l'etablissement</Label>
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
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter >
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> enregistrer</Button>
                <Button type="reset" size="sm" color="danger"><i className="d-md-down-none" ></i> annuler</Button>
              </CardFooter>
            </Card>
            </Col>
           </Row>
       
      </div>
    );
  }
}

export default Profil;
