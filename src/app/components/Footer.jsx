// Credit to ChatGPT for assistance and code comments.
import "../globals.css"; // Importing global CSS styles

// Functional component named Footer
export default function Footer() {
  return (
    // Footer element with classes for styling
    <footer className="cyberpunk-bg p-4 neon-border mt-8">
      {/* Paragraph element with centered neon text */}
      <p className="text-center neon-text">
        &copy; {new Date().getFullYear()} Ryan Arnold. All rights reserved.{" "}
        {/* Displays the current year and name */}
      </p>
    </footer>
  );
}
