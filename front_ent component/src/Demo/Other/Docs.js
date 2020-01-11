import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

class Docs extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title=' Innovation :' isOption>
                            <p> - Création , conception et/ou production d’une meilleure valeur ajoutée </p>
                            <p> - Quatre (4) catégories d'innovations (Manuel d’Oslo) <code>produit (bien ou prestation de service)</code> <code> procédé </code>||<code>organisation </code>|| <code>marketing </code> </p>
                        </Card>
                        <Card title='  Valorisation :' isOption>
                            <p> - Mise en valeur de quelque chose pour en tirer davantage de ressources</p>
                            <p> - Valorisation de la Recherche :<code> Etude de l’Innovation, Brevetage (protection de la Propriété Intellectuelle), Incubation (Prototypage, promotion auprès des industriels et des investisseurs), Exploitation de Licences , lancement de startups</code></p>

                        </Card>
                        <Card title=' Ériger la Cité d’Innovation de Rabat en tant que :' isOption>
                       
                            <p> - Véritable guichet unique pour les industriels aux espaces R&D et Innovation de l’UM5R</p>
                            <p> - Hébergement et développement de la chaîne d’InnovationValorisation, depuis la phase de maturation amont à la finalisation et la commercialisation de produits de la connaissance de l’UM5R.dans le but de transférer les technologies à l'industrie: Licences, Startups, etc</p>
                        </Card>    
                        <div className='theme-bg2 text-center shadow-4 p-3'>
                                <h1 className='text-capitalize text-white '>From Knowledge to Market</h1>
                        </div>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Docs;