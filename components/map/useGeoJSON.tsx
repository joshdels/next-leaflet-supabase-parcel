"use client"

import { useState} from "react";
import { GeoJSON, useMap } from "react-leaflet";
import type { Feature } from "geojson";


var sampleData: Feature = {
  "type": "Feature",
  "properties": {
      "name": "Coors Field",
      "amenity": "Baseball Stadium",
      "popupContent": "This is where the Rockies play!"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [51.505, -0.09]
  }
};

type GeoJSONProps= {
  data?: Feature;
}

export default function useGeoJSON({ data = sampleData } : GeoJSONProps) {
  const map = useMap()

  return (
    <> 
      <GeoJSON data={data} />
    </>
  )
}