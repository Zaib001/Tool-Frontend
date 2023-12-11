import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/.PNG/logo.png";
import popupImage from "../../assets/.PNG/center.png";
import popupVideo from "../../assets/.MP4/video.mp4";

function Navbar() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const navigate = useNavigate();

  const handlePromoteClick = () => {
    navigate("/payment");
    closePopup();
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`${styles.logo} ${styles.inActiveStyle}`}>
          <img src={logo} alt="Hubit AI logo" className={styles.img} />
        </div>

        <h1 className={styles.heading}>Hubit AI</h1>

        <button className={styles.signOutButton} onClick={openPopup}>
          Get Noticed
        </button>
      </nav>
      <div className={styles.separator}></div>

      {isPopupOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <span className={styles.popupCloseIcon} onClick={closePopup}>
              &times;
            </span>
            <div className={styles.popupContent}>
              {/* Left side of the popup */}
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <h2 className={styles.mainheading}>Featured List</h2>
                  <h3 className={styles.featureHeading}>Hot Spot</h3>
                  <p>Placed in the top row for 7 days</p>
                </div>
                <div className={styles.featureItem}>
                  <h3 className={styles.featureHeading}>Speedy</h3>
                  <p>Listed within 24hrs</p>
                  <img
                    src={popupImage}
                    alt="Speedy"
                    className={styles.featureImage}
                  />
                </div>
                <div className={styles.featureItem}>
                  <h3 className={styles.featureHeading}>ShowCase</h3>
                  <p>Social media Shout Out on all active platforms</p>
                </div>
              </div>

              {/* Right side of the popup */}
              <div className={styles.rightContent}>
                <video autoPlay loop playsInline className={styles.popupVideo}>
                  {/* Provide a direct link to the video file */}
                  <source src={popupVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h2 className={styles.boostHeading}>
                  Boost Your AI Tools Visibility!
                </h2>
                <div className={styles.maincontent}>
                  <h1>
                    $54<sup>99</sup>
                  </h1>
                  <p>Be a part of our hand picked collection<br/> of AI tools, where you won't have to wait<br/>in line, for exposure, to a wider audience.</p>
                    
                </div>
                <button
                  className={styles.promoteButton}
                  onClick={handlePromoteClick}
                >
                  PROMOTE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
