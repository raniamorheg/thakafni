import React, { Component } from 'react';
import{ Link} from 'react-router-dom'; 

class MenuComponent extends Component {

    render() {
        return (
         

          <div className="Container">
          <div className="PageSwitcher">
            <Link to="/sign-in" className="PageSwitcher__Item ">Sing In</Link>
            <Link to="/sign-up" className="PageSwitcher__Item PageSwitcher__Item--Active">Sing Up</Link>
          </div>
          <div className="FormTitle">
            <Link to="/sign-in" className="FormTitle__Link">Sing In</Link> or
              <Link to="/sign-up" className='FormTitle__Link FormTitle__Link--Active' >Sing Up</Link>
          </div>
          
          </div> 
    
     );
    }
}

export default MenuComponent;
