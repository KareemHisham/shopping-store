import loginImg from '../../../public/assets/collection/image.png';
import logo from '../../../public/assets/logo/logo.svg';
const AuthSideImg = () => {
    return (
        <div className="flex-1 hidden sm:inline relative h-[100vh] after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-45 after:z-0">
            {/** text on image */}
            <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] z-10">
                <div className="flex flex-col font-bold text-slate-800">
                    {/** logo */}
                    <div className="flex items-center ">
                        <img src={logo} alt="website logo" width={120} className='object-cover' draggable="false" />
                        <h2 className="text-xxl text-white">Furniro</h2>
                    </div>
                    <p className="md:text-md lg:text-lg shadow-lg mt-7 leading-snug text-white">
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