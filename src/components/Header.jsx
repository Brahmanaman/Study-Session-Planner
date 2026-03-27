import React from "react";

const Header = ({ setToggle }) => {
  return (
    <>
      <div className="h-17.5">
        <div className="flex items-center justify-between bg-stone-900 px-3 rounded h-full">
          <h1>Logo</h1>
          <div>
            <ul className="flex items-center justify-center gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
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
