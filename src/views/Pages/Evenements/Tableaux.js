// import React from 'react';
// import { Table } from 'reactstrap';
// import {  Modal, ModalHeader, ModalBody } from 'reactstrap';

// export default class Tableaux extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }));
//   }
//   render() {
//     return (           <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
//       toggle={this.toggle} className={this.props.className}>
//       {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
      
//       <ModalBody>
//       <Table striped>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </Table>
//       </ModalBody>
//       </Modal>
//     );
//   }
// }
/*import React, { Component } from 'react';

import { MDBDataTable,MDBBtn} from 'mdbreact';
import datetime from 'node-datetime';

import axios from 'axios';
const url = 'http://localhost:5000/users/getAllUsers';


class Tableaux extends Component {

  constructor(props) {

    super(props);

    this.state= {

      posts: [],

      isLoading:true,

      tableRows: [],

    };

  }
  componentWillMount=async() => {

    await axios.get(url)

      .then(response => response.data)

      .then(data => {

         // console.log(data);

         // if (err) throw err;

         this.setState({ posts: data })

      })

      .then(async() => {

         this.setState({ tableRows:this.assemblePosts(), isLoading:false })

         console.log(this.state.tableRows);

      });

  }
  assemblePosts= () => {

    let posts =this.state.posts.map((post) => {

      return (

        {

          
          firstName: post.firstName,

          secondName: post.secondName,
          email: post.email,

        

          date: datetime.create(post.date).format('m/d/y'),
    
        
        }

      )

    });return posts;

  }





  render() {

    const data = {
      columns: [
       
        {
          label: 'Prenom',
          field: 'Prenom',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Nom',
          field: 'Nom',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Email',
          field: 'Email',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100
        },
        {
          label: 'genre',
          field: 'genre',
          sort: 'asc',
          width: 100
        },
      ],

      rows:this.state.tableRows ,


    }




    return (
    
             <div>

              <MDBDataTable

                striped

                bordered

                hover

                data={data}
                />
                </div>

    )
  
  }

}




export default Tableaux;


/*import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {

  const data = {
    
    columns: [
      {
        label: 'ID',
        field: 'ID',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Prenom',
        field: 'Prenom',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Nom',
        field: 'Nom',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Email',
        field: 'Email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'genre',
        field: 'genre',
        sort: 'asc',
        width: 100
      },
    ],
    rows: [   {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: '61',
      date: '2011/04/25',
      salary: '$320'
    },
  ]};

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
}

export default DatatablePage;*/





import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
const ref =Tableaux
class Tableaux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  getAlert() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
 }
 
  render() {
    
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} ref= "hhh">

          <ModalBody>
          <Table striped  >
        <thead>
           <tr>
             <th></th>
             <th>Prénom</th>
             <th>Nom</th>
             <th>mail</th>
             <th>Age</th>
             <th>genre</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th scope="row">1</th>
             <td>Mark</td>
             <td>Otto</td>
             <td>@mdo</td>
             <td>19</td>
             <td>Homme</td>
           </tr>
           <tr>
             <th scope="row">2</th>
             <td>Jacob</td>
             <td>Thornton</td>
             <td>@fat</td>
             <td>20</td>
             <td>Homme</td>
           </tr>
           <tr>
             <th scope="row">3</th>
             <td>Larry</td>
             <td>the Bird</td>
             <td>@twitter</td>
             <td>23</td>
             <td>femme</td>
           </tr>
         </tbody>
       </Table>         
        </ModalBody>
      
        </Modal>
           
         {/* <h1 ref="hello">Hello</h1> */}
      </div>
    );
  }
}

export default Tableaux;