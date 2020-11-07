import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Store" description="Aqui podemos ver nossa variedade de produtos" >
            <div >
                <div className="text-center mt-5">
                    <h1>Loja</h1>
                    <p>Aqui podemos ver nossa variedade de produtos.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;