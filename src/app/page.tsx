"use client"

import Link from "next/link";
import Navbar from "~/app/_components/navbar";
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