import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Page404 from './pages/404/PageNotFound';
import Policy from './pages/Policy/Policy';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoutes from './components/Private/PrivateRoutes';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import AdminPrivateRoute from './components/Private/AdminPrivateRoute';
import Admindashboard from './pages/Admin/Admindashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import AllUsers from './pages/Admin/AllUsers';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './pages/Search/Search';
import ProductDetails from './pages/Products/ProductDetails';
import CategoryProducts from './pages/Products/CategoryProducts';
import CartPage from './pages/CartPage/CartPage';
import AdminOrders from './pages/Admin/AdminOrders';




function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:slug' element={<ProductDetails />} />
        <Route path='/category/:slug' element={<CategoryProducts />} />
        <Route path='/dashboard' element={<PrivateRoutes />}>
          <Route path='user' element={<Dashboard />} />
          <Route path='user/orders' element={<Orders />} />
          <Route path='user/profile' element={<Profile />} />

        </Route>
        <Route path='/dashboard' element={<AdminPrivateRoute />}>
          <Route path='admin' element={<Admindashboard />} />
          <Route path='admin/orders' element={<Orders />} />
          <Route path='admin/profile' element={<Profile />} />
          <Route path='admin/create-category' element={<CreateCategory />} />
          <Route path='admin/create-product' element={<CreateProduct />} />
          <Route path='admin/update-product/:slug' element={<UpdateProduct />} />
          <Route path='admin/products' element={<Products />} />
          <Route path='admin/users' element={<AllUsers />} />
          <Route path='admin/allorders' element={<AdminOrders />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}




export default App;
