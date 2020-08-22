import React from 'react';
import './Header.css';
import logo from './imagenes/logo.png';
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const logout = () =>{
        if(user){
            auth.signOut();
        }
    }
    const [{ basket, user }] = useStateValue();
    console.log(basket)

    return <nav className='header'>
        <a href='./Home.js' className='paginaPrincipal'>
            <img className='logo' src= {logo} alt='logo de amazon' />
        </a>

        <div className='search_bar'>
            <input type='text' className='header_input' />
            <FaSearch className='Buscar'/>
        </div>

        <div className="header_nav">
            <Link to={!user && "/Login"} className="header_link">
                <div onClick={logout} className="header_option">
                    <span className="header_optionLineOne">Hello {user?.email}</span>
                    <span className="header_optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
                </div>
            </Link>
        </div>

        <div className="header_nav">
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
            </Link>
        </div>

        <div className="header_nav">
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </Link>
        </div>

            <Link to="/checkout" className="header_link">
                <div className="header_basket">
                   <FaShoppingBasket className="canasta"/>
                    <span className="header_basketCount">{basket.length}</span>
                </div>
            </Link>

    </nav>;
    
}

export default Header
