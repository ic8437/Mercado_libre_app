import React from 'react';
import './App.css';
import SearchPage from './pages/search-page/search-page';
import DetailPage from './pages/detail-page/detail-page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetailComponent from './components/productdetai/product-detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id" component={DetailPage} />
        <Route exact path="/" render={() => <SearchPage showResults={false} />} />
        <Route path="/items" render={() => <SearchPage showResults={true} />} />
      </Switch>
    </Router>
  );
}

export default App;
