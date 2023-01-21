import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageLinks from "../../components/PageLinks";
import SocialLinks from "../../components/SocialLinks";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Container>
          <Row>
            <Col>
              <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                  <div className={styles.logo}>GymBudd</div>
                  <button
                    type="button"
                    className={styles.navToggle}
                    id="nav-toggle"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
                <div className={styles.inner}>
                  <PageLinks
                    parentClass={styles["nav-links"]}
                    itemClass={styles["nav-link"]}
                  />
                  <SocialLinks
                    parentClass={styles["nav-icons"]}
                    itemClass={styles["nav-icon"]}
                  />
                </div>
                {showMenu && (
                  <div className={styles.navMobile}>
                    <PageLinks
                      parentClass={styles["nav-links"]}
                      itemClass={styles["nav-link"]}
                    />
                    <SocialLinks
                      parentClass={styles["nav-icons"]}
                      itemClass={styles["nav-icon"]}
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
