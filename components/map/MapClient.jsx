"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

const Map = dynamic(() => import("./MapComponent"), {ssr: false});
const SetBoundary = dynamic(() =>import("./useBoundingBox"), {ssr: false});
const GeoJSONLayer = dynamic(() => import("./useGeoJSON"), {ssr: false});


export default function MapContainer() {
  return <Map />;
};

export function MapBounding() {
  const mapRef = useRef(null);

  return (
    <Map mapRef={mapRef}>
      <SetBoundary mapRef={mapRef}/>
    </Map>
  ); 
};

export function AddGeoJSON() {
  const mapRef = useRef(null);

  return(
    <Map mapRef={mapRef}>
      <GeoJSONLayer />
    </Map>
  );
};
