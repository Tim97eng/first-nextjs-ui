import Head from "next/head";
import React from "react";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.ContactPageContainer}>
      <Head>
        <title>Contact Us </title>
        <meta name="Contact Us" content="Generated by create next app" />
      </Head>

      <main className={styles.Main}>
        <div className={styles.TitleContainer}>
          <h1 className={styles.Title}>
            Contact <span>Runo</span>
          </h1>
        </div>
        <div>Content</div>
      </main>
    </div>
  );
};

export default Contact;
