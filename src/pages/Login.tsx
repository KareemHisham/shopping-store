import loginImg from '../assets/image.png';
import logo from '../assets/logo.svg';
const LoginPage = () => {
  return (
    <section className=" w-full h-[100vh] flex">
      {/** image section */}
      <div className="w-1/2 hidden sm:inline relative">
        {/** text on image */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col  font-bold text-slate-800">
            {/** logo */}
            <div className="flex items-center ">
              <img src={logo} alt="website logo" width={'120'} />
              <h2 className="text-xxl ">Furniro</h2>
            </div>
            <p className="text-lg shadow-lg mt-7 leading-snug">
              Welcome to Furniro
            </p>
          </div>
        </div>
        <img
          src={loginImg}
          alt="furniture"
          className="w-full h-full object-cover"
        />
      </div>{' '}
      {/** form section */}
      <div className="flex justify-center items-center  flex-1 ">
        <div className="w-4/5">
          <h2 className="text-xl font-bold">Login</h2>
          <p className="mt-2 text-base font-semibold text-slate-600">
            Login to access to your account
          </p>
          <div className="mt-4">
            <form>
              <div className="mb-4">
                {' '}
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  {' '}
                  Username{' '}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-relaxed focus:outline-primary focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                {' '}
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  {' '}
                  Password{' '}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-relaxed focus:outline-primary focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <button className="bg-primary text-white text-bases w-full rounded-sm shadow-md p-2">
                Login
              </button>
            </form>
          </div>
        </div>{' '}
      </div>
    </section>
  );
};

export default LoginPage;
