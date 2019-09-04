import React, { Component } from 'react';
import{ Link} from 'react-router-dom'; 
import axios from 'axios';




class Login extends Component {
  constructor(props)
{
  super()
  this.state={
   
    email:'',
    password:'',
  }
  this.onSubmit=this.onSubmit.bind(this)
  this.onChange=this.onChange.bind(this)

}
  
onChange(e){
 
  this.setState({[e.target.name]:e.target.value})

console.log(this.state.password)
console.log(this.state.email)
 
};


  // onSubmit(e) {
  //   e.preventDefault();

  //   const User = {
    
  //     email:this.state.email,
  //     password:this.state.password
  //   };
  //   console.clear()
  //   axios.post('http://localhost:5000/users/login',User
    
  //   )
  //   .then(r=>console.log(r.data))
  // };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const user = {
  //     email: this.state.name,
  //     password: this.state.password
  //   };
  //   axios.post("http://localhost:5000/users/login",  user )
  //     .then(res => {
  //       console.log(res);
  //       // this.handleResponse(res);
  //       // this.props.handlerFromParant();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //   })
  // }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email:this.state.email,
      password:this.state.password
    };
    console.clear()
    axios.post('http://localhost:5000/users/login',newUser
    
    )
    .then(response=>{

      if (response.status == 200) {
        console.log(response.data)
         localStorage.setItem('User', JSON.stringify(response.data.user));
    }
    })
  };
  
    render() {
        return (
          <div className="App">
          <div className="App__Aside">
          
          <img src="assets/img/avatars/favicon.png" alt="Logo__Login" className="Logo__Login"/>;
       
          </div>
          <div className="App__Form ">
          
          <div className="Container">
            <div className="PageSwitcher">
              <Link to="/Login" className="PageSwitcher__Item ">se connecter</Link>
              <Link to="/Register" className="PageSwitcher__Item PageSwitcher__Item--Active">s'inscrire</Link>
            </div>
            <div className="FormTitle">
              <Link to="/Login" className="FormTitle__Link">se connecter</Link> 
                <Link to="/Register" className="FormTitle__Link FormTitle__Link--Active">s'inscrire</Link>
            </div>
            
            </div> 
  
            <div className="FormCenter">

            <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
  <label className="FormField__Label" htmlFor="Email">Adresse  mail </label>
  <input type="Email"  id="email" className="FormField__Input" placeholder="Enterez votre adresse mail" name="email"
  value={this.state.email}
  onChange={this.onChange}/>
  </div>
  
  <div className="FormField">
  <label className="FormField__Label" htmlFor="password">Mots de passe</label>
  <input type="password"  id="password" className="FormField__Input" placeholder="Enterez mots de passe " name="password"
  value={this.state.password}
  onChange={this.onChange}/>
  </div>
 
 <div className="FormField">
  <button  className="FormField__Button nr-20" onClick={this.onSubmit}> <Link to ="/" >se connecter </Link> 
 </button>
      <Link to ="/Register" className="FormField__Link">crerer un compte </Link>
    
    </div>
  
  
  </form>
  </div>
  </div>
  </div>
     );
    }
}

export default Login;