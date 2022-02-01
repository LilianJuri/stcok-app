import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductUpdate from './pages/ProductUpdate';

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:productsID' element={<ProductUpdate />} />
            </Routes>
        </React.Fragment>
    )
}

export default App;