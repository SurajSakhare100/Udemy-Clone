import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Categories from './Component/Categories.jsx';
import About from './Component/About.jsx';
import Contact from './Component/Contact.jsx';
import Login from './Component/LogIn.jsx';
import SignUp from './Component/SignUp.jsx';
import Home from './Component/Home.jsx';
import ProductPage from './Component/ProductPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <App />,
//     children:[
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/categories",
//         element: <Categories />
//       },
//       {
//         path: "/login",
//         element: <Login />
//       },
//       {
//         path: "/signup",
//         element: <SignUp />
//       },]
// }
// ] 
// );


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route
      path=''
      element={<App />} >
    <Route
      path='/'
      element={<Home />} />
    <Route
      path="about"
      element={<About />}
    />
    <Route
      path="contact"
      element={<Contact />}
    />
    <Route
      path="categories"
      element={<Categories />}
    />
    <Route
      path="login"
      element={<Login />}
    />
    <Route
      path="signup"
      element={<SignUp />}
    />
    <Route
      path="productpage"
      element={<ProductPage />}
    />
    </Route>
  </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
