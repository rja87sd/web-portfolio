"use client"; // Indicates that this component uses client-side rendering

import Link from "next/link"; // Importing Link component from Next.js for client-side navigation
import { useState } from "react"; // Importing useState hook from React for managing state
import "../globals.css"; // Importing global CSS styles

// Functional component named ButtonLink
export default function ButtonLink({ href, children }) {
  const [clicked, setClicked] = useState(false); // State to manage the clicked state of the button

  // Function to handle click event
  const handleClick = () => {
    setClicked(true); // Set clicked state to true
    setTimeout(() => setClicked(false), 300); // Reset clicked state after 300ms
  };

  return (
    // Link component wrapping a div to create a clickable button
    <Link href={href} passHref>
      <div
        onClick={handleClick} // Call handleClick on click
        className={`btn-neon ${clicked ? "neon-animation" : ""} cursor-pointer`} // Apply conditional classes
      >
        {children} {/* Render the children elements inside the button */}
      </div>
    </Link>
  );
}
