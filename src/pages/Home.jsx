import React from 'react'
import { category, movieType, tvType } from '../api/tmdbApi'
import Menu from '../components/menu/Menu'
import MovieList from '../components/movie-list/MovieList'
import Video from '../components/video/Video'

const Home = () => {
  	let isNetflix = true
  return (
		<div className="wrapper">
			<Video/>
			<Menu/>
			<div className="section mb-2" id="Discover">
				<div className="section__heading">        
					TV Discover
				</div>
				<MovieList category={category.tv} isNetflix={isNetflix}/>
			</div>
			<div className="section mb-2" id="top_rated_movie">
				<div className="section__heading">        
					top rated Movie
				</div>
				<MovieList category={category.movie} type={movieType.top_rated}/>
			</div>
			<div className="section mb-2" id="top_rated_tv">
				<div className="section__heading">        
					top rated Tv
				</div>
				<MovieList category={category.tv} type={tvType.top_rated}/>
			</div>
			<div className="section mb-2" id="popular_movie">
				<div className="section__heading">        
					popular Movie
				</div>
				<MovieList category={category.movie} type={movieType.popular}/>
			</div>
			<div className="section mb-2" id="popular_tv">
				<div className="section__heading">        
					popular Movie
				</div>
				<MovieList category={category.tv} type={tvType.popular}/>
			</div>
		</div>
  	)
}

export default Home