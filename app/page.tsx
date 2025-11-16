// app/page.tsx
"use client";

import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("@/Components/map/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <MyMap />
    </>
  );
}
