"use client"

import dynamic from "next/dynamic";

const MyMap = dynamic(() => import ("./Map"), {ssr: false,}) 

export default function Home() {
  return (
   <>
    <MyMap />
   </>
  );
}
