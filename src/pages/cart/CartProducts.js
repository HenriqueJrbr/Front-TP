import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import CartItem from './CartItem';
import styles from './CartProducts.module.scss';

const CartProducts = () => {

    const {cartItems } = useContext(CartContext);
    const [nome,setNome] =useState('');
    const [sobrenome,setSobrenome] =useState('');
    const [cep,setCep] =useState('');
    const [rua,setRua] =useState('');
    const [numero,setNumero] =useState('');
    const [cidade,setCidade] =useState('');
    const [bairro,setBairro] =useState('');
    const [uf,setUf] =useState('');
    const [complemento,setComplemento] =useState('');
    const [email,setEmail] =useState('');
    const [telefone,setTelefone] =useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const limparDados = () => {
        setNome('');
        setSobrenome('');
        setCep('');
        setRua('');
        setNumero('');
        setCidade('');
        setBairro('');
        setUf('');
        setComplemento('');
        setEmail('');
        setTelefone('');
    }
    
    const enviarDados =event => {
        
      var dados=Array({nome,sobrenome,cep,rua,numero,cidade,bairro,uf,complemento,email,telefone});
            fetch("http://localhost:3003/sistema/clienteCadastrar", {
                method: "post",
                body: JSON.stringify(dados),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(data => {
                    if (data.ok) {
                        handleShow()
                        limparDados()
                    } else {
                        data.json().then(data => {
                            if (data.error) {
                                console.log(data.error)
                            }
                        });
                    }
                })
                .catch(erro => console.log(erro));
            event.preventDefault();
             
        };

    

    return ( 
        <div className={styles.p__container}>
            <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Cliente Cadastrado Com Sucesso!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-row">
            <p>
            Parabens {nome}, Você Foi Cadastrado Com Sucesso No Nosso Sistema!!
            </p>
        </div>
        <div className="form-row">
            <Button variant="primary" onClick={handleClose}>
            Ok!
          </Button>
          </div>
        </Modal.Body>
      </Modal>
            <div className="card card-body border-0">
                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                }
                <form onSubmit={enviarDados}>
                <h2>Cadastrar cliente</h2>
                <div className="form-row">
                    <div className="col-sm-5 p-3">Nome<input name="nome" type="text" value={nome} onChange={event =>setNome(event.target.value)} className="form-control" placeholder="Nome" required></input></div>
                    <div className="col-sm-5 p-3">Sobrenome<input type="text" value={sobrenome} onChange={event =>setSobrenome(event.target.value)} className="form-control" placeholder="Sobrenome" required></input></div>
                </div>
                <div className="form-row">
                    <div className="col-sm-5 p-3">Telefone<input type="tel" value={telefone} onChange={event =>setTelefone(event.target.value)} className="form-control" placeholder="(xx) xxxx-xxxx" required></input></div>
                    <div className="col-sm-5 p-3">Cep:<input type="text" value={cep} onChange={event =>setCep(event.target.value)} className="form-control" placeholder="12345-678" maxLength="9" required></input></div>  
                </div>
                <div className="form-row">
                    <div className="col-sm-5 p-3">Rua:<input type="text" value={rua} onChange={event =>setRua(event.target.value)} className="form-control" placeholder="Rua" required></input></div> 
                    <div className="col-sm-5 p-3">Numero:<input type="text" value={numero} onChange={event =>setNumero(event.target.value)} className="form-control" placeholder="Numero" required></input></div> 
                </div>
                <div className="form-row">
                    <div className="col-sm-5 p-3">Bairro:<input type="text" value={bairro} onChange={event =>setBairro(event.target.value)} className="form-control" placeholder="Bairro" required></input></div>
                    <div className="col-sm-5 p-3">Cidade:<input type="text" value={cidade} onChange={event =>setCidade(event.target.value)} className="form-control" placeholder="Cidade" required></input></div>        
                </div>
                <div className="form-row">
                    <div className="col-sm-5 p-3">Estado:<input type="text" value={uf} onChange={event =>setUf(event.target.value)} className="form-control" placeholder="Estado" required></input></div>
                    <div className="col-sm-5 p-3">Complemento:<input type="text" value={complemento} onChange={event =>setComplemento(event.target.value)} className="form-control" placeholder="Complemento" required></input></div>

                </div>
                <div className="form-row">
                    <div className="col-sm-10 p-3">Email<input type="email" value={email} onChange={event =>setEmail(event.target.value)} className="form-control" id="inputEmail3" placeholder="email@hotmail.com" required></input></div>
                    
                </div><button className="btn btn-primary mb-2" type="submit">Cadastrar</button></form>
            </div>
        </div>
        
     );           
}

 
export default CartProducts;