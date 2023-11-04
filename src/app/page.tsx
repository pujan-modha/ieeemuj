"use client"

import useLenis from "~/app/hooks/useLenis";
import Hero from "~/app/_components/hero";

export default function Home() {
    useLenis();
  return (
    <>
      <div>
        <Hero/>
      </div>
    </>
  );
}