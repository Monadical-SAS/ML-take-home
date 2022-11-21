import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-700 border-gray-200 px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://monadical.com/static/core/img/logo.png"
            className="h-6 mr-3 sm:h-9"
            alt="Monadical Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Monadical
          </span>
        </a>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <a
                href="https://monadical.com/principles.html"
                className="text-lg font-bold block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:underline decoration-2 underline-offset-8 md:p-0"
                aria-current="page"
              >
                Principles
              </a>
            </li>
            <li>
              <a
                href="https://monadical.com/team.html"
                className="text-lg font-bold block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:underline decoration-2 underline-offset-8 md:p-0"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="https://monadical.com/blog.html"
                className="text-lg font-bold block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:underline decoration-2 underline-offset-8 md:p-0"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://monadical.com/about.html"
                className="text-lg font-bold block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:underline decoration-2 underline-offset-8 md:p-0"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
