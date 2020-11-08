import React, { useContext, useState } from 'react';
import {Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);
    const [item,setItem] = useState('')
    const [preco,setPreco] = useState('')
    const [descricao,setDescricao] = useState('')
    const [foto,setFoto] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (name,descricao,preco,foto) => {
        setItem(name);
        setPreco(preco);
        setDescricao(descricao);
        setFoto(foto);
        setShow(true);
    } 

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body">
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {item}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div class="card border-secondary mb-3" style={{"max-width": "540px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src={foto} class="card-img" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{item}</h5>
        <p class="card-text">Preço: {preco}</p>
        <p class="card-text">Descrição do Produto:<br></br>{descricao}</p>
      </div>
      <div class="card-footer bg-transparent">
                    <Button variant="primary" onClick={handleClose}>
                        Fechar
                    </Button>
            </div>
        </div>
      </div>                    
    </div>
            </Modal.Body>
        </Modal>

            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
            src={product.photo + '?v=' + product.id} alt=""/>
            <p>{product.name}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">
                <button 
                    onClick={() => handleShow(product.name,product.descricao,product.price,product.photo)}
                    className="btn btn-link btn-sm mr-2">Detalhes
                </button>

                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Adicionar mais</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">add ao carrinho</button>
                }
                
            </div>
        </div>
     );
}
 
export default ProductItem;