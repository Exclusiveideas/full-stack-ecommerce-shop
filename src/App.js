import Cart from "./pages/Cart";
import {useEffect } from 'react'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector(state => state.user.currentUser);
  return (    
  <Router> 
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/products/:category">
          <Route index element={<ProductList />} />
        </Route>
        <Route path="/product/:id">
          <Route index element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login">
          { user ? <Route index element={<Navigate replace to="/" />} /> 
          : <Route index element={<Login />} />}
        </Route>
        <Route path="/register">
          { user ? <Route index element={<Navigate replace to="/" />} /> 
          : <Route index element={<Register />} />}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
