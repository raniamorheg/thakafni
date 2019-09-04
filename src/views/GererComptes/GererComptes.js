
import React, { Component } from 'react';

import { MDBDataTable,MDBBtn} from 'mdbreact';
import datetime from 'node-datetime';
import { Button} from 'reactstrap';
import axios from 'axios';
const btn =Button;


const url = 'http://localhost:5000/users/getAllUsers';


class TableSectionInbound extends Component {

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
          label: 'Date de creation',
          field: 'Date de creation',
          sort: 'asc',
          width: 200
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




export default TableSectionInbound;

