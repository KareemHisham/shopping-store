import { Navigate, Outlet } from "react-router-dom";
import { AuthSideImg } from "../components/Index";
const AuthLayout = () => {
  const isAuth = false;
  return (
    <main>
      {isAuth ? <Navigate to="/" replace={true} /> : (
        <>
          <section className="flex items-center justify-center gap-10">
            <AuthSideImg />
            <Outlet />
          </section>
        </>
      )}
    </main>
  )
}

export default AuthLayout