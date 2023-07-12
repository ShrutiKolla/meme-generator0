import React from 'react'

// imgs
import troll from '../assets/imgs/troll-face.svg';

// css
import mainCss from '../assets/css/main.module.css';
export default function Meme(props) {
    let imgUrl;
    const handleClick = function() {
        const memeLen = props.memes.length;
        const idx = Math.floor(memeLen*Math.random());
        // console.log(props.memes[idx].url);
        imgUrl = props.memes[idx].url;
        // console.log(typeof(imgUrl))
    }
    return (
        <main>
            <div className={mainCss.form}>
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
                <button onClick={handleClick} className={mainCss.form__button}>Get a new meme image  🖼</button>
                <div className={mainCss.image}>
                    {imgUrl && <img src={imgUrl} alt="" />}
                    
                </div>
            </div>
        </main>
    );
}