import React, { Component } from 'react'

export default class ForestFires extends Component {
    state = {
        album: require('../../../data/album-ff.json')
    }
    render() {
        return (
            <div className="album-meta_container">
                <ul>
                    {
                        Object.keys(this.state.album).map((song)=>
                            <li>
                                <p className="song-title" data-has-lyrics={this.state.album[song].lyrics.length > 0?"-":""}>{this.state.album[song].title}</p>
                                <p className="song-lyrics">{this.state.album[song].lyrics}</p>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
