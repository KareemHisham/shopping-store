import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/Index';

const LoginPage = () => {
  return (
    <section className=" w-full h-[100vh] flex flex-1">
      {/** form section */}
      <div className="flex justify-center items-center  flex-1 ">
        <div className="w-4/5">
          <h2 className="text-xl font-bold">Login</h2>
          <p className="mt-2 text-base font-semibold text-grey">
            Login to access to your account
          </p>

          <div className="mt-4">
            <LoginForm />

            <div className="flex flex-col items-center mt-4">
              <span className="text-xs">OR</span>
              <Link to="/register" className=" text-primary">
                Create an account
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
