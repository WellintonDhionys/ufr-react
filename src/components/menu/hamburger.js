import React, { Component } from 'react';

class Hamburger extends Component {
	render(){
		return (
			<div class="hamburger-button" onClick={this.handleClick}>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
            </div>
		);
	}
}

export default Hamburger;