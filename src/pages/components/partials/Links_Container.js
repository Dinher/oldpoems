import React, { Component } from 'react'

export default class Links_Container extends Component {
    render() {
        return (
            <ul className="links_container">
                <li>
                    <a href="https://www.github.com/dinher">
                        <img src="/images/github-logo.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="/brackets#page-brackets">
                        <img src="/images/brackets/rwa/austen-silhouette.jpg" style={{width:"auto",height:"63px",padding:"2px 5px",border:"2px solid black",borderRadius:"3px", backgroundColor:"white",boxShadow:"3px 3px 7px -5px black"}} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="/brackets/inmr">
                        <img src="/images/brackets/inmr-2019/INMR-logo.png" style={{width:"auto",height:"35px"}} alt=""/>
                    </a>
                </li>
            </ul>
        )
    }
}
