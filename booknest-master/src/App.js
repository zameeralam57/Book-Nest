import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home';
import { Route, Routes } from 'react-router-dom';
import { GoogleLogin} from "@react-oauth/google";
import SignUp from './components/user/signup/signup';
import SignIn from './components/user/signIn/signin';
import Cart from './components/user/cart/cart';
import Checkout from './components/user/checkout/checkout';
import MyAccount from './components/user/myaccount/myaccount';
import Donate from './components/DonateBooks/donatebooks';
import DonateForm from './components/DonateBooks/donateform';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory } from './router-config/categorySlice';
import { fetchTopProduct } from './router-config/topProductSlice';
import FreeBooks from './components/FreeBooks/freeBooks';
import Update from './components/user/myaccount/update';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
//import TopProductList from '.src/components/topInteresting';

import Books from './components/books/books/books';
import SellboooksForm from './components/sellbooks/sellbook';
import { fetchState } from './router-config/stateSlice';
import About from './components/About/about';
import UserBooks from './components/user/myaccount/userbook';

import OrderDetails from './components/user/myaccount/order/orderDetails';
import ViewDescription from './components/viewDescription/viewDescription';

import Contact from "./components/contact/contact";
import UpdateBooks from './components/user/myaccount/updateBook/updateBook';
import Donetors from './components/Donaters/donater';
import ForgetPassword from './components/user/ForgetPassword/forgetpassword';
import ChangePassword from './components/user/changepassword.js/changepassword';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCategory());
    dispatch(fetchTopProduct());
    dispatch(fetchState());
  },[]);
  

  return <> 
  <Routes>
   <Route path='/' element={ <Home/>}/>
   <Route path='/signup' element={<SignUp/>}/>
   <Route path='/signin' element={<SignIn/>}/>
   <Route path='/aboutUs' element={<About/>}/>
   <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
   <Route path='/freebooks' element={<FreeBooks/>}/>
   <Route path='/checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>
   <Route path='/myaccount' element={<ProtectedRoute><MyAccount/></ProtectedRoute>}/>
   <Route path='/donate' element={<Donate/>}/>
   <Route path='/donateform' element={<ProtectedRoute><DonateForm/></ProtectedRoute>}/>
   <Route path='/sellbooks' element={<ProtectedRoute><SellboooksForm/></ProtectedRoute>}/>
   <Route path='/update' element={<ProtectedRoute><Update/></ProtectedRoute>}/>
   <Route path= "/viewDescription" element={<ViewDescription/>}/>
   <Route path="/book" element={<Books/>}/>

   <Route path='/userBook' element={<UserBooks/>} />
  <Route path='/updateBooks' element={<UpdateBooks/>}/>
  <Route path='/orderDetails' element={<OrderDetails/>}/>
  <Route path='/contact' element={<Contact/>}/>

   <Route path='/userBook' element={<ProtectedRoute><UserBooks/></ProtectedRoute>} />
  <Route path='/updateBooks' element={<ProtectedRoute><UpdateBooks/></ProtectedRoute>}/>
  <Route path='/orderDetails' element={<ProtectedRoute><OrderDetails/></ProtectedRoute>}/>
  <Route path='/donetors' element={<Donetors />} />
  <Route path='/forgetPassword'element={<ForgetPassword/>}/>
  <Route path='/changePassword' element={<ChangePassword/>}/>
 
  </Routes>
  </>
}
export default App;
