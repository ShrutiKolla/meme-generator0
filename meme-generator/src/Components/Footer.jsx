import React from 'react'

import trollFace from '../assets/imgs/footerFace.png';

// css
// import navCss from '../assets/css/nav.module.css';
import footerCss from '../assets/css/footer.module.css';
export default function Nav() {
    return(
        <footer>
            <p> <img src={trollFace} alt="" /> &copy; 2023 Shruti Kolla</p>
        </footer>
    );
}