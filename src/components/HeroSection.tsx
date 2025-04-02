import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-blue-900 text-white hero-bg-image">
            <div className="flex flex-col items-center justify-center bg-amber-950 bg-opacity-70 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Welcome to Milestone Realty</h1>
                <p className="text-lg mb-8">
                    Your trusted partner in construction and infrastructure development.
                </p>
                <a
                    href="/contact"
                    className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition duration-300"
                >
                    Get in Touch
                </a>
            </div>
            <div className="mt-8">
                <Image
                    src="/next.svg"
                    alt="Milestone Realty Logo"
                    width={150}
                    height={150}
                    className="rounded-full"
                />
            </div>
        </section>
    )
}

export default HeroSection