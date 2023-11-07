"use client"

import Hero from "~/app/components/hero";
import useLenis from "~/app/hooks/useLenis";

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