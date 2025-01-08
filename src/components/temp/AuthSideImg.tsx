import loginImg from '../../../public/assets/collection/image.png';
import logo from '../../../public/assets/logo/logo.svg';
const AuthSideImg = () => {
    return (
        <div className="flex-1 hidden sm:inline relative h-[100vh]">
            {/** text on image */}
            <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                <div className="flex flex-col font-bold text-slate-800">
                    {/** logo */}
                    <div className="flex items-center ">
                        <img src={logo} alt="website logo" width={'120'} className='object-cover' />
                        <h2 className="text-xxl ">Furniro</h2>
                    </div>
                    <p className="md:text-md lg:text-lg shadow-lg mt-7 leading-snug ">
                        Welcome to Furniro
                    </p>
                </div>
            </div>
            <img
                src={loginImg}
                alt="furniture"
                className="w-full h-full object-cover"
            />
        </div>
    )
}

export default AuthSideImg