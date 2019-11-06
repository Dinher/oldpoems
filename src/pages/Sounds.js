import React, { Component } from 'react';
import ForestFires from './components/partials/Sounds_ForestFires';

const bc_iframe = (source) =>{
    if (!source){
        return <div>Loading...</div>
    }
    const src = source;
    return(
        <iframe title="shefindsoldpoems music player" style={iframe_style} src={src} seamless><a href="http://shefindsoldpoems.bandcamp.com/album/forest-fires">forest fires by shefindsoldpoems</a></iframe>
    )
};

const iframe_style ={
    border: '0',
    width: '350px',
    height: '350px'
}

export default class Sounds extends Component {

    render() {
        return (
            <section className="page-content" id="page-sounds">
                <ul className="links_container">
                    <li>
                        <a href="https://shefindsoldpoems.bandcamp.com/album/forest-fires">
                            <img src="/images/bandcamp.svg" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://soundcloud.com/shefindsoldpoems">
                            <img src="/images/soundcloud.svg" alt=""/>
                        </a>
                    </li>
                </ul>
                <p className="album-title" id="album-ff">forest fires<span>[2015]</span></p>
                <div className="bc-container">
                    {bc_iframe("https://bandcamp.com/EmbeddedPlayer/album=826576148/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/")}
                </div>
                <ForestFires />
            </section>
        )
    }
}
