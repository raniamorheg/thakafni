import React, { Component } from 'react';

import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import favicon from '../../assets/img/brand/favicon.png'
import { Redirect } from 'react-router-dom'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/GererComptes' />
    }}
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
     
        <AppNavbarBrand
          full={{ src: logo, width: 50, height: 50, alt: 'CoreUI Logo' }}
          minimized={{ src:favicon, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <Nav className="d-md-down-none" navbar>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="profile#/Evenements"><DropdownItem><i className="icon-calendar"></i>evenements </DropdownItem></NavLink>
          </NavItem>
          
        
          <NavItem className="d-md-down-none">
            <NavLink href="profile#/Dashbord">
              <DropdownItem><i className="charts"></i> Statistiques</DropdownItem>
     </NavLink>
          </NavItem>

          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }} >{this.renderRedirect()}
             
           
            <DropdownItem ><NavLink href="profile#/GererComptes"><i className="fa fa-users"></i>Gérer Comptes </NavLink></DropdownItem>
              
              <DropdownItem><NavLink href="profile#/Profil"><i className="fa fa-user"></i> Profile </NavLink></DropdownItem>
              <DropdownItem><NavLink href="profile#/MesEvenements"><i className="icon-calendar"></i> mes evenements </NavLink></DropdownItem>
              <DropdownItem><NavLink href="profile#/Favoris"><i className="icon-heart"></i> mes favories </NavLink></DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
       
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
