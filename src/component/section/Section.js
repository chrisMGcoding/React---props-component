import React from 'react'
import img from '../section/test.jpg'
import '../section/section.css'

export default class Section extends React.Component {

    render() {
        return(
            <div class="container">
                <div class="row align-items-start">
                    <div class="col-6">
                        <img class ="photoCol" src={img} alt="élément non trouvée" ></img>
                    </div>
                    <div class="col-6">
                        <div classe="texteCol">
                            <h3>{this.props.titre}</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas voluptates harum maxime, optio, consequuntur quidem saepe ut modi ipsam aliquid voluptatum dolorum magni sunt quisquam magnam perspiciatis totam atque nihil molestiae? Autem, eligendi iure!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 