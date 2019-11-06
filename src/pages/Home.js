import React, { Component } from 'react'

export default class Home extends Component {

    render() {
        return (
            <div className="page-content" id="page-home">
                <section>
                    <div className="title-card">
                        <img src="/images/scenes/compressed/156.jpg" alt=""/>
                        <h2>Patience</h2>
                        <p>Lets the smaller details thrive</p>
                    </div>
                    <div className="content-card">
                        <img src="/images/selfie.jpeg" alt="It's me, Nguyen"/>
                        <p>Welcome<br/>Currently, you're visiting the busy work of Nguyen Dinh over the past decade or so. It ebbs around my work with web development and programming; spoken word, poetics and essays; experiments in music production and instrumentation; and amateur photography and image manipulation. It's been fun (well, never really stopped being) and I hope you enjoy your visit to my little digital space in it all.</p>
                    </div>
                    <div className="split-image-card">
                        <img src="/images/scenes/compressed/56.jpg" alt=""/>
                        </div>
                    <div className="split-text-card" >
                        <p>A graduate of Computer Science from Concordia University (Montreal, 2019), I have been working as a Full Stack web developer developing projects such as Reading With Austen, INMR World Congress Proceedings, and doing additional Development and IT work for INMR. My passion projects include natural language processing, using technology to aid in language formulation and accessability, user interfaces and video games. <br/><br/>At my core I have a richly creative spirit and I want to use that drive to discover new things and bring ideas to life.</p>
                    </div>
                    <div className="splash-card">
                        <img src="/images/scenes/compressed/103.jpg" alt=""/>
                    </div>
                </section>
            </div>
        )
    }
}
