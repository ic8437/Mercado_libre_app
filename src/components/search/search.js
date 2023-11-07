import React, { useState } from 'react';
import MESSAGES from '../../data/app-messages';
import '../../assets/styles/style.scss';
import 'font-awesome/css/font-awesome.min.css';
import image from '../../assets/images/mer.jpg';
function SearchComponent({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  }

  return (
    <div className="search__banner">
      <div className="search__header">
        <div>
        <a href="/"><img className="search__img" src={image} alt="logo mercado libre" /></a>
        </div>
        <div className="search__content">
          <input
            className="search__input"
            type="text"
            placeholder={`${MESSAGES.search.TitleSearch}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(query);
                }
              }}
          />
          <button className="search__button" onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
