import React from 'react'
import { useNavigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function Meme() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [meme, setMeme] = useState([])

    useEffect(() => {
        axios.get(`https://api.imgflip.com/get_memes?${id}`)
        .then((response) => {
            setMeme(response.data.data.memes)
            console.log(response.data)
        })
      }, [])
      console.log(meme)
  return (
    <div>
        <h1>{id}</h1>
      <div className="row back-btn-forward">
        <Link onClick={() => navigate(-1)} className="textdecoration-none ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-skip-backward-btn "
              viewBox="0 0 16 16"
            >
              <path d="M11.21 5.093A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8.5 8.972V10.5a.5.5 0 0 1-.79.407L5 8.972V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v1.528l2.71-1.935a.5.5 0 0 1 .79.407v1.528l2.71-1.935z" />
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          </span>
        </Link>
        <Link onClick={() => navigate(1)} className="textdecoration-none ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-skip-forward-btn "
              viewBox="0 0 16 16"
            >
              <path d="M4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L7.5 8.972V10.5a.5.5 0 0 0 .79.407L11 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L8.29 5.093a.5.5 0 0 0-.79.407v1.528L4.79 5.093z"/>
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Meme
