import { Link } from 'react-router-dom';
import { Button } from '../../components/Index';

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
        <form action="" method="POST">
          <div className="form-group">
            <label className="label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="form-control"
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
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
