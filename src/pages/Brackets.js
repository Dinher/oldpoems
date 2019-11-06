import React, { Component } from 'react';
import Links from './components/partials/Links_Container'

export default class Brackets extends Component {

    render() {
        return (
            <section className="page-content" id="page-brackets">
                <Links />
                <div className="app_container" id="rwa_container">
                    <p className="app-title">Reading With Austen<span><a href="https://www.readingwithausten.com">Visit &#10132;</a></span></p>
                    <img className="app-splash" src="/images/brackets/rwa/landing2.jpg" id="austen-landing" alt="Reading With Austen: Landing Page"/>
                    <p className="app-description">Renowned author Jane Austen spent about 10 months at her brother Edward Austen Knight's library at the Godmersham Park estate. The 1200+ books and volumes were at her fingertips to absorb and became a place which <a className="external-link" href="https://www.readingwithausten.com/about.html#about_library-jane" target="_blank">she would come to adore</a>. Researchers at McGill University aimed to immortalize this library by both digitizing it and allowing Austen's fans a sense of her inspirations. Further, their modernizations and articling of the Godmersham library catalogue has contributed to the analytical scope of 18th century literature. Already, publications across the world have written <a className="external-link" href="https://www.readingwithausten.com/about.html#about_library-jane">about the project as well as inclusions in academic curriculums</a>. Finally, the project looks to digitize and locate all the original books in the library.<br/><br/>Reading with Austen is an endlessly interesting project that I continue to improve and maintain.</p>
                    <div className="app-item app-meta" id="austen-meta">
                        <img src="/images/brackets/rwa/rwa-logo.png" id="austen-logo" alt="Reading With Austen: Logo"/>
                        <p>The Burney Centre, McGill University</p>
                        <ul>
                            <li>HTML5   CSS3   VanillaJS</li>
                            <li>node.js   PostGres</li>
                            <li>Photoshop   Gimp</li>
                            <li>Heroku   Git   GitPages</li>
                            <li>Javascript   Python   SQL</li>
                        </ul>
                    </div>
					<div className="app-item app-video">
						<video autoPlay="autoplay" loop="loop" muted>
							<source src="/images/brackets/rwa/rwa.mp4" type="video/mp4"/>
							Unfortunately, your browser does not support this video format.
						</video> 
						<div className="video-filter"></div>
					</div>
                    <div className="app-item app-row" id="rwa-wall">
                        <img src="/images/brackets/rwa/rwa-wall.png" alt="Reading With Austen: Book Case"/>
                        <p>The Application integrated water-coloured interpretations of 18th century libraries and aesthetics, photographs of the current books (spines, covers, pages), and meta-data interfaced in a front-end application.</p>
                    </div>
                    <div className="app-item app-row" id="rwa-about">
                        <p>The various themes across the application were researched to give a representative depiction of the era. The final presentation focused on coupling the ease-of-use with the motifs of the time period.</p>
                        <img src="/images/brackets/rwa/rwa-about.png" alt="Reading With Austen: About"/>
                    </div>
                    <div className="app-item" id="rwa-catalogue">
                        <img src="/images/brackets/rwa/rwa-catalogue.png" alt="Reading With Austen: Catalogue"/>
                        <p>The catalogue acts as a reverse directory giving academics, literary historians, and Austen enthusiasts an opportunity to connect Godmersham to others outfits. A bounded search function allows users to explore the catalogue and connect them to interactive elements of the book in the virtualized library.</p>
                    </div>
                </div>
            </section>
        )
    }
}
