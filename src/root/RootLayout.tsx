import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../components/Index';
const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
