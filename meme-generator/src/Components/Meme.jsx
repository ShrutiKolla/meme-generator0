import React, { useState } from 'react'

// css
import mainCss from '../assets/css/main.module.css';

export default function Meme() {
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages] = useState();

    const handleClick = function () {
        const idx = Math.floor(allMemeImages.length * Math.random());
        setMeme(prevMeme => ({ ...prevMeme, randomImage: allMemeImages[idx].url }))
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prev => (
            {
                ...prev,
                [name]: value
            }
        ))
    }
    return (
        <main>
            <div className={mainCss.form}>
                <input
                    type="text"
                    placeholder='Top text'
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    className={mainCss.form__input}
                />
                <input
                    type="text"
                    placeholder='Bottom text'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    className={mainCss.form__input}
                />
                <button onClick={handleClick} className={mainCss.form__button}>Get a new meme image  🖼</button>
                <div className={mainCss.meme}>
                    <img src={meme.randomImage} alt="" />
                    <h2 className={mainCss.meme_top}>{meme.topText}</h2>
                    <h2 className={mainCss.meme_bottom}>{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    );
}