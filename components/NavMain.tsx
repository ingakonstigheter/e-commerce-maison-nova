import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import HeaderIcons from "./HeaderIcons";

const menuList = [
  { name: "Dam", url: "/dam" },
  { name: "Herr", url: "/herr" },
  { name: "Om oss", url: "/om-oss" },
  { name: "Kontakt", url: "/kontakt" },
];

const NavMain = () => {
  return (
    <nav className="w-screen flex justify-between bg-amber-300">
      {menuList.map((listItem, idx) => (
        <Link key={idx} href={listItem.url}>
          {listItem.name}
        </Link>
      ))}
      <Logo />
      <HeaderIcons />
    </nav>
  );
};

export default NavMain;
