import React from 'react'

// imgs

// css
import mainCss from '../assets/css/main.module.css';
export default function Meme(props) {
    const [imgUrl, setImgUrl] = React.useState("");
    const handleClick = function() {
        const memeLen = props.memes.length;
        const idx = Math.floor(memeLen*Math.random());
        setImgUrl(props.memes[idx].url);
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