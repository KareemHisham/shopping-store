import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa";

const MiniHero = ({ children }: { children: ReactNode }) => {
    return (
        <div className="py-4 bg-mini-hero bg-no-repeat bg-center bg-cover h-[40vh]">
            <div className="flex items-center justify-center flex-col gap-3 h-full">
                {children}
                <ul className="flex items-center justify-center gap-1">
                    <li>
                        <Link to="" className="flex items-center gap-1 text-[16px] font-medium ">
                            <span className="hover:text-primary transition-colors duration-300">Home</span>
                            <span><FaAngleRight /></span>
                        </Link>
                    </li>
                    <li className="text-xs font-light"> Shop</li>
                </ul>
            </div>
        </div>
    )
}

export default MiniHero