import styles from "./TeamCard.module.css";
import { Image } from "react-bootstrap";
const TeamCard = ({ id, name, position, image, socials }) => {
  return (
    <div>
      <div className={styles.teamCard} key={id}>
        <Image src={image} fluid />
        <div className="d-flex justify-content-between px-3">
          <div className="leftside">
            <h4>{name}</h4>
            <p>{position}</p>
          </div>
          <div className="rightside">
            {socials.map(({ id, sociallink, icon }) => {
              return (
                <div className={styles.socialIcon} key={id}>
                  <a
                    href={sociallink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={icon}></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
