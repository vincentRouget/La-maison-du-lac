import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

import Navbar from '../components/Navbar';
import Banniere from '../components/Banniere';
import Infos from '../components/Infos';
import Window from '../components/Window';
import Footer from '../components/Footer';

// ***VERSION FRONTEND***
import Commune2 from '../assets/Image/Commune2.jpg';
import Hiver3 from '../assets/Image/hiver3.jpg';
import Facade from '../assets/Image/facade.jpg';
import Suiteparentale2 from '../assets/Image/suite_parentale2.jpg';
import Salle2 from '../assets/Image/salle2.jpg';
import Commune5 from '../assets/Image/commune5.jpg';
import Commune6 from '../assets/Image/commune6.jpg';
import Chambre21 from '../assets/Image/chambre2-1.jpg';
import Suiteparentale1 from '../assets/Image/suite_parentale1.jpg';
import Suiteparentale5 from '../assets/Image/suite_parentale5.jpg';
import Suiteparentale9 from '../assets/Image/suite_parentale9.jpg';
import Commune1 from '../assets/Image/commune1.jpg';
import Suiteparentale7 from '../assets/Image/suite_parentale7.jpg';
import Salle1 from '../assets/Image/salle1.jpg';
import Commune4 from '../assets/Image/commune4.jpg';
import Ete1 from '../assets/Image/ete1.jpg';
import Hiver4 from '../assets/Image/hiver4.jpg';
import Hiver1 from '../assets/Image/hiver1.jpg';
import Hiver2 from '../assets/Image/hiver2.jpg';
import Chambre11 from '../assets/Image/chambre1-1.jpg';
import Chambre13 from '../assets/Image/chambre1-3.jpg';
import Chambre14 from '../assets/Image/chambre1-4.jpg';
import Chambre15 from '../assets/Image/chambre1-5.jpg';
import Chambre22 from '../assets/Image/chambre2-2.jpg';
import Chambre23 from '../assets/Image/chambre2-3.jpg';
import Suiteparentale10 from '../assets/Image/suite_parentale10.jpg';
import Twin1 from '../assets/Image/twin1.jpg';
import Twin2 from '../assets/Image/twin2.jpg';
import Twin3 from '../assets/Image/twin3.jpg';
import Twin4 from '../assets/Image/twin4.jpg';
// ***

const TwinRoom = () => {

    const { user, dataImage } = useContext(UserContext);
    const navigate = useNavigate();

    // ***VERSION FRONTEND***
    const ImageTwinRoom = [
        { name: Twin1 },
        { name: Twin2 },
        { name: Twin3 },
        { name: Twin4 },
        { name: Facade },
    ];
    // ***

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className='Room'>
            <Navbar />
            <div className='Room_container'>
                <div className='infos'>
                    <Infos
                        number='2'
                        man={true}
                        parking={false}
                        air={false}
                        wifi={true}
                        vue={true}
                        tv={false}
                        bed={false}
                        dinner={false}
                        cup={false}
                    />
                </div>
                <div className='Room_container_carte'>
                    <h2>Twin Room with Garden View</h2>
                    {/* ***VERSION BACKEND*** */}
                    {/* <Window name_component='contenant3' /> */}
                    {/* *** */}
                    {/* ***VERSION FROINTEND*** */}
                    <Window name_component={ImageTwinRoom} />
                    {/* *** */}
                    <div className='Room_container_carte_description'>
                        <div className='Room_container_carte_description_left'>
                            <div className='Room_container_carte_description_left_general'>
                                <div className='h4'>
                                    <h4>Description :</h4>
                                </div>
                                <li>Chambres non-fumeur</li>
                                <li>Taille : 21m²</li>
                                <li>2 lits jumeaux</li>
                                <li>Vue du jardin</li>
                            </div>
                            <div className='Room_container_carte_description_left_washing'>
                                <div className='h4'>
                                    <h4>Dans votre salle de bain privative :</h4>
                                </div>
                                <div className='li'>
                                    <li>Articles de toilette gratuits</li>
                                    <li>Toilettes</li>
                                    <li>Douche</li>
                                    <li>Serviettes</li>
                                </div>
                            </div>
                            <div className='Room_container_carte_description_left_facilities'>
                                <div className='h4'>
                                    <h4>Dans votre chambre :</h4>
                                </div>
                                <div className='li'>
                                    <li>Linge de maison</li>
                                    <li>Penderie</li>
                                    <li>Cache-prises sécurité enfant</li>
                                    <li>Jeux de société / casse-tête</li>
                                    <li>Livres</li>
                                    <li>Clé individuelle</li>
                                    <li>Chauffage</li>
                                    <li>Machine à laver</li>
                                    <li>Accès aux parties communes</li>
                                    <li>Salle à manger extérieure</li>
                                </div>
                            </div>
                        </div>
                        <div className='Room_container_carte_description_right'>
                            <h3>Services avec suppléments :</h3>
                            <div className='Room_container_carte_description_right_price'>
                                <p className='price'>Repas du soir : 16€ / personne</p>
                                <p className='price'>Lave-linge : 2€</p>
                                <p className='price'>Sèche-linge : 3€</p>
                                <p className='price'>Borne de recharge électrique : 0.30€ / kWh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TwinRoom;