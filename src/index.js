import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './scenes/home/Home';
import ProductList from './scenes/productList/ProductList';
import ProductDetail from './scenes/productDetail/ProductDetail';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import CartMenu from './scenes/global/CartMenu';
import Admin from './admin/Admin';
import AppBar from './scenes/global/AppBar';
import Dashboard from './admin/scenes/Dashboard';
import AdminProduct from './admin/scenes/products/AdminProduct';
import AdminProductBox from './admin/scenes/products/AdminProductBox';
import AdminProductDetail from './admin/scenes/products/AdminProductDetail';
import AdminProductEdit from './admin/scenes/products/AdminProductEdit';
import AdminProductAdd from './admin/scenes/products/AdminProductAdd';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        index:true,
        element: <Home />
      },
      {
        path:'product',
        element:<ProductList/>
      },
      {
        path:'product/page/:pageNum',
        element:<ProductList/>
      },
      {
        path:'product/:id',
        element:<ProductDetail/>
      },
      {
        path:'checkout',
        element:<Checkout/>
      },
      {
        path:'checkout/success',
        element:<Confirmation/>
      },
      {
        path:'cart',
        element:<CartMenu/>
      },
      
    ]
  },
  {
    path:'/admin',
    element:<Admin/>,
    children:[
      {
        index:true,
        element: <Dashboard />
      },
      {
        path:'/admin/product',
        element:<AdminProduct/>,
        children:[
          {
            index:true,
            element: <AdminProductBox />
          },
          {
            path:'/admin/product/page/:pageNum',
            element: <AdminProductBox />
          },
          {
            path:'/admin/product/:id',
            element: <AdminProductDetail />
          },
          {
            path:'/admin/product/add',
            element:<AdminProductAdd/>
          },
          {
            path:'/admin/product/edit/:id',
            element:<AdminProductEdit/>
          }
        ]
      },
     
  
    ]
  }
])
root.render(
  <React.StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

