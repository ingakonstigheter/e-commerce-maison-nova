import React from "react";
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const HeaderIcons = () => {
  return (
    <div>
      <FaSearch />
      <CiUser />
      <IoCartOutline />
    </div>
  );
};

export default HeaderIcons;
