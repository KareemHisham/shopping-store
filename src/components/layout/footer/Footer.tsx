import { FooterList } from "../../Index"
import { FOOTER_links, FOOTER_HELPLIST } from "../../../constant/Index"
const Footer = () => {
    return (
        <footer className="py-4 bg-tertiary">
            <div className="container">
                <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">

                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold mb-5">Furniro.</h2>
                        <p className="text-lightGrey text-xs w-[250px]">400 University Drive Suite 200 Coral Gables,
                            FL 33134 USA</p>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <span className="footer_title mb-5 block">Links</span>
                        <FooterList items={FOOTER_links} />
                    </div>

                    <div className="mb-4 md:mb-0">
                        <span className="footer_title mb-5 block">Help</span>
                        <FooterList items={FOOTER_HELPLIST} />
                    </div>

                    <div className="mb-4 md:mb-0">
                        <span className="footer_title mb-5 block">NewsLetter</span>
                        <form action="" method="POST" className="flex items-end gap-1">
                            <input type="email" name="email" placeholder="Enter your email" className="text-xs border-b-2 outline-none border-black bg-transparent" />
                            <button type="submit" className="text-[14px] border-b-2 border-black font-medium">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer