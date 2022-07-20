import { icons, images } from "./";

const myProfile = {
  id:"1",
  name: "Hiep Nguyen",
  role:"admin", //or buyer/seller
  profile_image: images.profile,
  address: "No. 3145, Cockrell Ave, DFW - 76109",
};


const categories = [
  {
    id: 1,
    name: "Fast Food",
    icon: icons.burger,
  },
  {
    id: 2,
    name: "Fruit Item",
    icon: icons.cherry,
  },
  {
    id: 3,
    name: "Rice Item",
    icon: icons.rice,
  },
];


//seller: post item

//input fields: item name, brief, description, price, image(url string), 

const denim_jacket = {
  id: 1,
  name: "PRINTED DENIM JACKET",
  brief:"Cropped street-style",
  description:
    "Jacket with a lapel collar and long sleeves with buttoned cuffs. Chest flap pockets. Contrast all-over print. Button-up front fastening.",
  categories: [1, 2],
  price: 149.99,
  image: require("../assets/dummyData/Zara/printed_denim_jacket.jpeg"),
  link:"https://www.zara.com/vn/en/printed-denim-jacket---special-edition-p07215431.html?v1=161703849"
};


const linen_blend_suit_blazer = {
    id: 2,
    name: "LINEN BLEND BLAZER",
    brief:"Smart casual wear",
    description:
      "Blazer with a notched lapel collar and long sleeves with buttoned cuffs. Flap pockets at the hip and inside pocket detail. Back vents. Front button fastening.",
    categories: [1, 2],
    price: 199.99,
    //calories: 78,
    //isFavourite: true,
    image: require("../assets/dummyData/Zara/linen_blend_suit_blazer.jpeg"),
    link: "https://www.zara.com/vn/en/linen-blend-suit-blazer-p05583466.html?v1=199219072&v2=2112866"
  };


  const rustic_shirt = {
    id: 3,
    name: "RUSTIC SHIRT",
    brief:"Short sleeves",

    description:
      "Regular fit collared shirt made of an irregular-effect cotton fabric. Short sleeves. Chest patch pocket. Button-up front.",
    categories: [1, 2],
    price: 59.99,
    //calories: 78,
    //isFavourite: true,
    image: require("../assets/dummyData/Zara/rustic_shirt.jpeg"),
    link: "https://www.zara.com/vn/en/rustic-shirt-p01608304.html?v1=195973180&v2=2112866"
  };

  const lyocell_shirt = {
    id: 4,
    name: "LYOCELL SHIRT",
    brief:"Smart casual wear",

    description:
      "Relaxed-fit shirt made of lyocell fabric. Camp collar and short sleeves. Chest patch pocket. Side vents at the hem. Button-up front.",
    categories: [1, 2],
    price: 59.99,
    //calories: 78,
    //isFavourite: true,
    image: require("../assets/dummyData/Zara/lyocell_shirt.jpeg"),
    link: "https://www.zara.com/vn/en/lyocell-shirt-p07545245.html?v1=195972464&v2=2112866"
  };

  const rustic_dress_with_low_cut_back = {
    id: 5,
    name: "RUSTIC DRESS WITH LOW-CUT BACK",
    brief:"Summer collection",

    description:"Round neck dress with elastic smocking and wide contrast straps. Featuring a back opening, a ruffled hem and tie fastening at the back.",
    categories: [1, 2],
    price: 89.99,
    //calories: 78,
    //isFavourite: true,
    image: require("../assets/dummyData/Zara/rustic_dress_with_low_cut_back.jpeg"),
    link: "https://www.zara.com/vn/en/rustic-dress-with-low-cut-back-p09878155.html?v1=183949917&v2=2111785"
  };

  const comfort_coat = {
    id: 6,
    name: "COMFORT COAT",
    brief:"Summer collection",

    description:"Coat made of bi-stretch fabric. Notched lapel collar, long sleeves, hip welt pockets and an inside pocket. Central back vent at the hem and front button fastening.",
    categories: [1, 2],
    price: 89.99,
 
    image: require("../assets/dummyData/Zara/comfort_coat.jpeg"),
    link: "https://www.zara.com/vn/en/comfort-coat-p05070470.html?v1=167124629&v2=2112330"
  };

const menu = [
  {
    id: 1,
    name: "Must buy",
    list: [denim_jacket, lyocell_shirt, linen_blend_suit_blazer, rustic_shirt, rustic_dress_with_low_cut_back, comfort_coat],
  },
  {
    id: 2,
    name: "Nearby you",
    list: [denim_jacket, linen_blend_suit_blazer, lyocell_shirt],
  },
  {
    id: 3,
    name: "Popular",
    list: [denim_jacket, lyocell_shirt],
  },
  {
    id: 4,
    name: "Newest",
    list: [denim_jacket, rustic_shirt],
  },
  {
    id: 5,
    name: "Trending",
    list: [denim_jacket, linen_blend_suit_blazer, rustic_shirt],
  },
  {
    id: 6,
    name: "Recommended",
    list: [denim_jacket, lyocell_shirt, rustic_shirt],
  },
];

const banner_sale = [
  {
    id: 1,
    name: "Tyler Mitchell Fall Collection",
    description: "Zara Origins: Tyler Mitchell",
    image: require("../assets/dummyData/Zara/banner/Zara-Origins-Tyler-Mitchell-01.jpeg"),
    percentOff: 10,
    code: "ETHRIFT10",
  },
  {
    id: 2,
    name: "Tyler Mitchell Winter Collection",
    description: "Zara Origins: Tyler Mitchell",
    image: require("../assets/dummyData/Zara/banner/Zara-Origins-Tyler-Mitchell-17.jpeg"),
    percentOff: 30,
    code: "ETHRIFT30",
  },
  {
    id: 3,
    name: "Tyler Mitchell Fall Collection",
    description: "Zara Origins: Tyler Mitchell",
    image: require("../assets/dummyData/Zara/banner/Zara-Origins-Tyler-Mitchell-04.jpeg"),
    percentOff: 20,
    code: "ETHRIFT20",
  },
];

const myCart = [
  {
      ...linen_blend_suit_blazer,
      qty: 1
  },
  {
      ...comfort_coat,
      qty: 2
  },
  {
      ...lyocell_shirt,
      qty: 1
  }
]


export default {
  myProfile,
  categories,
  menu,
  banner_sale,
  myCart,
};
