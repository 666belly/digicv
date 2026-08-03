import React, { useEffect, useState } from "react";
// import profilePic from "../assets/profilepic.jpg";
import "../components/Style/index.css";
import "../components/Style/header.css";  

function Header() {
const textToType = "Hi, I'm Isabel,\nWelcome to my portfolio!";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === 0) {
      const startTimeout = setTimeout(() => setIndex(1), 500);
      return () => clearTimeout(startTimeout);
    }
    if (index > 0 && index <= textToType.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(textToType.substring(0, index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, textToType]);

  return (
    <header id="header">
      {/* <img className="header-pic" src={profilePic} alt="Profile" /> */}
<div className="typewriter">{displayedText.split("\n").map((line, i) => (
  <React.Fragment key={i}>
    {line}
    <br />
  </React.Fragment>
))}</div>    </header>
  );
}

export default Header;
