import React from 'react';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './views/Dashboard/Dashboard';
import Product from './views/Product/Product';
import User from './views/User/User';

function App() {
  return (
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/user" element={<User />}/>
            <Route path="/product" element={<Product />}/>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    
  );
}

export default App;
