"use client"

import { useState} from "react";
import { Rectangle } from "react-leaflet";
import type {Map as LeafletMap, LatLngBoundsExpression} from "leaflet"

const innerBounds: LatLngBoundsExpression = [
  [49.505, -2.09],
  [53.505, 2.09],
];

const outerBounds: LatLngBoundsExpression = [
  [50.505, -29.09],
  [52.505, 29.09],
];

const redColor = { color: "red" };
const whiteColor = { color: "green" };

type BoundProps = {
  mapRef: React.RefObject<LeafletMap>;
}
export default function SetBoundsRectangles({ mapRef }: BoundProps) {
  const [active, setActive] = useState<"inner" | "outer">("outer");
  
  const handleInnerClick = () => {
    setActive("inner");
    mapRef.current?.fitBounds(innerBounds);
  }

  const handleOuterClick = () => {
    setActive("outer");
    mapRef.current?.fitBounds(outerBounds);
  }

  return (
    <>
        <Rectangle 
          bounds={outerBounds}
          eventHandlers={{ click: handleOuterClick}}
          pathOptions={active === "outer" ? redColor: whiteColor}
        />
        <Rectangle 
          bounds={innerBounds}
          eventHandlers={{ click: handleInnerClick }}
          pathOptions={active === "inner" ? redColor: whiteColor}
        />

    </>
  )
}
