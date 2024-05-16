// components/ButtonLink.jsx

"use client";

import Link from "next/link";
import { useState } from "react";
import "../globals.css";

export default function ButtonLink({ href, children }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <Link href={href} passHref>
      <div
        onClick={handleClick}
        className={`btn-neon ${clicked ? "neon-animation" : ""} cursor-pointer`}
      >
        {children}
      </div>
    </Link>
  );
};
