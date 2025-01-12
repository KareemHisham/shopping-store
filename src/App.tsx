import { LoginPage, AuthLayout, Register } from './auth/Index.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RootLayout, HomePage, Products, ProductDetails } from "./root/Index.ts"

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
