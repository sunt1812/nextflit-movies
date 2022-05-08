import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { category } from '../api/tmdbApi'
import MovieGrid from '../components/movie-grid/MovieGrid'
import PageHeader from '../components/page-header/PageHeader'

const Catalog = () => {
    const params = useParams()
  return (
      <Fragment>
        <PageHeader>
            {params.category === category.movie ? 'Movies' : 'TV Series'}
        </PageHeader>
        <div className="container">
            <div className="section mb-3">
                <MovieGrid category={params.category}/>
            </div>
        </div>
      </Fragment>
  )
}

export default Catalog