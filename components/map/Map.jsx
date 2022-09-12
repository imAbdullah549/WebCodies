import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import styles from "../../styles/Map.module.css";

const LocationPin = ({ text }) => (
  <div className={styles.pin}>
    <Icon icon={locationIcon} className={styles.pin_icon} />
    <p className={styles.pin_text}>{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <div className={styles.map}>
    <div className={styles.google_map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
