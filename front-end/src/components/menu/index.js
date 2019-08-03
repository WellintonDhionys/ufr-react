import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Menu extends Component {
	render(){
		const { aberto } = this.props
		const styleMenu = aberto ? 230 : 57
		return (
			<div style={{ width: styleMenu }} className="menu">        
				<ul>
					<li className="btn-cor">
						<Link to="/Dashboard/Controle">
							<i className="fas fa-tachometer-alt"></i>
							Dashboard
						</Link>
					</li>
					<li className="btn-cor">
						<Link to="/Dashboard/Cadastro">
						<i className="fas fa-cash-register"></i>
							Cadastro
						</Link>
					</li>
					<li className="btn-cor">
						<Link to="/Dashboard/Conta">
						<i className="fas fa-wallet"></i>
							Conta
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Menu;