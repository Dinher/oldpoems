import React, { Component } from 'react';
import Links from './components/partials/Links_Container'

export default class INMR_Congress extends Component {

    render() {
        return (
            <section className="page-content" id="page-brackets">
                <Links />
                <div className="app_container" id="congress_container">
                    <p className="app-title">INMR World Congress<span>[2017/2019]</span></p>
                    <div className="video_container">
						<video autoPlay="autoplay" loop="loop" muted>
							<source src="/images/brackets/inmr-2019/2019-congress-compressed.mp4" type="video/mp4"/>
							Unfortuneately, Your browser does not support this video format.
						</video> 
						<div className="video-filter"></div>
					</div>
                    <p className="app-description">INMR has been the go-to for the latest in trends, developments, and research in the transmission & distribution industry. Since 1993, the publisher has developped a dedicated global following and has been influential in the connecting the various aspects of the T&D industry. Today, they continue to bring together industry professionals with the INMR World Congress. Held biennially, the 3-Day conference showcases the latest research and features the state-of-the-art in T&D technologies.</p>
                    <div className="app-item app-meta" id="congress-meta">
                        <img src="/images/brackets/inmr-2019/INMR-2019-World-Congress-Logo.jpg" id="" alt="INMR World Congress: "/>
                        <p>INMR<br/>The World's Leading T&D Publication</p>
                        <ul>
                            <li>HTML5   CSS3   VanillaJS</li>
                            <li>node.js   SCSS   Babel   SQLite</li>
                            <li>Photoshop   Gimp</li>
                            <li>Electron</li>
                            <li>Javascript   Python   SQL</li>
                        </ul>
                    </div>
					<div className="app-item" id="congress-splash">
                        <img src="/images/brackets/inmr-2019/home.png" alt="INMR World Congress: "/>
					</div>
                    <div className="app-item app-row" id="congress-video">
						<video autoplay="autoplay" loop="loop" muted>
							<source src="/images/brackets/inmr-2019/2019-congress-2-compressed.mp4" type="video/mp4"/>
							Unfortuneately, your browser does not support this video format.
						</video> 
						<div className="video-filter"></div>
                        <p>Each Congress, lasting 3 days, boasts over 80 speakers and more than 200 research papers and presentations. The layout and usability involved a modern web design approach and a intuative minimalistic interface.</p>
                    </div>
                    <div className="app-item app-row" id="congress-agenda">
                        <p>The Congress Proceedings is an application that acts as both a digital agenda and resource for the attendees to reference. Itself a directory, the Proceedings puts in order the various topics, research and presentations, speakers, and schedule for users.</p>
                        <img src="/images/brackets/inmr-2019/agenda.png" alt=""/>
                    </div>
                    <div className="app-item" id="rwa-catalogue">
                        <img src="/images/brackets/inmr-2019/exhibitors.png" alt="INMR World Congress: "/>
                        <p>The INMR World Congress acts as a platform which networks lead researchers to industry giants. Companies across the world are on display and have promoted themselves prominantly over INMR's 25+ years in publication.</p>
                    </div>
                </div>
            </section>
        )
    }
}
