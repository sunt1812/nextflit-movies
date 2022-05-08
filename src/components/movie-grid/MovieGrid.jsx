import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import Button from '../button/Button';
import MovieCart from '../movie-cart/MovieCart';
import MovieSearch from '../search-movie/MovieSearch';
import './movie-grid.scss'

const MovieGrid = (props) => {
    const { keyword } = useParams()
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async() => {
            let response = null
            if(keyword === undefined) {
                const params = {}
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.popular,{params})
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular,{params})
                }
            }else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category,{params});
                console.log(response)
            }
            setItems(response.results.slice(0,10))
            setTotalPage(response.total_pages);
        } 
        getList()
    },[props.category,keyword])

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch(props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, {params});
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, {params});
        }
        setItems([...items, ...response.results.slice(0,10)]);
        setPage(page + 1);
    }

  return (
    <Fragment>
        <div className="section mb-3">
            <MovieSearch category={props.category} keyword={keyword}/>
        </div>
        <div className="movie-grid">
            {
                items.map((item, i) => <MovieCart category={props.category} item={item} key={i}/>)
            }
        </div>
        {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <Button className="small" onClick={loadMore}>Load more</Button>
                    </div>
                ) : null
            }
    </Fragment>
  )
}

export default MovieGrid