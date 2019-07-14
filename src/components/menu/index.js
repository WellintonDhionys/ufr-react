import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Menu extends Component {
	render(){
		const { aberto } = this.props
		const styleMenu = aberto ? 'col-3' : 'col-3-hide'
		const spanToggle = aberto ? 'show-span' : 'hide-span'
		return (
			<div id="coluna-menu" className={ styleMenu }>        
				<div id="menu">
					<ul>
						<li>
							<Link className="btn-cor" to="/components/Dashboard">
							<i class="fas fa-tachometer-alt"></i>
								<span className={ spanToggle }>
									Dashboard
								</span>
							</Link>
						</li>
						<li>
							<Link className="btn-cor" to="/components/Cadastro">
							<i class="fas fa-cash-register"></i>
								<span className={ spanToggle }>Cadastro</span>
							</Link>
						</li>
						<li>
							<Link className="btn-cor" to="/components/Conta">
							<i class="fas fa-wallet"></i>
								<span className={ spanToggle }>Conta</span>
							</Link>
						</li>
					</ul>
				</div>
            </div>
		);
	}
}

export default Menu;