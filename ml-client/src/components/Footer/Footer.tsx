import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
      <span className="text-white text-xl">
        Made with love &#9829; by the {" "}
        <a href="https:monadical.com" className="underline">
           Monadical 
        </a> 
        {" "} team
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-xl text-white sm:mt-0">
        <li>
          <a href="https://github.com/Monadical-SAS/" className="mr-8 underline md:mr-6 ">
            github: Monadical SAS
          </a>
          
        </li>
        <li>
          <a href="https://twitter.com/monadicalHQ" className="mr-8 underline md:mr-6">
            twitter: @monadicalHQ
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
