import React from "react";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdOutlineDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { MdNotificationsNone } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbBrandProducthunt } from "react-icons/tb";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar fixed top-0 left-0 z-[100] w-[15%]">
        <Link to="/">
          <div className="logoWrapper py-3 px-5">
            <img src={Logo} className="w-100" />
          </div>
        </Link>

        <div className="sidebarTabs px-2 flex gap-3 flex-col mt-4">
          <Button className="w-100">
            <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
              <MdOutlineDashboard />
            </span>
            Dashboard
          </Button>

          <Button className="w-100 flex items-center justify-center">
            <span className="icon mr-3 w-[30px] h-[30px] flex items-center justify-center rounded-md">
              <TbBrandProducthunt />
            </span>
            Products
            <span className="arrow mx-auto w-[25px] h-[25px] flex items-center justify-center">
              <FaAngleRight />
            </span>
          </Button>

          <Button className="w-100">
            <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
              <FaCartArrowDown />
            </span>
            Orders
          </Button>

          <Button className="w-100">
            <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
              <MdNotificationsNone />
            </span>
            Notifications
          </Button>

          <Button className="w-100">
            <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
              <IoSettingsOutline />
            </span>
            Settings
          </Button>

          <Button className="w-100">
            <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
              <FiUser />
            </span>
            Login
          </Button>

          <Button className="w-100">
            <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md">
              <FiUser />
            </span>
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
