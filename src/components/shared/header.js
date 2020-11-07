import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';
import Logo from './icon.png'
const Header = () => {

    const {itemCount} = useContext(CartContext);
    return (
        <header className={styles.header}>
        <img src={Logo}/>
            <Link to='/'>Loja</Link>
            <Link to='/about'>ADM</Link>
            <Link to='/cart'> <CartIcon/> Carrinho ({itemCount})</Link>
        </header>
     );
}
export default Header;