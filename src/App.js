import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import BikesCheckout from './Pages/BikesCheckout/BikesCheckout';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Blogs/Blogs';
import AddBikes from './Pages/AddBikes/AddBikes';
import ManageBikes from './Pages/ManageBikes/ManageBikes';
import Inventory from './Inventory/Inventory';
import MyItems from './MyItems/MyItem';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/bikes/:bikeId' element={
          <RequireAuth>
            <BikesCheckout/>
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        
        <Route path="/bikes" element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
        }></Route>

        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        }></Route>

        <Route path="/add" element={
          <RequireAuth>
            <AddBikes/>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageBikes/>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
