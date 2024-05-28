import Link from "next/link";
import React from "react";
import Image from "next/image";

import styles from "./Footer.module.css";
import FacebookIcon from "../../assets/icons-facebook.svg";
import TwitterIcon from "../../assets/icons-twitter.svg";
import YoutubeIcon from "../../assets/icons-youtube.svg";
import PinterestIcon from "../../assets/icons-pinterest.svg";
import TumblrIcon from "../../assets/icons-tumblr.svg";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.ContactPublisher}>
        <p>Contact the Publisher</p>
        <ul>
          <li>vanessa@runo.com</li>
          <li>+944 450 904 505</li>
        </ul>
      </div>
      <div className={styles.Explorate}>
        <p>Explorate</p>
        <ul>
          <li>About</li>
          <li>Profiles</li>
          <li>Partners</li>
          <li>Job Opportunities</li>
          <li>Advertise</li>
          <li>Membership</li>
        </ul>
      </div>
      <div className={styles.Headquarters}>
        <p>Headquarter</p>
        <ul>
          <li>191 Middleville Road, NY 1001, Sydney Australia</li>
        </ul>
      </div>
      <div className={styles.Connections}>
        <p>Connections</p>

        <div className={styles.IconImagesContainer}>
          <Link href="https://en-gb.facebook.com/" passHref={true}>
            <Image
              className={styles.IconImage}
              src={FacebookIcon}
              alt="Runo Facebook"
              width={25}
              height={25}
              layout="fixed"
            />
          </Link>
          <Link href="https://twitter.com/" passHref={true}>
            <Image
              className={styles.IconImage}
              src={TwitterIcon}
              alt="Runo Twitter"
              width={25}
              height={25}
              layout="fixed"
            />
          </Link>
          <Link href="https://youtube.com/" passHref={true}>
            <Image
              className={styles.IconImage}
              src={YoutubeIcon}
              alt="Runo Youtube"
              width={25}
              height={25}
              layout="fixed"
            />
          </Link>
          <Link href="https://pinterest.com/" passHref={true}>
            <Image
              className={styles.IconImage}
              src={PinterestIcon}
              alt="Runo Pinterest"
              width={25}
              height={25}
              layout="fixed"
            />
          </Link>
          <Link href="https://tumblr.com/">
            <Image
              className={styles.IconImage}
              src={TumblrIcon}
              alt="Runo Tumblr"
              width={25}
              height={25}
              layout="fixed"
            />
          </Link>
        </div>
      </div>

      <div className={styles.FooterLowerContainer}>
        <p className={styles.FooterTitleLeft}>2022 | RUNO Publisher Studio</p>
        <p className={styles.FooterTitleMiddle}>Created By Timi Solutions</p>
        <p className={styles.FooterTitleEnd}>Subscribe Now</p>
      </div>
    </div>
  );
};

export default Footer;
