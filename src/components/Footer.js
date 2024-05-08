import "../styles/footer.css";
import {Link} from "react-router-dom";
import { useEffect } from 'react';

const Footer = () => {

    // ----- ----- fixed footer effect ----- ----- 

    // Update height of placeholder to height of footer
    function updateHeight() {
        // Get placeholder element and footer element
        const placeholder = document.querySelector(".placeholder");
        const footer = document.querySelector("footer");

        // Placeholder should always match footer height
        placeholder.style.height = `${footer.offsetHeight}px`
    }

    useEffect( () => {
        updateHeight();
        window.addEventListener('resize', updateHeight);

    },[]);


    return (
        <>

            <div className="placeholder"></div>

            <footer>
                <div className="section__container footer__container">
                    <div className="footer__col">
                        <h4>Get In Touch</h4>
                        <p><i className="ri-map-pin-line"></i> Tulsa, Oklahoma</p>
                        <a href="mailto:aLucaProject@gmail.com"><i className="ri-mail-send-line"></i> aLucaProject@gmail.com</a>
                    </div>
                    <div className="footer__col">
                        <h4>Quick Links</h4>
                        <ul className="footer__links">
                            <li><Link to="/#home">Home</Link></li>
                            <li><Link to="/#about">About</Link></li>
                            <li><Link to="/projects#projects">Projects</Link></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4>Social Media</h4>
                        <div className="footer__socials">
                            <a href="https://instagram.com/alucaproject"><i className="ri-instagram-line"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer__bar">
                    Copyrights &copy; a Luca Project. All rights reserved.<br />
                    Designed and developed by <a href="https://www.alucaproject.com">aLucaProject.com</a>
                </div>
            </footer>

        </>
    )
}

export default Footer;