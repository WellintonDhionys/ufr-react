import React, { Component } from 'react';

class Hamburger extends Component {
	render(){
		return (
			<div class="hamburger-button" onClick={this.handleClick}>
				<i class="fas fa-bars"></i>
      </div>
		);
	}
}

export default Hamburger;