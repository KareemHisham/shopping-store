import diningPic from "../../public/assets/HomePage/product_1.png"
import livingPic from "../../public/assets/HomePage/Image-living room.png"
import bedroomPic from "../../public/assets/HomePage/product_2.png"



import product_1 from "../../public/assets/HomePage/product/product_1.png"
import product_2 from "../../public/assets/HomePage/product/product_2.png"
import product_3 from "../../public/assets/HomePage/product/product_3.png"
import product_4 from "../../public/assets/HomePage/product/product_4.png"
import product_5 from "../../public/assets/HomePage/product/product_5.png"
import product_6 from "../../public/assets/HomePage/product/product_6.png"
import product_7 from "../../public/assets/HomePage/product/product_7.png"
import product_8 from "../../public/assets/HomePage/product/product_8.png"



export const FOOTER_links = [
    {
        id: 1,
        title: "home",
        url: "/home"
    },
    {
        id: 2,
        title: "shop",
        url: "/shop"
    },
    {
        id: 3,
        title: "about",
        url: "/about"
    },
    {
        id: 4,
        title: "contact",
        url: "/contact"
    },
]
export const FOOTER_HELPLIST = [
    {
        id: 1,
        title: "payment option",
        url: "/payment"
    },
    {
        id: 2,
        title: "returns",
        url: "/returns"
    },
    {
        id: 3,
        title: "Privacy Policies",
        url: "/policy"
    },
]
export const SIMPLE_PRODUCT = [
    {
        id: 1,
        img: diningPic,
        title: "dining",
        url: "/dining"
    },
    {
        id: 2,
        img: livingPic,
        title: "living",
        url: "/living"
    },
    {
        id: 3,
        img: bedroomPic,
        title: "bedroom",
        url: "/bedroom"
    },
]
export const PRODUCTS = [
    {
        id: 1,
        img: product_1,
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: 3500,
        discount: 30,
        isNew: false,
        url: "/syltherine"
    },
    {
        id: 2,
        img: product_2,
        title: "Leviosa",
        description: "Stylish cafe chair",
        price: 2500,
        discount: null,
        isNew: false,
        url: "/Leviosa"
    },
    {
        id: 3,
        img: product_3,
        title: "Lolito",
        description: "Luxury big sofa",
        price: 7000,
        discount: 50,
        isNew: false,
        url: "/lolito"
    },
    {
        id: 4,
        img: product_4,
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: 5000,
        discount: null,
        isNew: true,
        url: "/respira"
    },
    {
        id: 5,
        img: product_5,
        title: "Grifo",
        description: "Night lamp",
        price: 1500,
        discount: null,
        isNew: false,
        url: "/grifo"
    },
    {
        id: 6,
        img: product_6,
        title: "Muggo",
        description: "Small mug",
        price: 15000,
        discount: null,
        isNew: true,
        url: "/muggo"
    },
    {
        id: 7,
        img: product_7,
        title: "Pingky",
        description: "Cute bed set",
        price: 14000,
        discount: 50,
        isNew: false,
        url: "/pingky"
    },
    {
        id: 8,
        img: product_8,
        title: "Potty",
        description: "Minimalist flower pot",
        price: 50000,
        discount: null,
        isNew: true,
        url: "/potty"
    },
]