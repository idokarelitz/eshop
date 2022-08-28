import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import About from "./components/About";
import Master from "./pages/Master";


function App() {
  
  
  const user = useSelector((state) => state.user.currentUser)
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/master" element={<Master/>} />
        <Route path="/register" element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <Register />
            )
          } />
        <Route path="/login" element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <Login />
            )
          } />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
