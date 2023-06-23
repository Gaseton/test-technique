import React, { useState } from "react";
import logo1 from "../img/e-carnet-vehicule-logo.png";
import logo2 from "../img/e-carnet-vehicule-icone.png";
import ecarnet_blanc from "../img/e-carnet_blanc.png";
import etablissements_blanc from "../img/etablissements_blanc.png";
import home_blanc from "../img/home_blanc.png";
import vehicule_1_blanc from "../img/vehicule_1_blanc.png";
import interventions_blanc from "../img/interventions_blanc.png";
import vacances from "../img/vacances.png";
import enveloppe from "../img/enveloppe.png";
import saisie from "../img/saisies.png";
import intervention from "../img/interventions.png";

import '../css/navbar.css';

export const NavbarComponent = () => {
    const [logo, setLogo] = useState(logo1);
    const [button, setButton] = useState('<');
    const [div, setDiv] = useState(0);

    const Click = () => {
        if (logo === logo2) {
            setLogo(logo1);
            setButton('<');
            document.getElementById("bg-vehicule").style.width = "calc(100vw - 220px)";
        } else {
            setLogo(logo2)
            setButton('>');
            document.getElementById("bg-vehicule").style.width = "calc(100vw - 80px)";
        }
    }
    const SousDiv = () => {
        if (div === 0) {
            setDiv(1)
        } else {
            setDiv(0)
        }
    }

    return (
        <div>
            <img className={logo === logo1 ? ("logo"):("logo2")} src={logo} alt=""/>
            <div className={logo === logo1 ? ("nav"):("nav2")}>
                <ul>
                    <li><img src={ecarnet_blanc} alt=""/><span>CHOIX DU CARNET</span></li>
                    <li><img src={etablissements_blanc} alt=""/><span>CHOIX DE L'ÉTABLISSEMENT</span></li>
                        <hr/>
                    <li><img src={home_blanc} alt=""/><span>TABLEAU DE BORD</span></li>
                        <hr/>
                    <li><img src={vehicule_1_blanc} alt=""/><span>VÉHICULES</span></li>
                    <li onClick={()=>{SousDiv()}}><img src={interventions_blanc} alt=""/><span>INTERVENTIONS</span></li>
                    <div className={div === 1 ? ("sous-div"):("none")}>
                        <ul>
                            <li><img src={saisie} alt=""/><span>SAISIES</span></li>
                            <li><img src={intervention} alt=""/><span>INTERVENTIONS</span></li>
                        </ul>
                    </div>
                    <li><img src={vacances} alt=""/><span>VACANCES / CONGÉS</span></li>
                        <hr/>
                    <li><img src={enveloppe} alt=""/><span>CONTACT</span></li>
                        <hr/>
                </ul>
                <div className="center-btn">
                    <button onClick={()=>{Click()}}>{button}</button>
                </div>
            </div>
        </div>
    )
}