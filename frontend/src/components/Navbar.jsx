import * as React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let activeStyle = {
    textDecoration: "none",
  };

  let activeClassName = " m-4 font-bold";
  let inActiveClassName = "pl-2 hover:bg-amber-200";

  return (
    <nav className=" bg-white w-40 border-gray-200 drop-shadow">
      <ul className=" mt-6">
        <li className="w-full mb-4 hover:bg-amber-200">
          <NavLink
            to="/Home"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className={({ isActive }) => isActive ? activeClassName : inActiveClassName}>
            Home
          </NavLink>
        </li>
       <li  className="w-full mb-4  hover:bg-amber-200">
          <NavLink
            to="/Topics"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            Topics
          </NavLink>
        </li>
        <li  className="w-full mb-4  hover:bg-amber-200">
          <NavLink
            to="/History"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            History
          </NavLink>
        </li>
        <li className="w-full mb-4  hover:bg-amber-200">
          <NavLink
            to="/AboutUs"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}




// import React, { useEffect, useState } from "react"
// import { Link } from "react-router-dom"

// const navItems = [
//     {
//         id: 1,
//         title: "Home",
//         path: "/Home",
//     },
//     {
//         id: 2,
//         title: "Topics",
//         path: "/Topics",
//     },
//     {
//         id: 3,
//         title: "History",
//         path: "/History",
//     },
//     {
//         id: 4,
//         title: "About Us",
//         path: "/AboutUS",
//     },
// ]

// export default function Navbar({ refresh }) {
//     const [isOpen, setOpen] = useState(false)
//     const openMenu = () => {
//         setOpen(prevState => !prevState)
//     }

//     return (
//         <nav className="block flex-col top-0 bg-white border-gray-200 drop-shadow w-fit z-10">
//             <div className="flex flex-col justify-start  ">
//                 <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto py-4 md:py-0`}>
//                     <ul className="mt-3 md:mt-0 flex flex-col gap-y-4 md:gap-y-0 text-2xl md:text-base">
//                         {navItems.map(type => {
//                             return (
//                                 <li key={type.id} className="p-4 gap-10 w-full hover:bg-amber-200 min-w-[125px] active:bg-black-100 ">
//                                     <Link to={type.path}>
//                                         <span className={`${isOpen ? isOpen : "bg-amber-200"}p-2 pr-3 text-gray-700 rounded md:bg-transparent hover:font-bold`} aria-current="page">{type.title}</span>
//                                     </Link>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }

