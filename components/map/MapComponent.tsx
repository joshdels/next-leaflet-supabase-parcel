  "use client"

  import { MapContainer, TileLayer } from 'react-leaflet'
  import "leaflet/dist/leaflet.css";
  import type {Map as LeafletMap} from "leaflet"

  type MapProps = {
    mapRef: React.RefObject<LeafletMap>;
    children?: React.ReactNode;
  }

  export default function MapComponent({ mapRef, children }: MapProps) {
    return (
    <div style={{ height:"100vh", width:"100%" }}>
      <MapContainer 
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }} 
        ref={mapRef}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    </div>
    )
  }