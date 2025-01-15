import MiniHero from "../../components/sections/hero/MiniHero"
import logoIcon from "../../../public/assets/logo/favicon.png"

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { ContactForm, Features } from "../../components/Index";


const ContactUs = () => {
    return (
        <>
            <MiniHero breadcrumbLinks={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "" }]}>
                <div className="flex flex-col items-center gap-3">
                    <img src={logoIcon} alt="Logo" width={50} />
                    <h1 className="text-xl font-bold tracking-[5px]">Contact</h1>
                </div>
            </MiniHero>

            <section className="pb-4 pt-6">
                {/* Head */}
                <div className="*:text-center md:w-2/5 mx-auto mb-10">
                    <h2 className="font-semibold text-lg md:text-xl mb-3">Get In Touch With Us</h2>
                    <p className="text-lightGrey text-xs">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>

                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:w-3/4 mx-auto">
                        {/* Address */}
                        <div className="mb-10 md:mb-0">
                            <address className="flex items-baseline gap-2 mb-5">
                                <span>
                                    <FaLocationDot />
                                </span>
                                <div>
                                    <span className="font-medium
                                    ">Address</span>
                                    <p className="text-xs">236 5th SE Avenue, New York NY10000, United States</p>
                                </div>
                            </address>

                            <div className="flex items-baseline gap-2 mb-5">
                                <span>
                                    <FaPhoneAlt />
                                </span>
                                <div>
                                    <span className="font-medium">Phone</span>
                                    <ul>
                                        <li className="text-xs">Mobile: +(84) 546-6789</li>
                                        <li className="text-xs"> Hotline: +(84) 456-6789</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-baseline gap-2">
                                <span>
                                    <FaClock />
                                </span>
                                <div>
                                    <span className="font-medium
                                    ">Working Time</span>
                                    <ul>
                                        <li className="text-xs">Monday-Friday: 9:00 - 22:00</li>
                                        <li className="text-xs"> Saturday-Sunday: 9:00 - 21:00</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        {/* Form */}
                        <ContactForm />
                    </div>

                </div>

            </section>
            <Features />
        </>
    )
}

export default ContactUs