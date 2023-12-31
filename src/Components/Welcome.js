import React from 'react';
import styles from "../GaslurLandingPage.module.css";
function Welcome() {
  // Welcome component logic and JSX
  return (
    <div>
      
      <div className={styles.gaslurLandingPageChild} />
      <div className={styles.gaslurLandingPageItem} />
      <div className={styles.gaslurLandingPageInner} />
      <div className={styles.discoverCollectAnd}>
        Discover, collect, and charity in extraordinary NFT marketplace
      </div>
      <div className={styles.inAeneanPosuere}>
     I am Goutam Sachdev Passionate about building scalable applications.
      </div>
      <div className={styles.exploreWrapper}>
        <div className={styles.explore}>Explore</div>
      </div>
      <div className={styles.createWrapper}>
        <div className={styles.explore}>Create</div>
      </div>
      <img className={styles.heart24Icon} alt="" src={require('../Images/profile.jpg')} />
      <div className={styles.laura}>Goutam Sachdev</div>
      <div className={styles.weAreHere}>WE ARE HERE</div>
      <div className={styles.weth}>Sukkur SIndh </div>
      <img
        className={styles.unsplashog44d93injkIcon}
        alt=""
        src={require('../Images/profile.jpg')}
      />
    </div>
  );
}

export default Welcome;
