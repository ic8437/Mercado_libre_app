import React, { useState, useEffect } from 'react';
import SearchComponent from '../../components/search/search';
import ProductDetailComponent from '../../components/productdetai/product-detail';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ResultsComponent from '../../components/result-search/result-search';

function DetailPage({ match }) {
  const itemId = match.params.id;
  const history = useHistory();
  let showResults = false
  let showDetail = true
  let searchQuery
    
  const handleSearch = (query) => {
    searchQuery = query;
    if (query === 'query_inicial') {
        showResults= false;
        showDetail = true;
    }else{
        searchQuery = query;
        showResults = true;
        showDetail = false;
        history.push(`/items?search=${searchQuery}`);
    }
  };

  useEffect(() => {
    showResults = false;
    showDetail = true;
  })

  return ( 
    <div>
      <SearchComponent onSearch={handleSearch} />
      {showDetail && <ProductDetailComponent productDetails={itemId} />}
      {showResults && <ResultsComponent results={searchQuery} />}
    </div>
  );
}

export default DetailPage;
