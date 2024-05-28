import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Hamburger.module.css";
import searchIcon from "../../assets/icons-search.svg";

const HamburgerMenu = ({ open, toggle, searchValue, setSearchValue }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle(false);
  };

  return (
    <div
      className={`${open ? styles.HamburgerMenuOpen : styles.HamburgerMenu}`}
    >
      <ul className={styles.NavMenu}>
        <li
          onClick={() => handleClick()}
          className={`${
            router.pathname == "/" ? styles.NavItemActive : styles.NavItem
          }`}
        >
          <Link href="/">
            <a className={styles.NavLink}>Home</a>
          </Link>
        </li>
        <li
          onClick={() => handleClick()}
          className={`${
            router.pathname == "/about" ? styles.NavItemActive : styles.NavItem
          }`}
        >
          <Link href="/about">
            <a className={styles.NavLink}>About</a>
          </Link>
        </li>
        <li
          onClick={() => handleClick()}
          className={`${
            router.pathname == "/profiles"
              ? styles.NavItemActive
              : styles.NavItem
          }`}
        >
          <Link href="/profiles">
            <a className={styles.NavLink}>Profiles</a>
          </Link>
        </li>
        <li
          onClick={() => handleClick()}
          className={`${
            router.pathname == "/articles"
              ? styles.NavItemActive
              : styles.NavItem
          }`}
        >
          <Link href="/articles">
            <a className={styles.NavLink}>Articles</a>
          </Link>
        </li>
        <li
          onClick={() => handleClick()}
          className={`${
            router.pathname == "/contact"
              ? styles.NavItemActive
              : styles.NavItem
          }`}
        >
          <Link href="/contact">
            <a className={styles.NavLink}>Contact</a>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <div className={styles.SearchBar}>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className={styles.SearchBarIconCont}>
            <Image
              className={styles.SearchImage}
              src={searchIcon}
              alt="Runo Search"
              width={30}
              height={30}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
