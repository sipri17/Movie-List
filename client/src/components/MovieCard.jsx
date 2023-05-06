import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function FileListRow({ movie, index }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()







    return (
        <div className="col ">
            <div className="card " style={{ height: '48vh' }}>
                <div className="d-flex flex-column">
                    <a onClick={() => navigate(`/${movie.imdbID}`)}>
                        <img src={movie.Poster} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />

                    </a>
                    {/* <div className="card-body text-dark">
              <text className="card-title">{movie.Title}</text>
            </div> */}
                    <ul className="list-group  my-2 mx-2">
                        <li className="list-group-item px-4"> {movie.Title} </li>
                        <li className="list-group-item px-4"> {movie.Year} </li>
                     

                    </ul>

                </div>
            </div>
        </div>


    )
}