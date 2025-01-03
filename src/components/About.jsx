import React, { useState, useEffect } from "react";
import { styles } from "../styles";

const About = () => {
  const [uptime, setUptime] = useState("00:00:00");
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  // Function to calculate uptime
  const calculateUptime = (startTime) => {
    const now = new Date();
    const diff = now - startTime; // Time difference in milliseconds
    const hours = Math.floor(diff / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((diff / 1000) % 60)
      .toString()
      .padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // Start uptime counter when the component mounts
  useEffect(() => {
    const startTime = new Date(); // Record the time when the component mounts
    const interval = setInterval(() => {
      setUptime(calculateUptime(startTime));
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Typing animation
  useEffect(() => {
    const text = `Name: Aanthoni Nevan DSouza
Education: University of South Florida
Year: Junior
Major: Computer Science
Postion: SWE @ VSP Vision
uptime: `;
    const typingInterval = setInterval(() => {
      if (typingIndex < text.length) {
        setTypingText(text.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      } else {
        setTypingText(`${text}${uptime}`);
        clearInterval(typingInterval);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [typingIndex, uptime]);

  return (
    <div
      className={styles.padding}
      style={{
        backgroundColor: "#0a0a0a", // Dark background
        color: "#915EFF", // Fluorescent purple text
        fontFamily: "'Courier New', monospace", // Monospace font
        border: "1px solid #915EFF", // Fluorescent purple border
        fontSize: "1.2rem", // Larger font size
        boxShadow: "0 0 15px rgba(122, 40, 138, 0.5)", // Fluorescent purple glow
        animation: "glow 2s infinite alternate", // Pulsing glow animation
        maxWidth: "1000px", // Reduced maxWidth
        margin: "0 auto", // Center the terminal horizontally
        display: "block", // Ensure the terminal is a block element
      }}
    >
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 15px rgba(0, 255, 204, 0.5);
            }
            100% {
              box-shadow: 0 0 25px rgba(0, 255, 204, 0.8);
            }
          }
        `}
      </style>

      <div style={{ marginBottom: "20px" }}>
        <h1 className={styles.heroHeadText} style={{ textShadow: "0 0 5px #00ffcc" }}>
          About Me
        </h1>
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {typingText}
        </pre>
      </div>
    </div>
  );
};

export default About;