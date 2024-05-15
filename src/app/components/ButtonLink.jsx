// components/ButtonLink.js
"use client";
import Link from "next/link";
import { useState } from "react";

const ButtonLink = ({ href, children }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`inline-block mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
        clicked ? "animate-click" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
