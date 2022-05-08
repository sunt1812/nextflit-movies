import React from 'react'
import './header.scss'
import logo from '../../assets/images/logo.png'
import { useScroll } from '../hooks/useScroll'
import { Link ,useLocation} from 'react-router-dom'
const menuHeader = [
  {
    display:"home",
    path:"/"
  },
  {
    display:"movies",
    path:"/movie"
  },
  {
    display:"tv series",
    path:"/tv"
  },
]

const Header = () => {
  const [scrollY] = useScroll()
  const {pathname} = useLocation()
  const active = menuHeader.findIndex(e => e.path === pathname)

  return (
    <header className={`header ${scrollY > 80 ? "srink":""}`}>
        <div className="header__navbar container">
            <Link to ="/" className="header__navbar__logo">
                <img src={logo} alt="" />
                tv movies
            </Link>
            <ul className="header__navbar__menu">
              {menuHeader.map((item,index) => (
                <li className={`header__navbar__menu__item ${index === active ? "active" : "" }`} key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
        </div>
    </header>
  )
}

export default Header