import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DropdownUser extends Component {
    render() {
        return (
            <Dropdown alignRight className="dropdown-user">
                <Dropdown.Toggle className="toggle-user" id="dropdown-basic">
                    <i className="fas fa-user"></i>
                </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item className="item"><i className="fas fa-user"></i>User</Dropdown.Item>
                    <Dropdown.Item className="item"><i className="fas fa-cog"></i>Settings</Dropdown.Item>
                    <Dropdown.Item className="item"><Link to="/"><i className="fas fa-sign-out-alt"></i>Exit</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default DropdownUser;