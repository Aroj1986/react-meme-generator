import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link} from "react-router-dom";


function Memes() {

  const [memes, setMemes] = useState([])

  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
    .then((response) => {
      console.log(response.data.data.memes)
      setMemes(response.data.data.memes)
    })
  }, [])

  return (
    <>
      <div className='memes-lists'>
        {memes.map((meme) => {
          return (
            <div className="card-container" key={meme.id}>
              <img src={meme.url} key={meme.id} style={{ width: 250, height: 250 }} alt={"meme image"}></img>
              <Link to={`/${meme.id}`}><button type="button" className="btn btn-secondary btn-m card-caption">{meme.name}</button></Link>
            </div>
            )
        })}
      </div>
    </>
  );
}

export default Memes;
