import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./navItem";

const MENU_LIST = [
  { text: "HOME", href: "/" },
  { text: "BIO", href: "/bio" },
  { text: "EVENTS", href: "/events" },
  { text: "PODCAST", href: "/podcast" },
  { text: "PROJECTS", href: "/projects" },
  { text: "WRITING", href: "/writing" },
  { text: "MEDIA", href: "/media" },
];
const NavBar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        {/* <Link href={"/"}>
          <a>
            <h1 className="logo">CodeWithMarish</h1>
          </a>
        </Link> */}
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        ></div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
