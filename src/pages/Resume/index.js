import React from "react";
import resume from "../../assets/DSJ-resume.pdf";

function Resume() {
    return (
        <section id="resume" className="info-container">
            <div className="section-header">
                <h1>
                    My Resume
                </h1>
            </div>
            <article className="section-resume">
                <p>You can see more with <a href={resume} download="DSJ-resume.pdf">my CV/resume</a>.
                    <br /><br />My software proficiencies include:
                    <br /><br /><ul>
                        <li>The full MERN stack:
                            <ul>
                                <li>MongoDB and Mongoose</li>
                                <li>Express.js</li>
                                <li>React</li>
                                <li>Node.js</li>
                            </ul>
                        </li>
                        <li>GraphQL</li>
                        <li>HTML</li>
                        <li>CSS, including:
                            <ul>
                                <li>Native CSS3</li>
                                <li>Bootstrap</li>
                                <li>Materialize</li>
                            </ul>
                        </li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                    </ul>
                </p>
            </article>
        </section>
    );
}

export default Resume;