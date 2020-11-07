import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import CartItem from './CartItem';
import styles from './CartProducts.module.scss';

const CartProducts = () => {

    const { cartItems } = useContext(CartContext);

    return ( 
        <div className={styles.p__container}>
            <div className="card card-body border-0">

                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                }
                <form>
                <h2>Cadastrar cliente</h2>
                <div className="form-row ">
                
                        <div className="col-sm-5 p-3">Nome<input type="text" class="form-control" placeholder="Nome" required></input></div>
                        <div className="col-sm-7 p-3">Endereço<input type="text" class="form-control" placeholder="Endereço" required></input></div>
                </div>
                <div className="form-row">
                <div className="col-sm-7 p-3">Email<input type="email" class="form-control" id="inputEmail3" placeholder="email@hotmail.com" required></input></div>
                <div className="col-sm-5 p-3">Telefone<input type="tel" class="form-control" placeholder="(xx) xxxx-xxxx" required></input></div>
                </div><button className="botonpika" type="submit">Cadastrar</button></form>
            </div>
        </div>

     );
}
 
export default CartProducts;