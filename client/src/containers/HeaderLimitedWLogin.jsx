/* eslint-disable operator-assignment */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import Logo from '../components/Logo.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.setUserID(0);
  }

  render() {
    return (
      <Menu size="large" borderless>
        <Menu.Item>
          <Logo />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item >
            {this.props.setUserID === 0 ?
              (<Link to="/auth" className="NavBarFoodTruck">
                <Button>Login</Button>
              </Link>) :
              (<Link to="/" onClick={this.handleLogout} className="NavBarFoodTruck">
                <Button>Logout</Button>
              </Link>)
            }
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setUserID: state.setUserID
  };
};

export default connect(mapStateToProps)(Header);
