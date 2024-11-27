export const heroSlider = [
    {
        bgImg: "/her0bg.png",
        categories: "Dental Furnaces",
        type: "Dental",
        products: [
            {
                img: "/sample 1.png",
                productName: "APM Kanthal",
                type: "CERAMIC PRODUCTS",
            },
            {
                img: "/sample 2.png",
                productName: "Alumina - Boats And Crucibles",
                type: "CERAMIC PRODUCTS",
            },
            {
                img: "/sample 3.png",
                productName: "Graphite Heating Elements",
                type: "CERAMIC PRODUCTS",
            },
            {
                img: "/sample 4.png",
                productName: "Alumina - Boats And Crucibles",
                type: "CERAMIC PRODUCTS",
            },
        ],
    },
    {
        bgImg: "/dental-herobg.png",
        categories: "Laboratory Furnaces",
        type: "Laboratory",
        products: [
            {
                img: "/sample 1.png",
                productName: "Graphite Heating Elements",
                type: "CERAMIC PRODUCTS",
            },
            {
                img: "/sample 2.png",
                productName: "Alumina - Boats And Crucibles",
                type: "CERAMIC PRODUCTS",
            },
            {
                img: "/sample 3.png",
                productName: "Alumina - Boats And Crucibles",
                type: "CERAMIC PRODUCTS",
            },
            {
                img: "/sample 4.png",
                productName: "APM Kanthal",
                type: "CERAMIC PRODUCTS",
            },
        ],
    },
];

export const navLinks = [
    { menu: "ABOUT US", ref: "/about" },
    {
        menu: "CATEGORIES",
        ref: "",
        subMenu: [
            { img: "/blog-6.jpeg", menu: "dental", ref: "/categories/dental" },
            {
                img: "/blog-3.jpeg",
                menu: "laboratory",
                ref: "/categories/laboratory",
            },
        ],
    },
    { menu: "BLOGS", ref: "/blog" },
    { menu: "TESTIMONIALS", ref: "/testimonials" },
];


export const exploreList = [
    // {
    //     img: "/explore-1.png",
    //     icon: "/explore-icon-1.png",
    //     title: "Industries",
    //     desc: "Over 100 products for ceramic industry.",
    // },
    {
        img: "/explore-2.png",
        icon: "/explore-icon-2.png",
        title: "Dental",
        desc: "Over 2+ products for Dental Furnace.",
        ref: "/categories/dental"
    },
    {
        img: "/explore-3.png",
        icon: "/explore-icon-3.png",
        title: "Laboratory",
        desc: "Over 20+ products for Laboratory Furnace.",
        ref: "/categories/laboratory"
    },
];