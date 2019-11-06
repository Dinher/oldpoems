import React, { Component } from 'react'
import Contact from './components/partials/About_contact'

export default class About extends Component {

    render() {
        return (
            <section className="page-content" id="page-about">
            <ul className="links_container" style={{display:"none"}}>
                <li>
                    <a href="https://www.github.com/dinher">
                        <img src="/images/github-logo.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nguyen-dinh-50032674" target="_blank">
                        <img src="/images/linkedin.svg" style={{width:"45px"}}alt=""/>
                    </a>
                </li>
                <li style={{margin:"20px 20px 12px 20px"}}>
                    <a href="mailto:&#110;&#103;&#100;&#50;&#53;&#51;&#64;&#117;&#115;&#97;&#115;&#107;&#46;&#99;&#97;">
                        <img src="/images/email.svg" style={{width:"45px"}}alt=""/>
                    </a>
                </li>
            </ul>
            <div className="app_container">
                <img className="about-headshot" src="images/scenes/compressed/97.jpg" alt="Headshot"/>
                <h2>Hello</h2>
                <p className="about-intro">
                I'm Nguyen Dinh and I take ideas, mix it with coffee, and turn it into things people enjoy experiencing.<br/><br/>
                Computer scientist, writer, musician, and <sup>aspiring</sup><sub>comedy</sub><sup>machine</sup>.
                </p>
                <div className="split-text-card">
                        <h2>Current Projects</h2>
                        <p>
                            Reading With Austen (web app)<br/>
                            SoftSpoke (Web App)<br/>
                            Sybil (NLP/Word Embeddigs)<br/>
                            Skylight (Music)<br/>
                            Boat Person (Writing)
                        </p>
                </div>
                <div className="about-skills">
                    <h2>Skills</h2>   
                    <div className="about-front">
                        <ul>
                            <li>HTML5  CSS3  ES6 </li>
                            <li>jQuery  Bootstrap</li>
                            <li>SASS  ReactJS  Redux</li>
                            <li>Photoshop  Mock-ups  Copy</li>
                            <li>SEO  Anaylytics</li>
                        </ul>
                    </div>
                    <div className="about-back">
                        <ul>
                            <li>Node.js  Express  EJS  Handlebars</li>
                            <li>npm  npm-scripts</li>
                            <li>Flask  Jinja  pip</li>
                            <li>PHP7  WordPress  Apache</li>
                            <li>MongoDB  PostGres  MySQL  SQLite3</li>
                            <li>Heroku  Electron  cPanel</li>
                        </ul>
                    </div>
                    <div className="about-cv">
                        <a className="external-link" href="/Nguyen Dinh CV 2019.pdf" download>
                            <h3>Download My CV</h3>
                        </a>
                        <a href="https://www.github.com/dinher">
                            <img src="/images/github-logo.svg" alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/in/nguyen-dinh-50032674" target="_blank">
                            <img src="/images/linkedin.svg" alt=""/>
                        </a>
                    </div>
                    <div className="about-tools">
                        <ul>
                            <li>Git  markdown</li>
                            <li>REST  HTTP/TCP  DNS/IP</li>
                            <li>Python  C++  Java</li>
                            <li>Microservices  SaaS  PaaS</li>
                            <li>NLP  NLTK</li>
                        </ul>
                    </div>
                    <div className="about-soft">
                        <ul>
                            <li>Music Production  Mixing  Mastering</li>
                            <li>Reaper  VSTs</li>
                            <li>Spoken Word  Poetics  Story Telling</li>
                            <li>Theatre  Improvisation  Stand-up</li>
                        </ul>
                    </div>
                </div>
                <div className="about-questions">
                    <p>Do you have a unique user experience problem?</p>
                    <p>Or maybe you like coffee and smoothing out ideas?</p>
                    <p>Make noise in sound proof rooms?</p>
                    <p>Sitting on sketch ideas and want to show the world?</p>
                </div>
                <Contact/>                
            </div>
            </section>
        )
    }
}
