import React from 'react';
import Layout from '../components/Layout';



const About = () => {
    
    return ( 
        <Layout title="ADM" description="Pagina administrativa" >
            
            <div className="text-center mt-5">
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nome do produto</th>
      <th scope="col">Preço fabrica</th>
      <th scope="col">Preço Venda</th>
      <th scope="col">img</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>exe</td>
      <td>exe</td>
      <td>exe</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>exe</td>
      <td>exe</td>
      <td>exe</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>exe</td>
      <td>exe</td>
      <td>exe</td>
    </tr>
  </tbody>
</table>
        <div className="text-center mt-5">
        <form>
            <div className="form-row">
                <div className="col-sm-7 p-3">Nome do produto<input name="nome" type="text" className="form-control" placeholder="Nome" required></input></div>
                <div className="col-sm-5 p-3">IMG<input type="text" className="form-control" placeholder="IMG" required></input></div></div>
                
                <div className="form-row">
                <div className="col-sm-6 p-3">Preço Fabrica<input name="preçoF" type="number" className="form-control" placeholder="Preço fabrica" step="0.01" required></input></div>
                <div className="col-sm-6 p-3">Preço venda<input type="preçoV" type="number" className="form-control" placeholder="Preço venda" step="0.01" required></input></div></div>
        <input type="submit" className="btn btn-primary mb-2"></input>

        </form>
        </div>
        </div>
        </Layout>
        
     );
}
 
export default About;