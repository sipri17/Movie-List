import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies,fetchNewPageMovies } from '../store/actions/actionCreator'
import baseUrl from '../utilities/baseUrl'
import InfiniteScroll from 'react-infinite-scroll-component';



export default function FileList() {

    let [input, setInput] = useState({ search: 'avengers', filter: null })
    let {movies} = useSelector(state => state.movies)
    
    const dispatch = useDispatch()
    let [page, setPage] = useState(1)




    function useDebounce(value = any, delay = number) {
        const [debouncedValue, setDebouncedValue] = useState(value)

        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            }

        }, [value, delay]

        )
        return debouncedValue
    }

    const debouncedSearch = useDebounce(input.search, 500)
    const fetchData = () => {
        setTimeout(()=>{
            setPage(page => page + 1);
        },500)
        
    }

    useEffect(()=>{
        dispatch(fetchNewPageMovies(input.search, input.filter, page)) 
    },[page])

    useEffect(() => {
        if (debouncedSearch) {
            dispatch(fetchMovies(input.search, input.filter))            
        }
        
    }, [debouncedSearch, input.filter])


    function onChangeHandler(e) {
        const { name } = e.target
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const obj = { ...input, [name]: value }
        setInput(obj)
        console.log(obj);

    }

    console.log(movies,'<<<movies');






    return (
        <div className='container'>
            <div className='d-flex justify-content-center center-text'>
                <h1 style={{ color: 'white' }}> Movie List</h1>



            </div>
            <div className="row my-3" >
                <form className="d-flex-column " >
                    <div className='w-50 '>
                        <input className="form-control " onChange={onChangeHandler} type="text" name="search" placeholder="Search by title" />
                    </div>
                    <div className="btn-group my-2" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" value="movie" className="btn-check" onChange={onChangeHandler} name="filter" id="btnradio1" autoComplete="off"  />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Movie</label>
                        <input type="radio" value="series" className="btn-check" onChange={onChangeHandler} name="filter" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Series</label>
                        <input type="radio" value="episode" className="btn-check" onChange={onChangeHandler} name="filter" id="btnradio3" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Episode</label>
                        <input type="radio" value="none" className="btn-check" onChange={onChangeHandler} name="filter" id="btnradio4" autoComplete="off" defaultChecked/>
                        <label className="btn btn-outline-primary" htmlFor="btnradio4">None</label>
                    </div>
                </form>

            </div>

            <InfiniteScroll
                dataLength={movies ? movies.length : 0} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }

            >

                <div className="mx-auto" >

                    <div>
                        <div className="row row-cols-1 row-cols-md-5 g-3 ">
                            {movies ? movies.map((movie, index) => {
                                return <MovieCard movie={movie} key={index} index={index} />
                            }) : <></>}
                        </div>
                    </div>


                </div>
            </InfiniteScroll>


        </div >
    )
}

