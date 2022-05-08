import React from 'react'
import { Link } from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import { category } from '../../api/tmdbApi'
import Button from '../button/Button'
import './movie-cart.scss'

const MovieCart = (props) => {
  
    const item = props.item
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path) 
  return (
    <Link to={link}>
        <div className={`movie-cart ${props.isNetflix ?"netflix":""}`} style={{backgroundImage: `url(${bg})`}}>
            <Button className="small">
                <i className="bx bx-play"></i>
            </Button>
        </div>
        <h3>{item.title || item.name}</h3>
    </Link>
  )
}

export default MovieCart