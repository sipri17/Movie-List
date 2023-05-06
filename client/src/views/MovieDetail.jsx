import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchMovie } from "../store/actions/actionCreator"

export default function DetailPage() {
    const {movie} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchMovie(id))
    }, [])


    if (movie) return (
        <div className="container ">
            <h1 className="text-center" style={{ color: 'white' }}>{movie.Title} </h1>
            <div className="d-flex" style={{ marginTop: '5rem' }}>
                <div>
                    <img src={movie.Poster} width={500} />
                </div>
                <div >
                    <div className="d-flex justify-content-between">
                        <table style={{ color: 'white', marginLeft: "2rem" }} >
                            <tbody>
                                <tr >
                                    <th style={{ color: 'gold', width: '10rem' }}> <div> Rating</div>  </th>
                                    <td ><div style={{ margin: "20px" }}>
                                        {movie.imdbRating} <img className="mb-1" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" style={{ width: '21px' }} alt="" />
                                    </div></td>
                                </tr>
                                <tr >
                                    <th style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}> Director </th>
                                    <td >  <div style={{ margin: "20px" }}>{movie.Director}</div></td>
                                </tr>
                                <tr >
                                    <th style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}> Genre </th>
                                    <td >  <div style={{ margin: "20px" }}>{movie.Genre}</div></td>
                                </tr>
                                <tr >
                                    <th style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}> Released </th>
                                    <td >  <div style={{ margin: "20px" }}>{movie.Released}</div></td>
                                </tr>
                                <tr >
                                    <th style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}> Director </th>
                                    <td >  <div style={{ margin: "20px" }}>{movie.Director}</div></td>
                                </tr>
                                <tr >
                                    <th style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}> Writer </th>
                                    <td >  <div style={{ margin: "20px" }}>{movie.Writer}</div></td>
                                </tr>
                                <tr >
                                    <th style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}> Actors </th>
                                    <td >  <div style={{ margin: "20px" }}>{movie.Actors}</div></td>
                                </tr>
                                <tr >
                                    <th style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}> Synopsis </th>
                                    <td >  <div style={{ margin: "20px" }}>{movie.Plot}</div></td>
                                </tr>

                          
                            </tbody>
                        </table>


                    </div>

                </div>

            </div>
            {/* <div style={{ marginTop: "10rem" }}>
                <div className="d-flex justify-content-center">
                    <h1 style={{ color: "white", marginBottom: "40px" }} >Trailer</h1>
                </div>
                <iframe className="mx-3 my-2" width={"100%"} height={"800"} src={movie.trailerUrl} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

            </div> */}
        </div>

    )
}