import React from "react";
import { CgClose } from "react-icons/cg";
type Props = {};

function Navbar({}: Props) {
  return (
    <div>
      <div className="bg-[#f33c46] top-0 sticky h-14  flex justify-center items-center">
        <h1 className="text-white bg-transparent  font-bold font-mono text-2xl font-custom ">
          Pokedex
        </h1>
      </div>
      <div className="bg-white shadow-md py-2  px-5 flex justify-center items-center ">
        <label className="relative block w-full ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 focus:border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:ring-transparent   sm:text-sm"
            placeholder="Search for Pokemon"
            type="search"
            name="search"
          />
        </label>

        {/* search */}
      </div>
    </div>
  );
}

export default Navbar;
