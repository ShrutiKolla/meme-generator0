
// Components
import Nav from './Components/Nav.jsx'
import Meme from './Components/Meme.jsx'
import {meme}from './Components/MemeDb.js'

function App() {
  const memes = meme.data.memes;
  let memeLen = memes.length
  console.log(Math.floor(memeLen*Math.random()));
  return (
    <>
      <Nav/>  
      <Meme memes = {memes}/>   
    </>
  )
}

export default App
