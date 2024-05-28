import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

import styles from "./Navbar.module.css";
import FacebookIcon from "../../assets/icons-facebook.svg";
import TwitterIcon from "../../assets/icons-twitter.svg";
import YoutubeIcon from "../../assets/icons-youtube.svg";
import PinterestIcon from "../../assets/icons-pinterest.svg";
import TumblrIcon from "../../assets/icons-tumblr.svg";
import Hamburger from "hamburger-react";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const router = useRouter();

  const [openHamburger, setOpenHamburger] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleClearSearch = () => {
    if (searchValue !== "") {
      setSearchValue("");
    } else if (searchValue === "") {
      toggleSearch();
    }
  };

  return (
    <>
      <nav className={styles.NavbarContainer}>
        <div className={styles.LogoContainer}>
          <Link href="/">
            <a className={styles.LogoHeaderText}>R U N O</a>
          </Link>
        </div>

        {/* Hamburger rendering starts from here */}

        <div className={styles.HamburgerContainer}>
          <Hamburger
            toggled={openHamburger}
            toggle={setOpenHamburger}
            color="#FFFFFF"
          />
        </div>

        <HamburgerMenu
          open={openHamburger}
          toggle={setOpenHamburger}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <div className={styles.LinksContainer}>
          <ul className={styles.NavMenu}>
            <li
              className={`${
                router.pathname == "/" ? styles.NavItemActive : styles.NavItem
              }`}
            >
              <Link href="/">
                <a className={styles.NavLink}>Home</a>
              </Link>
            </li>

            <li
              className={`${
                router.pathname == "/about"
                  ? styles.NavItemActive
                  : styles.NavItem
              }`}
            >
              <Link href="/about">
                <a className={styles.NavLink}>About</a>
              </Link>
            </li>

            <li
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
              <div className={styles.NavbarLine} />
            </li>

            <Link href="https://en-gb.facebook.com/" passHref={true}>
              <li className={styles.NavItem}>
                <Image
                  className={styles.IconImage}
                  src={FacebookIcon}
                  alt="Runo Facebook"
                  width={25}
                  height={25}
                  layout="fixed"
                />
              </li>
            </Link>

            <Link href="https://twitter.com/" passHref={true}>
              <li className={styles.NavItem}>
                <Image
                  className={styles.IconImage}
                  src={TwitterIcon}
                  alt="Runo Twitter"
                  width={25}
                  height={25}
                  layout="fixed"
                />
              </li>
            </Link>

            <Link href="https://youtube.com/" passHref={true}>
              <li className={styles.NavItem}>
                <Image
                  className={styles.IconImage}
                  src={YoutubeIcon}
                  alt="Runo Youtube"
                  width={25}
                  height={25}
                  layout="fixed"
                />
              </li>
            </Link>

            <Link href="https://pinterest.com/" passHref={true}>
              <li className={styles.NavItem}>
                <Image
                  className={styles.IconImage}
                  src={PinterestIcon}
                  alt="Runo Pinterest"
                  width={25}
                  height={25}
                  layout="fixed"
                />
              </li>
            </Link>

            <Link href="https://tumblr.com/">
              <li className={styles.NavItem}>
                <Image
                  className={styles.IconImage}
                  src={TumblrIcon}
                  alt="Runo Tumblr"
                  width={25}
                  height={25}
                  layout="fixed"
                />
              </li>
            </Link>

            <li className={styles.NavItem}>
              <div className={styles.NavbarLine} />
            </li>

            <li className={styles.NavItem}></li>

            <div
              className={`${
                searchOpen
                  ? styles.SearchContainer + " " + styles.active
                  : styles.SearchContainer
              }`}
            >
              <div
                className={`${
                  searchOpen ? styles.Icon + " " + styles.active : styles.Icon
                }`}
                onClick={toggleSearch}
              ></div>
              <div
                className={
                  searchOpen
                    ? styles.SearchInput + " " + styles.active
                    : styles.SearchInput
                }
              >
                <span
                  className={styles.SearchClear}
                  onClick={() => handleClearSearch()}
                ></span>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
