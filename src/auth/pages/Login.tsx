import { Link } from 'react-router-dom';
import { Button } from '../../components/Index';

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
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-relaxed focus:outline-primary focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-relaxed focus:outline-primary focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <Button type="submit" classes="bg-primary text-white text-bases w-full rounded-sm shadow-md p-2">Login</Button>
            </form>
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
