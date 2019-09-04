


import React, { Component, PropTypes  } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
 import Ajouter from './Ajouter';
 import Tableaux from './Tableaux';
import axios from'axios'
import { isNullOrUndefined } from 'util';


class Myevents extends Component {
  // state = {
  //   id: '',
  // }

  // handleChange = event => {
  //   this.setState({ id: event.target.value });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }
  constructor(props) {
    super(props);
    this.state = {
      rows:[],
            modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.SomeDeleteRowFunction=this.SomeDeleteRowFunction.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onClick() {
    this.refs.child.getAlert() // undefined
  }

//    removeRow(rows)
// { var row = rows.parentElement.parentElement;
//   document.getElementById('table1').deleteRow(row.rowIndex);
// }
SomeDeleteRowFunction(e) {
  e.preventDefault();
  let rows = this.state.rows;
  console.log(rows)
  document.getElementById("user1").remove();
}
  
  render() {
   
    return (
      <div className="animated fadeIn">
     <Row>
    
    <Col xs="12" >
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i> La liste des  événments
        </CardHeader>
        
        <CardBody>
        <Table hover responsive className="table-outline mb-0 d-none d-sm-table" id="table1">
            <thead className="thead-light">
            <tr>
            
              <th className="text-center">Evénment</th>
              <th className="text-center">Date De Creation</th>
            
              <th className="text-center">Modifier</th>
              
              <th className="text-center">les participants</th>
              
              <th className="text-center">Supprimer</th>
           
            </tr>
            </thead>
         
            <tbody className= "text-center">
           <tr id="user1">
              <td>Ispeak </td>
           
             <td>01/01/2019</td>
              
             <td><Button  block color="warning" className="btn-pill" onClick={this.toggle}>{this.props.buttonLabel} Modifier
             <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle} className={this.props.className}>
          
          <ModalBody>
          
            <Ajouter/>
          </ModalBody>
        </Modal></Button></td> 
        <Tableaux ref="child" />    
             <Button block color="success" className="btn-pill" onClick={this.onClick.bind(this)}>{this.props.buttonLabel} lister
          </Button>  
             <td>
             
          <Button value="Delete" onClick={e => this.SomeDeleteRowFunction(e)} block color="danger" className="btn-pill">supprimer</Button>
       </td>     
            </tr>
    
           </tbody>
             </Table>
          <Pagination>
            <PaginationItem disabled><PaginationLink previous tag="button">Pre</PaginationLink></PaginationItem>
            <PaginationItem active>
              <PaginationLink tag="button">1</PaginationLink>
            </PaginationItem>
       
            <PaginationItem><PaginationLink next tag="button">Suivant</PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  
  </Row>

  </div>

    );
  }
}

export default Myevents;
