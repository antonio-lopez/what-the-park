// import { MapContainer } from "react-leaflet/MapContainer";
import { MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { TileLayer } from "react-leaflet/TileLayer";

interface MapProps {
  latitude: string;
  longitude: string;
  address: string;
}

const Map = ({ latitude, longitude, address }: MapProps) => {
  return (
    <MapContainer
      className="h-[31.25rem] w-full"
      center={[Number(latitude), Number(longitude)]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[Number(latitude), Number(longitude)]}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
