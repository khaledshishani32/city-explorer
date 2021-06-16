import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
export class Movies extends Component {
    render() {
        return (
            <>
            {
                this.props.movies.map(moviesObj=>{
                    return(
                        <>
                        <ListGroup>
                        {moviesObj.title}
                        </ListGroup>
                        <ListGroup>
                        {moviesObj.overview}
                        </ListGroup>
                        <ListGroup>
                        {moviesObj.vote_average}
                        </ListGroup>
                        <ListGroup>
                        {moviesObj.overview}
                        </ListGroup>
                        <ListGroup>
                        {moviesObj.popularity}
                        </ListGroup>
                        <ListGroup>
                        {moviesObj.release_date}
                        </ListGroup>
                        </>
                    )
                })
            }
            </>
        )
    }
}

export default Movies
