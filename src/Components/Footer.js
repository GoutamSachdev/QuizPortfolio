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
    src={require('../Images/Facebook.png')}
  />
  <img
    className={styles.facebookIcon}
    alt="instagram"
    src={require('../Images/Instagram.png')}
  />
  <img
    className={styles.twitterSquaredIcon}
    alt=""
    src={require('../Images/Twitter Squared.png')}
    
  />
</div>

        </div>
      </div>
      
      
      
     
    </div>
  );
};

export default Footer;
