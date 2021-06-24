import React from 'react'
import './navbar.css'

export default class Navbar extends React.Component {

    nb1 = 0;
    nb2 = 0;
    nb3 = 0;
    nb4 = 0;
    
    count1 = (e) => {
        this.nb1++;
        console.log(this.nb1);
        let texte = e.target.textContent;
        texte = "j'ai été cliqué " + this.nb1 + "fois";
        console.log(e.target)
        return e.target.textContent = texte;
    }
    count2 = (e) => {
        this.nb2++;
        console.log(this.nb2);
        let texte = e.target.textContent;
        texte = "j'ai été cliqué " + this.nb2 + "fois";
        console.log(e.target)
        return e.target.textContent = texte;
    }
    count3 = (e) => {
        this.nb3++;
        console.log(this.nb3);
        let texte = e.target.textContent;
        texte = "j'ai été cliqué " + this.nb3 + "fois";
        console.log(e.target)
        return e.target.textContent = texte;
    } 
    count4 = (e) => {
        this.nb4++;
        console.log(this.nb4);
        let texte = e.target.textContent;
        texte = "j'ai été cliqué " + this.nb4 + "fois";
        console.log(e.target)
        return e.target.textContent = texte;
    }  

    render() {
        return (
            <nav>
                <button onClick={this.count1}>Accueil</button>
                <button onClick={this.count2}>Informations Pratiques</button>
                <button onClick={this.count3}>Prix</button>
                <button onClick={this.count4}>Contact</button>
            </nav>
        )
    }
}