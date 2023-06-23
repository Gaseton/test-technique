import React, { useState } from "react";
import home from "../img/home_blue.png";
import vehicule_blanc from "../img/vehicule_1_blanc.png";
import depot_doc from "../img/depot_doc_blanc.png";
import saisie from "../img/saisies_blanc.png";
import calendrier from "../img/calendrier.png";
import documentaire from "../img/documentaire.png";
import contrat from "../img/contrats.png";
import etablissements_blanc from "../img/etablissement_blanc_simple.png";
import user from "../img/user.jpg";
import notification from "../img/notificationwhite.png";

import '../css/tdb.css';

export const TdbComponent = () => {
    const [modal, setModal] = useState(0);

    const profil = () => {
        if (modal === 0) {
            setModal(1);
        } else {
            setModal(0);
        }
    }

    return (
        <div>
            <div id="bg-vehicule">
                <img className="etablissement" src={etablissements_blanc} alt="" />
                <h1>LE SITE DE DEMO</h1>
                <div className="profil">
                    <p>Notifications</p>
                    <img className="notif" src={notification} alt="" />
                    <div className="text-user">
                        <p>RV<br/>DOMS</p>
                    </div>
                    <img onClick={()=>{profil()}} className="user" src={user} alt="" />
                </div>
                <div className={modal === 1 ? ("modal-profil"):("none")}>
                    <ul>
                        <li>Mon profil</li>
                        <li>Déconnexion</li>
                    </ul>
                </div>
            </div>
            <div className="contain">
                <div className="title">
                    <img src={home} alt="" />
                    <h1>TABLEAU DE BORD</h1>
                </div>
                <div className="flex">
                    <div className="div blue">
                        <h3>MON PARC DE VÉHICULES</h3>
                        <img src={vehicule_blanc} alt="" />
                    </div>
                    <div className="div">
                        <h3>BASE DOCUMENTAIRE</h3>
                        <img src={documentaire} alt="" />
                    </div> 
                </div>
                <div className="flex">
                    <div className="div green">
                        <h3>SAISIES</h3>
                        <img src={saisie} alt="" />
                    </div>
                    <div className="div green">
                        <h3>DÉPÔTS DES DOCUMENTS</h3>
                        <img src={depot_doc} alt="" />
                    </div>
                </div>
                <div className="flex">
                    <div className="div grey">
                        <h3>CALENDRIER</h3>
                        <img src={calendrier} alt="" />
                    </div>
                    <div className="div grey">
                        <h3>CONTRATS DE LOCATIONS</h3>
                        <img src={contrat} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}