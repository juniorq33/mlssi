import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold">MLSsi</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}>
                                {navbar ? ( <GiHamburgerMenu/> ) : (<GiHamburgerMenu/> )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? "block" : "hidden"}`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-pink-600 font-bold">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="text-gray-600 hover:text-pink-600 font-bold">
                                <NavLink to="Stats">Stats</NavLink>
                            </li>
                            <li className="text-gray-600 hover:text-pink-600 font-bold">
                                <NavLink to="Goals">Goals</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}