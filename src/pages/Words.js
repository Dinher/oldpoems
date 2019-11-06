import React, { Component } from 'react'

export default class Words extends Component {
    componentDidMount(){
        document.querySelector('.page-content').classList.add('opacity-full');
    }
    render() {
        return (
            <section>
                Page: Words
            </section>
        )
    }
}
