import diningPic from '../../public/assets/HomePage/product_1.png';
import livingPic from '../../public/assets/HomePage/Image-living room.png';
import bedroomPic from '../../public/assets/HomePage/product_2.png';

import feature_1 from '../../public/assets/shapes/cup.png';
import feature_2 from '../../public/assets/shapes/warranty.png';
import feature_3 from '../../public/assets/shapes/shipping.png';
import feature_4 from '../../public/assets/shapes/customer-support.png';

export const FOOTER_links = [
  {
    id: 1,
    title: 'home',
    url: '/home',
  },
  {
    id: 2,
    title: 'shop',
    url: '/shop',
  },
  {
    id: 3,
    title: 'about',
    url: '/about',
  },
  {
    id: 4,
    title: 'contact',
    url: '/contact',
  },
];
export const FOOTER_HELPLIST = [
  {
    id: 1,
    title: 'payment option',
    url: '/payment',
  },
  {
    id: 2,
    title: 'returns',
    url: '/returns',
  },
  {
    id: 3,
    title: 'Privacy Policies',
    url: '/policy',
  },
];
export const SIMPLE_PRODUCT = [
  {
    id: 1,
    img: diningPic,
    title: 'dining',
    url: '/dining',
  },
  {
    id: 2,
    img: livingPic,
    title: 'living',
    url: '/living',
  },
  {
    id: 3,
    img: bedroomPic,
    title: 'bedroom',
    url: '/bedroom',
  },
];
export const FEATURES = [
  {
    id: 1,
    title: 'High Quality',
    description: 'crafted from top materials',
    img: feature_1,
  },
  {
    id: 2,
    title: 'Warranty Protection',
    description: 'Over 2 years',
    img: feature_2,
  },
  {
    id: 3,
    title: 'Free Shipping',
    description: 'Order over 150 $',
    img: feature_3,
  },
  {
    id: 4,
    title: '24 / 7 Support',
    description: 'Dedicated support',
    img: feature_4,
  },
];
