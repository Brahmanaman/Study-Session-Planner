import React from "react";

const Header = ({ setToggle }) => {
  return (
    <>
      <div className="h-17.5">
        <div className="flex items-center justify-between bg-stone-900 px-8 h-full shadow-amber-800 shadow-md">
          <h1 className="text-2xl font-serif tracking-wider">Study Session Planner</h1>
          <div className="hidden md:block">
            <ul className="flex items-center justify-center gap-10 font-serif">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <button
              onClick={() => setToggle((prev) => !prev)}
              className="bg-blue-500 px-4 py-1 rounded cursor-pointer font-semibold hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
