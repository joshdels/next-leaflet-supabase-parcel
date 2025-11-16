"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

const Map = dynamic(() => import("./MapComponent"), {ssr: false});
const SetBoundary = dynamic(() =>import("./useBoundingBox"), {ssr: false});

export default function MapComponent() {
  return <Map />;
}

export function MapBounding() {
  const mapRef = useRef
  return (
    <MapComponent mapRef={mapRef}>
      <SetBoundary mapRef={mapRef}/>
    </MapComponent>
  ); 
}
