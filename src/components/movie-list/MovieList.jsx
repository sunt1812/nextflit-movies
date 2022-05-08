import React, { useEffect, useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import'./movie-list.scss'
import MovieCart from '../movie-cart/MovieCart'
import tmdbApi, { category } from '../../api/tmdbApi'

const MovieList = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async() => {
            let response = null
            const params = {}
            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.tv:
                        response = await tmdbApi.getDiscover(props.category,{params})
                        break;
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type,{params})
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type,{params})
                }
            }else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results)
        } 
        getList()
    },[])

  return (
    <div className={`movie-list ${props.isNetflix ?"movie-style":""}`}>
        <Swiper
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={10}
        navigation
        modules={[Navigation]}
        >
            {items.map((item,index) => (
                <SwiperSlide key={index}>
                    <MovieCart isNetflix={props.isNetflix} item={item} category={props.category}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default MovieList