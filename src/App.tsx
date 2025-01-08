import { LoginPage, AuthLayout, Register } from './auth/Index.ts';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const AppRouter = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  }
]);
function App() {
  return <RouterProvider router={AppRouter} />
}

export default App;
