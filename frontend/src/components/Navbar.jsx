import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosRequest } from "api"

const navItems = [
    {
        id: 1,
        title: "Home",
        path: "/Home",
    },
    {
        id: 2,
        title: "Test",
        path: "/TestPage",
    },
    {
        id: 3,
        title: "Topics",
        path: "/Topics",
    },
    {
        id: 3,
        title: "History",
        path: "/History",
    },
    {
        id: 4,
        title: "About Us",
        path: "/AboutUS",
    },
]

export default function Navbar({refresh}) {
    const [isOpen, setOpen] = useState(false)
    const [length, setLength] = useState(0)


    return (
        <nav className="block flex-col top-0 bg-white border-gray-200  drop-shadow w-fit z-10">
            <div className="flex flex-col justify-start  ">
                <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto py-4 md:py-0`}>
                    <ul className="mt-3 md:mt-0 flex flex-col gap-y-4 md:gap-y-0 text-2xl md:text-base">
                        {navItems.map(type => {
                            return (
                                <li key={type.id} className="p-4 gap-10 w-full hover:bg-amber-200 min-w-[120px]  active:bg-amber-200 ">
                                    <Link to={type.path}>
                                        <span className="w-full min-w-fit text-gray-700 rounded md:bg-transparent  md:p-0 hover:font-bold" aria-current="page">{type.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}


