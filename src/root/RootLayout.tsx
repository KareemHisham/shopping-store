import { Outlet } from 'react-router-dom';
import NavBar from '../components/layout/nav/Nav';
const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default RootLayout;
