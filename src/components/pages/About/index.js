import React from "react";
import dsjHeadshot from '../../../assets/dsj-headshot.jpg';

function About() {
    return (
        <section id="about-me" className="info-container">
            <div className="section-header">
                <h1>
                    About Me
                </h1>
            </div>
            <article className="section-about-me">
                <div><img src={dsjHeadshot} alt="Headshot of Don St. John" />
                    I'm an experienced front-end developer and content strategist who's currently extending my experience into full front- and back-end development with the entire MERN stack. For eight years, visitors to the University of Massachusetts Medical School's website have been navigating in my design on both the homepage and the university's news site; it was built in 2013 with mobile-responsive performance in mind and has stood the test of time. (And it replaced a site that was basically a Flash navigation element -- without any alt text!) I was also instrumental in the redevelopment of the website and maintenance of the website for the Daily Hampshire Gazette in Northampton, Mass., using a Drupal framework and enabling the organization to publish in real time to its online audience. Now, I'm pushing forward into full web applications, managing both the front end with frameworks such as Handlebars.js and Bootstrap, and the back end with such key technologies such as Node.js and MongoDB. When I'm not working, I'm not done with patterns -- I can frequently be found in my hangout room breaking down the intricacies of the guitar, both electric and acoustic. Really, when you get right down to it, it's all code!</div>
            </article>
        </section>
    );
}

export default About;