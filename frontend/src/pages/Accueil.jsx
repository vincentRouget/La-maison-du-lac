import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";

// ***VERSION FRONTEND***
import Commune2 from '../assets/Image/Commune2.jpg';
import Hiver3 from '../assets/Image/hiver3.jpg';
import Facade from '../assets/Image/facade.jpg';
import Suiteparentale2 from '../assets/Image/suite_parentale2.jpg';
import Salle2 from '../assets/Image/salle2.jpg';
import Commune5 from '../assets/Image/commune5.jpg';
import Navbar from '../components/Navbar';
import Banniere from '../components/Banniere';
import Infos from '../components/Infos';
import Window from '../components/Window';
import CarteRoom from '../components/CarteRoom';
import Footer from '../components/Footer';
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
// ***


const Accueil = () => {

    const { user, theme, dataImage } = useContext(UserContext);
    const navigate = useNavigate();
    // ***VERSION FRONTEND***
    const interieur = [
        { name: Commune2 },
        { name: Commune6 },
        { name: Commune5 },
        { name: Chambre21 },
        { name: Suiteparentale1 },
        { name: Suiteparentale5 },
        { name: Suiteparentale9 },
        { name: Commune1 },
        { name: Suiteparentale7 },
        { name: Salle1 },
        { name: Commune4 },
    ];
    const exterieur = [
        { name: Facade },
        { name: Ete1 },
        { name: Hiver3 },
        { name: Hiver4 },
        { name: Hiver1 },
        { name: Hiver2 },
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
        <div className='Accueil'>
            <Navbar />
            <Banniere />
            <div className='Accueil_container'>
                <div className='Accueil_container_infos'>
                    <Infos
                        number=''
                        man={false}
                        parking={true}
                        air={true}
                        wifi={true}
                        vue={true}
                        tv={false}
                        bed={true}
                        dinner={true}
                        cup={true}
                    />
                </div>
                <div className='Accueil_container_intro'>
                    <div className='Accueil_container_intro_vignette'>
                        {/* ***VERSION BACKEND*** */}
                        {/* {dataImage
                            .filter((element) => element.component_name == 'introduction')
                            .map((element, index) => {
                                return (
                                    <div key={index} className='Accueil_container_intro_vignette_image'>
                                        <a href={`${import.meta.env.VITE_BACKEND_URL}/${element.image_name}`}
                                            target="_blank">
                                            <img
                                                src={`${import.meta.env.VITE_BACKEND_URL}/${element.image_name}`}
                                                alt="Image not found" />
                                        </a>
                                    </div>
                                )
                            })} */}
                        {/* *** */}
                        {/* ***VERSION FRONTEND*** */}
                        <div className='Accueil_container_intro_vignette_image'>
                            <a href={Commune2} target="_blank">
                                <img src={Commune2} alt='Image not found'></img>
                            </a>
                        </div>
                        <div className='Accueil_container_intro_vignette_image'>
                            <a href={Hiver3} target="_blank">
                                <img src={Hiver3} alt='Image not found'></img>
                            </a>
                        </div>
                        <div className='Accueil_container_intro_vignette_image'>
                            <a href={Facade} target="_blank">
                                <img src={Facade} alt='Image not found'></img>
                            </a>
                        </div>
                        <div className='Accueil_container_intro_vignette_image'>
                            <a href={Suiteparentale2} target="_blank">
                                <img src={Suiteparentale2} alt='Image not found'></img>
                            </a>
                        </div>
                        <div className='Accueil_container_intro_vignette_image'>
                            <a href={Salle2} target="_blank">
                                <img src={Salle2} alt='Image not found'></img>
                            </a>
                        </div>
                        <div className='Accueil_container_intro_vignette_image'>
                            <a href={Commune5} target="_blank">
                                <img src={Commune5} alt='Image not found'></img>
                            </a>
                        </div>
                        {/* *** */}
                    </div>
                    <div className='Accueil_container_intro_titre'>
                        <div className='Accueil_container_intro_light_titre'>
                            <h1>La Maison du Lac, chambres d'hôtes</h1>
                        </div>
                    </div>
                </div>
                <div className='Accueil_container_resume'>
                    <p>
                        Située à 25 minutes de Limoges, La Maison du Lac propose quatre hébergements entièrement rénovés depuis 2022.
                    </p>
                    <p>
                        Notre établissement dispose d'un parc d'un hectare avec accès direct au lac Saint Fortunat, d'un parking privé avec borne de recharge pour voiture électrique, et d'une connexion Wi-Fi gratuite.
                    </p>
                    <p>
                        La salle de bains privative entièrement équipée et pourvue d'une douche et d'articles de toilette gratuits.
                    </p>
                    <p>
                        Un petit-déjeuner type continental est compris dans la nuitée.
                    </p>
                </div>
                <div className='Accueil_container_h1'>
                    <h1>Intérieur</h1>
                    <div className='Accueil_container_h1_window'>
                        {/* ***VERSION BACKEND*** */}
                        {/* <Window name_component='slider1' /> */}
                        {/* *** */}
                        {/* ***VERSION FROINTEND*** */}
                        <Window name_component={interieur} />
                        {/* *** */}
                    </div>
                </div>
                <div className='Accueil_container_h1'>
                    <h1>Extérieur</h1>
                    <div className='Accueil_container_h1_window'>
                        {/* ***VERSION BACKEND*** */}
                        {/* <Window name_component='slider2' /> */}
                        {/* *** */}
                        {/* ***VERSION FROINTEND*** */}
                        <Window name_component={exterieur} />
                        {/* *** */}
                    </div>
                </div>
                {/* <div className='Accueil_container_h1'>
                    <h1>Menu</h1>
                    <div className='Accueil_container_h1_window'>
                        <Window name_component='slider3' />
                    </div>
                </div> */}
                <div className='Accueil_container_h1'>
                    <h1>Nos Formules</h1>
                </div>
                <div className='Accueil_container_formules'>
                    <CarteRoom />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Accueil;