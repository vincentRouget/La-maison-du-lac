import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/UserContext";
import ImageDoubleRoom from '../assets/Image/chambre2-1-2.jpg';
import ImageFamilyRoom from '../assets/Image/suite_parentale2.jpg';
import ImageTwinRoom from '../assets/Image/twin1.jpg';

import Infos from './Infos';
import Window from './Window';

const CarteRoom = () => {
    return (
        <div className='CarteRoom'>
            <div className='CarteRoom_container'>
                <NavLink to='/double-room'>
                    <div className='CarteRoom_container_formule'>
                        <div className='CarteRoom_container_formule_icone'>
                            <div className='CarteRoom_container_formule_icone_infos'>
                                <Infos
                                    number='1 à 2'
                                    man={true}
                                    parking={false}
                                    air={true}
                                    wifi={true}
                                    vue={false}
                                    tv={false}
                                    bed={false}
                                    dinner={false}
                                    cup={false}
                                />
                            </div>
                        </div>

                        <div className='CarteRoom_container_formule_carte'>
                            <h2>Superior Double Room</h2>
                        </div>
                        <div className='CarteRoom_container_formule_description'>
                            <h3>Deux chambres sont disponibles, disposant de la climatisation</h3>
                        </div>
                        <div className='CarteRoom_container_formule_image'>
                            {/* ***VERSION BACKEND*** */}
                            {/* <img
                                src={`${import.meta.env.VITE_BACKEND_URL}/chambre2-1-2.jpg`}
                                alt="Image not found" >
                            </img> */}
                            {/* *** */}
                            {/* ***VERSION FRONTEND*** */}
                            <img
                                src={ImageDoubleRoom}
                                alt="Image not found" >
                            </img>
                            {/* *** */}
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/family-room'>
                    <div className='CarteRoom_container_formule'>
                        <div className='CarteRoom_container_formule_icone'>
                            <div className='CarteRoom_container_formule_icone_infos'>
                                <Infos
                                    number='2 à 4'
                                    man={true}
                                    parking={false}
                                    air={true}
                                    wifi={true}
                                    vue={true}
                                    tv={true}
                                    bed={false}
                                    dinner={false}
                                    cup={false}
                                />
                            </div>
                        </div>
                        <div className='CarteRoom_container_formule_carte'>
                            <h2>Superior Family Room</h2>
                        </div>
                        <div className='CarteRoom_container_formule_description'>
                            <h3>Cette chambre double climatisée avec petit salon peut se transformer en suite parentale</h3>
                        </div>
                        <div className='CarteRoom_container_formule_image'>
                            {/* ***VERSION BACKEND*** */}
                            {/* <img
                                src={`${import.meta.env.VITE_BACKEND_URL}/suite_parentale5.jpg`}
                                alt="Image not found" >
                            </img> */}
                            {/* *** */}
                            {/* ***VERSION FRONTEND*** */}
                            <img
                                src={ImageFamilyRoom}
                                alt="Image not found" >
                            </img>
                            {/* *** */}
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/twin-room'>
                    <div className='CarteRoom_container_formule'>
                        <div className='CarteRoom_container_formule_icone'>
                            <div className='CarteRoom_container_formule_icone_infos'>
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
                        </div>
                        <div className='CarteRoom_container_formule_carte'>
                            <h2>Twin Room with Garden View</h2>
                        </div>
                        <div className='CarteRoom_container_formule_description'>
                            <h3>Cette chambre lits jumeaux non climatisée dispose d'un accès extérieur privé</h3>
                        </div>
                        <div className='CarteRoom_container_formule_image'>
                            {/* ***VERSION BACKEND*** */}
                            {/* <img
                                src={`${import.meta.env.VITE_BACKEND_URL}/twin1.jpg`}
                                alt="Image not found" >
                            </img> */}
                            {/* *** */}
                            {/* ***VERSION FRONTEND*** */}
                            <img
                                src={ImageTwinRoom}
                                alt="Image not found" >
                            </img>
                            {/* *** */}
                        </div>
                    </div>
                </NavLink>

            </div>
        </div >
    );
};

export default CarteRoom;