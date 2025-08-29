import React from "react";
import avatar from "./portrait.avif";
 // ✅ Import background



export default function Landing() {
  return (
    <div className="landing">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="landing-content">
        <img src={avatar} alt="Avatar" className="avatar" />
        <h1>Anuhya Pinapati</h1>
        <p>
          Hi, I’m a passionate developer skilled in React, JavaScript, and web
          development. I love building modern and interactive apps.
        </p>
      </div>
    </div>
  );
}
