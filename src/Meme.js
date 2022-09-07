import React from 'react';
import '../src/index.css'; 
import memesData from './memesData';


export default Form
function Form () {
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    
    ) 
     







const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
           ...prevMeme,
           randomImage: url
        }))
    }
      
       
      
  
        

      
      


    
    
    return (
        <div className='form'>
            <div className='form-content'>
                <div className='form-input'>
                    <input className='form-inputs' type="text" placeholder='Top text'></input>
                    <input className='form-inputs' type="text" placeholder='Bottom text'></input>
                </div>
                <div className='form-btn'>
                    <button className='submit-btn' onClick={getMemeImage}>Get a new meme image 🖼</button>
                </div>
            </div>
            <div className='meme-image'>
                <img className='meme-hero' src={meme.randomImage} alt='Meme'/>
            </div>


        </div>
    )
}