import React from "react"
import { axiosRequest } from "api"
import { useNavigate } from "react-router-dom"
import { Switcher } from 'components'


export default function Header() {

    const navigate = useNavigate();

    const onClick = async () => {
        const response = await axiosRequest.post("/logout")
        if (response.status === 200) {
            navigate('/')
        }
    }

    return (
        <div className="bg-white dark:text-white dark:bg-zinc-800 select-none relative flex shadow-md justify-between items-center h-24 m-auto p-4">
            <div className="flex justify-between items-center space-x-4">
                <img className="icon w-24 h-auto rounded" src="/images/logo.png" alt="Logo" />
                <h1 className="w-full text-xl">ALONE NO MORE, I WILL BE YOUR STUDY BUDDY!</h1>
            </div>
            <div className="flex flex-row items-center gap-x-5">
                <Switcher />
                <div className="flex rounded-full w-14 h-14 overflow-hidden items-center bg-white border hover:shadow-md ">
                    <button onClick={onClick} type="button" id="dropdownDefault" data-dropdown-toggle="dropdown"><img className="icon w-fit object-fill" src="/images/profile_avatar.jpg" alt="avatar" /></button>



                    {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
               
                <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    </ul>
                </div> */}

                </div>
            </div>

        </div>
    )
}

