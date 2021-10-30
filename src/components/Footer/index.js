import React from "react";
import Twitter from "../../assets/twitter-logo.png";
import LinkedIn from "../../assets/linkedin-logo.png";
import GitHub from "../../assets/github-logo.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="logos"><a href="https://github.com/dgstjohn"><img src={GitHub} /></a><a href="https://www.linkedin.com/in/donstjohn1/"><img src={LinkedIn} /></a><a href="https://twitter.com/donstjohn"><img src={Twitter} /></a></div>
            <div>&copy; Copyright 2021 Donald St. John</div>
        </footer>
    )
}

export default Footer;