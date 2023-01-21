import styles from "./MapSection.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const MapSection = () => {
  return (
    <div className={styles.mapSection}>
      <h3>Where you can find us</h3>
      <div className={styles.place}>
        <div className={styles.icon}>
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className={styles.addressContainer}>
          <div className={styles.address}>
            Griva Digeni 1144 - Limassol (3022)
          </div>
          <div className={styles.country}>Cyprus</div>
        </div>
      </div>
      <div className={styles.mapHolder}>
        <MapContainer
          center={[34.705219, 33.114284]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "350px", height: "350px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[34.705219, 33.114284]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSection;
