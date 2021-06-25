import React from 'react'
import Section from '../section/Section'

export default class Body extends React.Component {
    render() {
        return(
            <div>
                <Section titre="Les Tartines" />
                <Section titre="Coding School"/>
            </div>
        )
    }
}