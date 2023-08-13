import React from 'react'

// imgs
import troll from '../assets/imgs/troll-face.svg';

// css
import navCss from '../assets/css/nav.module.css';
export default function Nav() {
    return(
        <nav>
            <img src={troll}/>
            <h1 className={navCss.nav__title}>Meme Generator</h1>
            {/* <p>React Course - Project 3</p  > */}
        </nav>
    );
}