// components/Footer.jsx

import "../globals.css";

export default function Footer() {
  return (
    <footer className="cyberpunk-bg p-4 neon-border mt-8">
      <p className="text-center neon-text">
        &copy; {new Date().getFullYear()} Ryan Arnold. All rights reserved.
      </p>
    </footer>
  );
}
