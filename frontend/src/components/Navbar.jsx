import React from "react"
import Search from "./Search"
import UserAvatar from "./UserAvatar"



export default function Navbar() {
    return (
        <div className="flex justify-start h-fit min-w-fit w-[200px] top-0 mt-0 ml-2">
            <ul>
                <li className="p-4">Home</li>
                <li className="p-4">History</li>
                <li className="p-4">About Us</li>
            </ul>
        </div>
    )
}

