import React from 'react';
import '../../assets/styles/style.scss';
import { Link } from 'react-router-dom';

function ResultsComponent({ results }) {
    const firstFourResults = results.slice(0, 4);
    return (
        <div className='result__body'>
        {firstFourResults.map((result) => (
            <div key={result.id}>
                <div className='result__result'>
                    <div className='result__img'>
                    <Link to={`/detail/${result.id}`}><img className='result__image' src={result.thumbnail} alt="Logo descripcion imagen"/></Link>
                    </div>
                    <div className='result__description'>
                        {result.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }).replace(/\,00$/, '').split(',')[0]} <br/>
                        {result.title}
                    </div> 
                    <div className='result__addres'>
                        {result.seller_address.state.name}
                    </div>   
                </div>
                <hr className='result__line'/>
            </div>
        ))}
        </div>
      );
}

export default ResultsComponent;
