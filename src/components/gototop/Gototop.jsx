import React from 'react'
import './gototop.scss'
import { animateScroll as scroll } from 'react-scroll'
import {useScroll} from '../hooks/useScroll'
const Gototop = (props) => {
  const [scrollY] = useScroll()
  return (
    <div className="gototop" onClick={() => scroll.scrollToTop()} style={{visibility:`${scrollY > 300 ?"visible":"hidden"}`}}>
           <i className='bx bxs-up-arrow-circle'></i>
      </div>
  )
}

export default Gototop
