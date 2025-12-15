"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import Image from "next/image";

import MobileNavbar from "./SidebarMobile";
import { NavbarMenu } from "./NavbarItems";
import NavbarMobile from "./NavbarMobile";

import { ThemeContext } from "@/context/themeContext";
import { ResumeData } from "@/constants/ResumeData";


const Navbar = () => {
  const [top, setTop] = useState("0");
  const [showMenu, setShowMenu] = useState(false);

  const { setThemeFun, theme } = useContext(ThemeContext);

  // Logic for Navbar Hide and Show on scrolling behaviour
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0"); // Show the navbar
      } else {
        setTop("-80px"); // Hide the navbar
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className="w-full h-[70px] px-8 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-10 transition-all duration-500"
        style={{ top: top }}
      >
        {/* Name Logo */}
        <div className="flex items-center gap-3">
        {/* Logo Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-pink-300 dark:border-[#07d0e5]">
            <Image
              alt="Upasana Pan logo - Upa's Expeditions"
              height={40}
              priority
              src="/myimage/Pink.png"
              width={40}
            />
          </div>

          {/* Brand Name */}
          <span className="text-lg font-medium italic text-pink-600 dark:text-[#07d0e5]">
            Upa&apos;s Expeditions
          </span>
      </div>
        <div className="h-full flex gap-4">
          <Link
            className={
              "text-[#c72c6c] dark:text-[#07d0e5] font-bold italic"
            }
            href={ResumeData.drive}
            key="Download CV"
            target="_blank"
          >
            <div className="h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4  border-[#c72c6c] dark:border-[#07d0e5] transition-all">
              DOWNLOAD RESUME
            </div>
          </Link>
          {/* Navbar Links */}
          {NavbarMenu.map((navbar) => (
            <Link
              className={
                "text-[#c72c6c] dark:text-[#07d0e5] font-semibold italic"
              }
              href={`/${navbar.link}`}
              key={navbar.name}
            >
              <div className="h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4  border-[#c72c6c] dark:border-[#07d0e5] transition-all">
                {navbar.name}
              </div>
            </Link>
          ))}
        </div>
        {/* Toggle Theme button */}
        <div className="flex items-center gap-4">
          <button
            className="text-xl text-[#c72c6c] dark:text-[#07d0e5] hover:scale-110"
            onClick={setThemeFun}
          >
            {theme === "dark" ? (
              <TbBulbFilled />
            ) : (
              <BsFillLightningChargeFill />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <NavbarMobile
        setShowMenu={setShowMenu}
        setThemeFun={setThemeFun}
        showMenu={showMenu}
        theme={theme}
        top={top}
      />

      {/* SideMenu For Mobile Screen */}
      <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </Fragment>
  );
};

export default Navbar;
