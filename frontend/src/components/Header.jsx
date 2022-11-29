import React from "react"
import Search from "./Search"
import UserAvatar from "./UserAvatar"

export default function Header() {
    return (
        <header className="justify-between">   
            <Search />
            <UserAvatar />           
        </header>
    )
}

