
// Components
import Nav from './Components/Nav.jsx'
import Meme from './Components/Meme.jsx'
import {meme}from './Components/MemeDb.js'

function App() {
  const memes = meme.data.memes;
  const thingsArray = ["Thing 1", "Thing 2"]
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  function addThing() {
      thingsArray.push(thingsArray.length+1);
      console.log(thingsArray);
  }
  // console.log(Math.floor(memeLen*Math.random()));
  return (
    <>
      <Nav/>  
      <Meme memes = {memes}/>   
      {thingsElements}
      <button onClick={addThing}>click</button>
    </>
  )
}

export default App
