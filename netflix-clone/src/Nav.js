import React, { useEffect, useState } from 'react';
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png"
        alt="Netflix logo"
        className="netflix_logo" />
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="netflixavi"
        className="netflix_avi" />
    </div>
  )
}

export default Nav
