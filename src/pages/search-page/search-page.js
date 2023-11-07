import React, { useState } from 'react';
import SearchComponent from '../../components/search/search';
import ResultsComponent from '../../components/result-search/result-search';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';

function SearchPage({ showResults }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = (query) => {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(response => {
      setSearchResults(response.data.results);
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
      {showResults && <ResultsComponent results={searchResults} />}
    </div>
  );
}

export default SearchPage;
