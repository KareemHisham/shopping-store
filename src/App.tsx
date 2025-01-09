import { LoginPage, AuthLayout, Register } from './auth/Index.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './root/pages/HomePage.tsx';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
