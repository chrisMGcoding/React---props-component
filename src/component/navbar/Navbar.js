import React from 'react'
import './navbar.css'

export default class Navbar extends React.Component {
    
    count1 = () => {
        return console.log("Prix");
    }
    count2 = () => {
        return console.log("Galerie");
    }
    count3 = () => {
        return console.log("Contact");
    }  

    render() {
        return (
            <div class="navbar">
                <nav className="nav">
                    <button className="button" onClick={this.count1}>Link 1</button>
                    <button className="button" onMouseEnter={this.count2}>Link 2</button>
                    <button className="button" onDoubleClick={this.count3}>Link 3</button>
                </nav>
                <div class="search">
                    <p>Search :</p>
                    <input></input>
                    <button>GO</button>
                </div>
            </div>
        )
    }
}