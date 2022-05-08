import React, { Fragment } from 'react'
import {Link} from 'react-scroll'
import { ramdonBgbaColor } from '../../utils/utils'
import'./menu.scss'
const subMenu = [
    {
        display:"video",
        icon :<i className='bx bxs-videos'></i>,
        path:"video"
    },
    {
        display:"Discover",
        icon:<i className='bx bxs-droplet'></i>,
        path:"Discover"
    },
    {
        display:"top_rated_movie",
        icon :<i className='bx bxs-hot'></i>,
        path:"top_rated_movie"
    },
    {
        display:"top_rated_tv",
        icon :<i className='bx bxs-bookmark-star' ></i>,
        path:"top_rated_tv"
    },
    {
        display:"popular_movie",
        icon:<i className='bx bxs-bolt'></i>,
        path:"popular_movie"
    },
    {
        display:"popular_tv",
        icon:<i className='bx bxs-star' ></i>,
        path:"popular_tv"
    },
]
const Menu = () => {
  return (
    <div className="menu">
        {subMenu.map((item,index) => (
            <Link
            to={item.path}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            className="menu__content" key={index}>
                <div className="icon" style={{color:ramdonBgbaColor(1)}}> {item.icon}</div>
                <div className="title">{item.display}</div>
            </Link>
        ))}
    </div>
  )
}

export default Menu