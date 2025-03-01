import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"

const MapComponent = () => {
  return (
    <MapContainer
      center={[6.3703, 2.3912]} // Coordonnées de Cotonou, Bénin
      zoom={15}
      style={{ height: "500px", width: "100%"}}
    >

      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[6.3703, 2.3912]}>
        <Popup> YumKing </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
