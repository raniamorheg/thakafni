import React, { Component } from 'react';
import{ Link} from 'react-router-dom'; 
import axios from 'axios'

class Register extends Component {

constructor(props)
{
  super()
  this.state={
    firstName:'',
    secondName:'',
    email:'',
    password:'',
  }
  this.onSubmit=this.onSubmit.bind(this)
  this.onChange=this.onChange.bind(this)

}



onChange(e){
 
  this.setState({[e.target.name]:e.target.value})

console.log(this.state.password)
console.log(this.state.firstName)
 
};


  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      firstName:this.state.firstName,
      secondName:this.state.secondName,
      email:this.state.email,
      password:this.state.password
    };
    console.clear()
    axios.post('http://localhost:5000/users/add',newUser
    
    )
    .then(r=>console.log(r.data))
  };
  handleResponse = async (response) => {
    if (response.status == 201) {
        await localStorage.setItem('User', JSON.stringify(response.data));
    }
};


    render() {
        return (
          <div className="App">
        <div className="App__Aside">
        
        <img src="/assets/img/avatars/favicon.png" alt="Logo__Login" className="Logo__Login"/>;
     
        </div>
        <div className="App__Form ">
        
        <div className="Container">
          <div className="PageSwitcher">
            <Link to="/Login" className="PageSwitcher__Item ">se connecter</Link>
            <Link to="/Register" className="PageSwitcher__Item PageSwitcher__Item--Active">s'inscrire</Link>
          </div>
          <div className="FormTitle">
            <Link to="/Login" className="FormTitle__Link">se connecter</Link> or
              <Link to="/Register" className='FormTitle__Link FormTitle__Link--Active' >s'inscrire</Link>
          </div>
          
          </div> 


            <div className="FormCenter">

            <form className="FormFields" onSubmit={this.onSubmit}>
         <div className="FormField">
           <label className="FormField__Label" htmlFor="name">Prénom</label>
  <input type="text"  id="name" className="FormField__Input" placeholder="Enterez votre nom" 
  
  
  
  name="firstName"
  
   value={this.state.firstName}
  onChange={this.onChange}/>
  </div>



  <div className="FormField">
           <label className="FormField__Label" htmlFor="name">Nom</label>
  <input type="text"  id="name" className="FormField__Input" placeholder="Enterez votre prénom" 
  
  
  
  name="secondName"
  
   value={this.state.secondName}
  onChange={this.onChange}/>
  </div>
  
 <div className="FormField">
  <label className="FormField__Label" htmlFor="Email">Adresse mail</label>
  <input type="Email"  id="email" className="FormField__Input" placeholder="Enterez votre Email" 
  
  
  
   name='email'
  value={this.state.email}
  onChange={this.onChange}/>
  </div>
  <div className="FormField">
  <label className="FormField__Label" htmlFor="password">Mots de passe</label>
  <input type="password"  id="password" className="FormField__Input" placeholder="Enter votre mots de passe" 
  
  name='password'
  value={this.state.password}
  onChange={this.onChange}
/>
  </div>
  {/* <div className="FormField">
  <label className="FormField__Label" htmlFor="password">Mots de passe</label>
  <input type="password"  id="password" className="FormField__Input" placeholder="Enter votre mots de passe" name="password"/>
  </div> */}
  
  <div className="FormField">
  
      <button to ="/Login" className="FormField__Button nr-20" onClick={this.handleSubmit}> 
      <Link to ="/Login" className="FormField__Link"> s'inscrire</Link> 
   </button>
    
      <Link to ="/Login" className="FormField__Link">j'ai un compte </Link>
    
    </div>
  
  
  </form>
  </div>
  </div>
      </div>
     );
    }
}

export default Register;


