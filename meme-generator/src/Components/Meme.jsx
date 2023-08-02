import React, { useState } from 'react'

// dbs
import memeData from "./MemeDb.json";

// css
import mainCss from '../assets/css/main.module.css';

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    const [meme, setMeme] = React.useState(
        {
            topText : "",
            bottomText : "",
            randomImage : "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages] = useState(memeData.data.memes);

    const handleClick = function() {
        const idx = Math.floor(allMemeImages.length * Math.random());
        setMeme(prevMeme => ({...prevMeme, randomImage : allMemeImages[idx].url}))
        console.log(allMemeImages[idx].name)
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prev => (
            {
                ...prev,
                [name]:value
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