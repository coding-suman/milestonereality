import React from 'react'
import MediaCard from './MediaCard'

const ServicesSection = () => {

    const data = [
        {
            title: "Plot",
            image: "/static/images/cards/contemplative-reptile.jpg",
            content: [
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
                "They are found across all continents except Antarctica."
            ]
        },
        {
            title: "Apartment",
            image: "/static/images/cards/contemplative-reptile.jpg",
            content: [
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
                "They are found across all continents except Antarctica."
            ]
        },
        {
            title: "Commercial",
            image: "/static/images/cards/contemplative-reptile.jpg",
            content: [
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
                "They are found across all continents except Antarctica."
            ]
        },
        {
            title: "Office Space",
            image: "/static/images/cards/contemplative-reptile.jpg",
            content: [
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
                "They are found across all continents except Antarctica."
            ]
        },
    ];

    return (
        <section className="service-categorys bg-gray-100 py-16 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4">
                {data.map((item, index) => (
                    <MediaCard
                        key={index}
                        title={item.title}
                        image={item.image}
                        content={item.content}
                    />
                ))}
            </div>
        </section>
    )
}

export default ServicesSection