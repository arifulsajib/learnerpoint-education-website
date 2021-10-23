import React from 'react';
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer text-center bg-light">
            <img src={logo} alt="" width="200"/>
            <p className="text-secondary"> &copy; Copyright 2021 <a href="https://www.linkedin.com/in/arifulsajib/" className="text-decoration-none orange">Ariful Sajib</a> All rights reserved </p>
        </div>
    );
};

export default Footer;