import Auctions from "./Components/Auction";
import { Discover } from "./Components/Discover";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import styles from "./GaslurLandingPage.module.css";

const App = () => {
  return (
    <div className={styles.gaslurLandingPage}>
      
     
      <div className={styles.loadMoreParent}>
        <div className={styles.loadMore}>Load more</div>
        <div className={styles.groupItem} />
      </div>
     
     <Auctions />
     
      <Discover />
      <Welcome />
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
