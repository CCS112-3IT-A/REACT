import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductList from './components/Productt';
import ViewCart from './components/ViewCart';
import logo from './logo.png'; // Your logo file

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Company Logo" style={{ width: '50px', marginRight: '10px' }} />
            Company Name
          </Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">Proceed to Shopping</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">My Cart</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/cart">
            <ViewCart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome to our Store!</h1>
      <p className="lead">Browse our products and start shopping now.</p>
      <hr className="my-4" />
      <p>Choose from a wide range of products.</p>
      <Link className="btn btn-primary btn-lg" to="/products" role="button">Proceed to Shopping</Link>
    </div>
  );
};

export default App;
