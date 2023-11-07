import React, { useState } from 'react';
import SearchComponent from '../../components/search/search';
import ResultsComponent from '../../components/result-search/result-search';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function SearchPage({ showResults }) {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    history.push(`/items?search=${query}`);
  };

  return (
    <div>
      <SearchComponent
        onSearch={handleSearch}
        onQueryChange={(query) => setSearchQuery(query)}
      />
      {showResults && <ResultsComponent results={searchQuery} />}
    </div>
  );
}

export default SearchPage;
