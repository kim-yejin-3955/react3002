import React from 'react';
import {Link} from "react-router-dom";

function Footer(){
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer__inner">
                    <div>
                        <p>Let's create</p>
                        <h3>Let's GET IN TOUCH</h3>
                        <Link to="/contact" className="contact">Contact me</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;