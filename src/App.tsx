import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LoginPage, AuthLayout, Register } from './auth/Index.ts';
import { RootLayout, HomePage, Products, ProductDetails, ContactUs, Cart } from "./root/Index.ts"

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={AppRouter} />;
}

export default App;
