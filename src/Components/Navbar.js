import React from 'react';
import styles from "../GaslurLandingPage.module.css";
const Navbar = () => {
  // Navbar logic and JSX
  return (
    <div>
      <b className={styles.fastech} style={{ fontSize: '24px', fontWeight: 'bold' }} >
        GoutamTech 
      </b>
      <div className={styles.homeParent}>
        <b className={styles.home}>Home</b>
        <div className={styles.myProfile}>My profile</div>
        <div className={styles.activity}>activity</div>
        <div className={styles.howItWorks}>how it works</div>
        <div className={styles.groupInner} />
      </div>
      <div className={styles.signInParent}>
        <div className={styles.signIn}>sign in</div>
        <div className={styles.createParent}>
          <div className={styles.create1}>create</div>
          <div className={styles.groupChild} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
