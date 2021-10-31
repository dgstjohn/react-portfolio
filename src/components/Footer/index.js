import React from "react";
import Twitter from "../../assets/twitter-logo.png";
import LinkedIn from "../../assets/linkedin-logo.png";
import GitHub from "../../assets/github-logo.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="logos"><a href="https://github.com/dgstjohn" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub logo" /></a><a href="https://www.linkedin.com/in/donstjohn1/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn logo" /></a><a href="https://twitter.com/donstjohn" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter logo" /></a></div>
            <div>&copy; Copyright 2021 Donald St. John</div>
        </footer>
    )
}

export default Footer;