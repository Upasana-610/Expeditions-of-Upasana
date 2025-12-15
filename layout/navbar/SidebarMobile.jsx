import React, { Fragment } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

import { NavbarMenu } from "./NavbarItems";

import { ResumeData } from "@/constants/ResumeData";

const MobileNavbar = ({ showMenu, setShowMenu }) => {
  return (
    <Fragment>
      <div
        className={`w-full h-screen bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] fixed ${
          showMenu ? null : "hidden"
        } top-0 left-0 z-10`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {/* Sidebar */}
        <div
          className={`w-[70%] h-screen bg-white dark:bg-black shadow-sm shadow-gray-600 dark:shadow-gray-300 ${
            showMenu ? null : "translate-x-[-450px]"
          } transition-all duration-1000`}
        >
          <div className="p-3 bg-gray-200 dark:bg-gray-800 flex justify-between items-center gap-3">
            {/* Name Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-pink-300 dark:border-[#07d0e5]">
                <Image
                  alt="Upasana Pan logo - Upa's Expeditions"
                  height={40}
                  priority
                  src="/myimage/Pink.png"
                  width={40}
                />
              </div>

              <p className="text-gray-400 flex">
                <span className="text-lg font-bold">UPASANA</span>
              </p>
            </div>

            {/* Sidebar Close button */}
            <button
              className="text-black dark:text-white text-3xl font-bold"
              onClick={() => setShowMenu(!showMenu)}
            >
              <IoMdClose />
            </button>
          </div>

          <div className="p-2 flex flex-col gap-2">
            <Link
              className="text-lg p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 rounded"
              href={ResumeData.drive}
              key="Download Resume"
              target="_blank"
            >
              Download Resume
            </Link>
            {/* Navbar Links */}
            {NavbarMenu.map((navbar) => (
              <Link
                className="text-lg p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 rounded"
                href={navbar.link}
                key={navbar.name}
              >
                {navbar.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;
