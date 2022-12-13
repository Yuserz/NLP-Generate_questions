import React from "react"
export default function Header() {
    return (
        <div className="bg-white relative flex shadow-md justify-between items-center h-24 m-auto p-4">
            <div className="flex justify-between items-center space-x-4">
                <img className="icon w-24 h-auto rounded" src="/images/logo.png" alt="Logo" />
                <h1 className="w-full text-xl">ALONE NO MORE, I WILL BE YOUR STUDY BUDY!</h1>
            </div>
            <div className="flex rounded-full w-14 h-14 overflow-hidden items-center bg-white border ">
                <img className="icon w-fit object-fill" src="/images/profile_avatar.jpg" alt="avatar" />
            </div>
        </div>
    )
}

