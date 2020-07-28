import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {

    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg">
            <i className="far fa-smile-wink text-white fa-2x"></i>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item"><Link className="nav-link ml-2" to="/">Home</Link></li>
                    {
                        useSelector(state => state.userLogged) > 0 ?
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/lounge-new-order">Novo pedido salão</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/lounge-order-ready">Pedido pronto salão</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/kitchen-new-order">Novo pedido cozinha</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/kitchen-order-ready">Pedido pronto cozinha</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/finished-order">Pedido finalizado</Link></li>
                                <li className="nav-item"><Link className="nav-link" onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</Link></li>
                            </>
                            :
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/register">Cadastrar</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
                            </>
                    }

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
