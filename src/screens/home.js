import React from "react";
import { NavbarComponent } from "../components/navbar";
import { TdbComponent } from "../components/tableau-de-bord";
import '../css/home.css';

export const Navbar = () => {
    return (
        <div className="home">
            <NavbarComponent />
            <TdbComponent />
        </div>
    )
}