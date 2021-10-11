import React from "react";
import battersup from '../../assets/batters-up.png';
import gazette from '../../assets/gazette.jpg';
import umass from '../../assets/umms.jpg';
import e2 from '../../assets/e2.jpg';
import nutrition from '../../assets/nutrition-finder.png';


function Project() {
    return (
        <section id="work" className="info-container">
        <div className="section-header">
            <h1>
            Work
            </h1>
        </div>
        <div className="section-content">
            <div className="main-image">
                <div className="image-tab">
                    <h3>Batter's Up (team project)</h3>
                    <h4>HTML/CSS/JavaScript/Node.js/Heroku/Handlebars/Express.js</h4>
                </div>
                <a href="https://project-2-rs.herokuapp.com/" target="_blank">
                    <img src={battersup} alt="A picture of the Batter's Up team project homepage" />
                </a>
            </div>
            <div className="secondary-image">
                <div className="image-tab">
                    <h3>Daily Hampshire Gazette</h3>
                    <h4>HTML/CSS/JavaScript</h4>
                </div>
                <a href="https://www.gazettenet.com/" target="_blank">
                    <img src={gazette} alt="A picture of the Daily Hampshire Gazette homepage" />
                </a>
            </div>
            <div className="secondary-image">
                <div className="image-tab">
                    <h3>UMass Medical School</h3>
                    <h4>HTML/CSS/JavaScript</h4>
                </div>
                <a href="https://www.umassmed.edu" target="_blank">
                    <img src={umass} alt="A picture of my design for the University of Massachusetts Medical School homepage" />
                </a>
            </div>
            <div className="secondary-image">
                <div className="image-tab">
                    <h3>Electronic Entertainment Magazine</h3>
                    <h4>HTML/CSS/JavaScript</h4>
                </div>
                <a href="https://archive.org/search.php?query=Electronic+Entertainment" target="_blank">
                    <img src={e2} alt="A picture of Electronic Entertainment magazine (now defunct); click to see copies at the Internet Archive" />
                </a>
            </div>
            <div className="secondary-image">
                <div className="image-tab">
                    <h3>Nutrition Finder (team project)</h3>
                    <h4>HTML/CSS/JavaScript</h4>
                </div>
                <a href="https://dgstjohn.github.io/nutrition-finder/" target="_blank">
                <img src={nutrition} alt="A picture of the Nutrition Finder team project homepage" />
                </a>
            </div>
        </div>
    </section>
    );
}

export default Project;