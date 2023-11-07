import React, { useState, useEffect } from 'react';
import '../../assets/styles/style.scss';
import axios from 'axios';

function ProductDetailComponent({ productDetails }) {
  const [productDetailsRes, setProductDetails] = useState(null);
  const [productDetailsResDes, setProductDetailsDes] = useState(null);

  useEffect(() => {
    if (productDetails) {
      axios.get(`https://api.mercadolibre.com/items/${productDetails}`)
        .then(response => {
          setProductDetails(response.data);
        })
        .catch(error => {
          console.error('Error en la solicitud:', error);
        });

        axios.get(`https://api.mercadolibre.com/items/${productDetails}/description`)
        .then(response => {
          setProductDetailsDes(response.data);
        })
        .catch(error => {
          console.error('Error en la solicitud:', error);
        });
    }
  }, [productDetails]);

  return (
    <div>
      <div className='result__body'>
        {productDetailsRes ? (
          <div>
            <div className='result__result'>
              <div className='result__resultimg'>
                <img className='result__resultimge' src={productDetailsRes.pictures[0].secure_url} alt="Logo descripcion imagen"/>
              </div>
              <div className='result__resultdescription'>
                <p>{productDetailsRes.condition === 'new' ? ('Nuevo - '):('Usado - ') } {productDetailsRes.sold_quantity === undefined ? ('0') : (productDetailsRes.sold_quantity) } Vendidos</p>
                <p><b>{productDetailsRes.title}</b></p>
                <p className='result__price'>{productDetailsRes.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }).replace(/,00$/, '').split(',')[0]}<br/></p>
                <button className='result__button_pay'>Comprar</button>
              </div>
            </div>
            <div><br/>
              <h3>{productDetailsResDes && productDetailsResDes.plain_text ? 'Descripción del producto' : ''}</h3>
              <p>{productDetailsResDes && productDetailsResDes.plain_text ? productDetailsResDes.plain_text : ''}</p>
            </div>
          </div>
        ) : (
          <p>No se encontraron detalles, intenta más tarde. </p>
        )}
      </div>
    </div>
  );
}

export default ProductDetailComponent;
