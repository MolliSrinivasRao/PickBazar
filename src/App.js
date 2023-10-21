import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { apiUrl } from './utils/api';
import ProductList from './components/ProductList';
import ProductContext from './context/ProductContext';
import Cartcontext from './context/Cartcontext';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, {
    products: [],
    totalprice: 0
  })
  const fetchData = async () => {
    const { data } = await axios.get(apiUrl);
    setProducts(data.data);
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='App'>
      <ProductContext.Provider value={products}>
        <Cartcontext.Provider value={{ cart, dispatch }}>
          <ProductList />
        </Cartcontext.Provider>
      </ProductContext.Provider>

    </div>
  );
}


export default App;