import React from "react"
import { axiosRequest } from "api"
import { Link, useNavigate } from "react-router-dom"


export default function Header() {

    const navigate = useNavigate();

    const onClick = async() => {
      const response = await axiosRequest.post("/logout")
      if(response.status === 200) {
        navigate('/')
      }
    }

    return (
        <div className="bg-white select-none relative flex shadow-md justify-between items-center h-24 m-auto p-4">
            <div className="flex justify-between items-center space-x-4">
                <img className="icon w-24 h-auto rounded" src="/images/logo.png" alt="Logo" />
                <h1 className="w-full text-xl">ALONE NO MORE, I WILL BE YOUR STUDY BUDDY!</h1>
            </div>
            <div className="flex rounded-full w-14 h-14 overflow-hidden items-center bg-white border hover:shadow-md ">
                <button onClick={onClick}><img className="icon w-fit object-fill" src="/images/profile_avatar.jpg" alt="avatar" /></button>
            </div>
        </div>
    )
}

