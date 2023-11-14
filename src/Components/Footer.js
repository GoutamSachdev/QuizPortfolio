import React from 'react';
import styles from "../GaslurLandingPage.module.css";
// YourComponent.js

const Footer = () => {
  // Handle the click event for all text elements
  const handleTextClick = (text) => {
    // Add the functionality you want when a text element is clicked
    
  };

  return (
    <div>
      <div className={styles.groupParent} onClick={() => handleTextClick('Group Parent')}>
        <div className={styles.groupContainer}>
          <div className={styles.companyParent}>
            <div className={styles.company} onClick={() => handleTextClick('Company')}>
              Company
            </div>
            <div className={styles.aboutUsParent}>
              <div className={styles.aboutUs} onClick={() => handleTextClick('About Us')}>
                About Us
              </div>
              <div className={styles.services} onClick={() => handleTextClick('Services')}>
                Services
              </div>
              <div className={styles.portfolio} onClick={() => handleTextClick('Portfolio')}>
                Portfolio
              </div>
            </div>
          </div>
          {/* ... (More code for other sections within groupContainer) */}
          <div className={styles.etiamEtId} onClick={() => handleTextClick('Etiam Et Id')}>
            <b style={{ fontWeight: 'bold' }}>
              Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis magna faucibus lacus.
            </b>
          </div>
        </div>
        <div className={styles.copyright2021GaslurParent}>
          <div className={styles.copyright2021Gaslur} onClick={() => handleTextClick('Copyright 2021 Gaslur')}>
            Copyright @Goutam
          </div>
          <div className={styles.lineDiv} />
          <div className={styles.instagramParent}>
  <img
    className={styles.instagramIcon}
    alt=""
    src={require('../Images/Facebook.png').default}
  />
  <img
    className={styles.facebookIcon}
    alt="instagram"
    src={require('../Images/Instagram.png').default}
  />
  <img
    className={styles.twitterSquaredIcon}
    alt=""
    src={require('../Images/Twitter Squared.png').default}
  />
</div>

        </div>
      </div>
      <div className={styles.discoverParent} onClick={() => handleTextClick('Discover Parent')}>
        <div className={styles.discover1} style={{ fontWeight: 'bold' }} onClick={() => handleTextClick('Discover')}>
          Discover
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild12} />
          <div className={styles.filterParent}>
            <div className={styles.filter} onClick={() => handleTextClick('Filter')}>
              Filter
            </div>
            <img
              className={styles.iconoutlinefilter}
              alt=""
              src="/iconoutlinefilter.svg"
            />
          </div>
        </div>
        <div className={styles.cheapestParent} onClick={() => handleTextClick('Cheapest Parent')}>
          <div className={styles.cheapest} onClick={() => handleTextClick('Cheapest')}>
            Cheapest
          </div>
          <img
            className={styles.iconoutlinecheveronDown}
            alt=""
            src="/iconoutlinecheverondown.svg"
          />
        </div>
        <div className={styles.newestParent} onClick={() => handleTextClick('Newest Parent')}>
          <div className={styles.newest} onClick={() => handleTextClick('Newest')}>
            Newest
          </div>
          <img
            className={styles.iconoutlinecheveronDown1}
            alt=""
            src="/iconoutlinecheverondown1.svg"
          />
        </div>
        <div className={styles.categoryParent} onClick={() => handleTextClick('Category Parent')}>
          <div className={styles.category} onClick={() => handleTextClick('Category')}>
            Category
          </div>
          <img
            className={styles.iconoutlinesortAscending}
            alt=""
            src="/iconoutlinesortascending.svg"
          />
        </div>
      </div>
      <img
        className={styles.unsplashog44d93injkIcon}
        alt=""
        src="/unsplashog44d93injk@2x.png"
      />
     
    </div>
  );
};

export default Footer;
