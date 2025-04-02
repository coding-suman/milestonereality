import { Mail, Phone } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-blue-950 text-white'>
            <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-lg font-semibold">
                        Our Mission
                    </h4>
                    <p className="text-sm">
                        To provide the best construction and infrastructure services to our clients with a focus on quality, safety, and sustainability.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">
                        Quick Links
                    </h4>
                    <ul>
                        <li>
                            <Link href="/" className="text-sm">Home</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="text-sm">Projects</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-sm">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-sm">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">
                        Office
                    </h4>
                    <ul>
                        <li className="text-sm">Concorde Neo</li>
                        <li className="text-sm">Thanisandra Main Rd, Markandhaiha Nagar,</li>
                        <li className="text-sm">RK Hegde Nagar, Bengaluru, Karnataka 560064 India</li>
                        {/* <li className="text-sm">India</li> */}
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">
                        Suport
                    </h4>
                    <ul>
                        <li>
                            <Link className="text-sm" href="tel:9650657325"><Phone /> 9650657325</Link>
                        </li>
                        <li>
                            <Link className="text-sm" href="tel:9620922635"><Phone /> 9620922635</Link>
                        </li>
                        <li>
                            <Link className="text-sm" href="mailto:ankit10198@gmail.com"><Mail />ankit10198@gmail.com</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="text-center p-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Milestone Realty. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer