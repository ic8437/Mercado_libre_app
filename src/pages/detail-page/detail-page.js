import React, { useState, useEffect } from 'react';
import SearchComponent from '../../components/search/search';
import ProductDetailComponent from '../../components/productdetai/product-detail';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DetailPage({ match }) {
  const itemId = match.params.id;
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query) => {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then(response => {
        setSearchResults(response.data.results);
        setShowResults(true); 
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
    history.push(`/items?search=${query}`);
  };
  return (
    <div>
      <SearchComponent
        onSearch={handleSearch}
        onQueryChange={(query) => setSearchQuery(query)}
      />
      <ProductDetailComponent
        productDetails={itemId}
      />
    </div>
  );
}

export default DetailPage;
