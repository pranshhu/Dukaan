export const PRODUCT_CATEGORIES = [
    {
        label : "UI kits",
        value : "ui_kits" as const,
        featured : [{
            name : "Editor picks",
            href: "#",
            imageSrc: "/nav/ui-kits/mixed.jpg",
        },
        {
            name : "New arrivals",
            href: "#",
            imageSrc: "/nav/ui-kits/blue.jpg",
        },
        {
            name : "Best sellers",
            href: "#",
            imageSrc: "/nav/ui-kits/purple.jpg",
        },
    ]
    },
    {
        label : "Icons",
        value : "icons" as const,
        featured : [{
            name : "Favorite icon picks",
            href: "#",
            imageSrc: "/nav/icons/picks.jpg",
        },
        {
            name : "New arrival icons",
            href: "#",
            imageSrc: "/nav/icons/new.jpg",
        },
        {
            name : "Best seller icons",
            href: "#",
            imageSrc: "/nav/icons/bestsellers.jpg",
        },
    ]
    }
]