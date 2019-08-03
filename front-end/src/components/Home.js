import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="header">
            </div>
            <div className="footer">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer.</p>
                <Link className="btns" to="/Autenticar"> Começar </Link>
            </div>
        </div>
    );
}

export default Home;
