import React, { Component } from 'react'

export default class About_contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let change = {};
        change[event.target.name] = event.target.value
        this.setState(change);
    }

    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className="about-contact">
               <div className="about-flag">
                    <img src="/images/flag.svg" alt=""/>
                    <p>Say<br/>Hello!</p>
                </div>
                <ul className="about-from">
                    <li>Mr. Dinh</li>
                    <li>5121 Av. Lanaudiere<br/>Montreal, Quebec<br/>H2J 3R2</li>
                    <li>(438) 765-4321</li>
                    <li><a className="external-link" href="">&#110;&#103;&#100;&#50;&#53;&#51;&#64;&#117;&#115;&#97;&#115;&#107;&#46;&#99;&#97;</a></li>
                </ul>
                <div> 
                    <form onSubmit={this.handleSubmit} className="about-to">
                        <input type="text" name="name" placeholder="Abagail Smith" disabled onChange={this.handleChange}/>
                        <input type="email" name="email" placeholder="note@internet.com" disabled onChange={this.handleChange}/>
                        <input type="hidden" name="message" placeholder="Dearest Nguyen..." disabled onChange={this.handleChange}/>
                        <a href="mailto:ngd253@usask.ca?subject=Hi Nguyen!">POST</a>
                    </form>
                </div> 
            </div>
        )
    }
}
