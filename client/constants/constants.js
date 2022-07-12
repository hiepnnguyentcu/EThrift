const screens = {
    main_layout: "MainLayout",
    home: "Home",
    search: "Search",
    cart: "Cart",
    favourite: "Favourite",
    notification: "Notification",
    my_wallet:"My Wallet"
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

/*

OUTERWEAR
DRESSES | JUMPSUITS
SHIRTS
T-SHIRTS | SWEATSHIRTS
TOPS
KNITWEAR
JEANS
TROUSERS
SKIRTS | SHORTS
SHOES
BAGS
ACCESSORIES | SWIMWEAR
PERFUMES｜BEAUTY

*/

const tags = [
    {
        id: 1,
        label: "Shirts"
    },
    {
        id: 2,
        label: "Outerwear"
    },
    {
        id: 3,
        label: "Jeans"
    },
    {
        id: 4,
        label: "Sweatshirt"
    },
    {
        id: 5,
        label: "Shoes"
    },
    {
        id: 6,
        label: "Jumpsuit"
    },
    {
        id: 7,
        label: "Swimwear"
    },
    {
        id: 8,
        label: "Accessories"
    }
]

export default {
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags
}