import { Link } from 'react-router-dom';
import { RegisterForm } from '../../components/Index';

const Register = () => {
  return (
    <section className="h-[100vh] flex items-center flex-1">
      {/* Form side */}
      <div className="w-full px-3">
        {/* Head */}
        <div className="mb-5">
          <h2 className=" text-lg lg:text-xl font-bold">Create your account</h2>
          <p className="mt-2 text-base font-semibold text-grey">
            Welcome to Furniro
          </p>
        </div>

        {/* Form */}
        <RegisterForm />
        <div className="flex flex-col items-center mt-4">
          <span className="text-xs">OR</span>
          <Link to="/login" className=" text-primary">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
