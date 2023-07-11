import React from 'react'

// imgs
import troll from '../assets/imgs/troll-face.svg';

// css
import mainCss from '../assets/css/main.module.css';
export default function Meme() {
    return (
        <main>
            <form className={mainCss.form}>
                <input 
                    type="text" 
                    placeholder='Top text'
                    className={mainCss.form__input}
                />
                <input 
                    type="text" 
                    placeholder='Bottom text'
                    className={mainCss.form__input}
                />
                <button className={mainCss.form__button}>Get a new meme image  🖼</button>
            </form>
        </main>
    );
}