import * as React from "react";
import { NavLink } from "react-router-dom";

// Define the active/inactive class names in an object
const styles = {
  active: "m-4 font-bold bg-amber-200",
  inactive: "pl-2 w-full hover:bg-amber-200",
};

export default function Navbar() {
  // Define the list of items to be rendered in the navbar
  const items = [
    {
      id: "1",
      title: "Home",
      path: "/Home",
    },
    {
      id: "2",
      title: "Topics",
      path: "/Topics",
    },
    {
      id: "3",
      title: "History",
      path: "/History",
    },
    {
      id: "4",
      title: "About Us",
      path: "/AboutUs",
    },
  ];

  return (
    <nav className="bg-white w-40 select-none border-gray-200 drop-shadow">
      <ul className="mt-6">
        {/* Use map() to generate the list items from the items array */}
        {items.map((item) => (
          <li key={item.id} className="w-full p-4 hover:bg-amber-200">
            <NavLink
              to={item.path}
              // Use the styles object to determine the class name
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
