import baseUrl from '../../utilities/baseUrl'



export function fetchMovies(search,filter) {
    return async (dispatch, getState) => {
        try {

            console.log('link:',`${baseUrl}/movies?search=${search}&type=${filter}`);
            const res = await fetch(`${baseUrl}/movies?search=${search}&type=${filter}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!res.ok) {
                throw await res.json()
            }
            const data = await res.json()
            dispatch({
                type: "movies/fetchSuccess",
                payload: data.Search
            })
            
            
            
        } catch (error) {
            console.error(error)
        }
    
    }
}

export function fetchNewPageMovies(search,filter,page) {
    return async (dispatch, getState) => {
        try {

            console.log('link:',`${baseUrl}/movies?search=${search}&type=${filter}&page=${page}`);
            const res = await fetch(`${baseUrl}/movies?search=${search}&type=${filter}&page=${page}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!res.ok) {
                throw await res.json()
            }
            const data = await res.json()
            dispatch({
                type: "newPageMovies/fetchSuccess",
                payload: data.Search,
                page
            })
            
            
        } catch (error) {
            console.error(error)
        }
    
    }
}

export function fetchMovie(id) {
    return async (dispatch, getState) => {
        try {

            const res = await fetch( `${baseUrl}/movie/${id}`, {               
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!res.ok) {
                throw await res.json()
            }
            const data = await res.json()
            dispatch({
                type: "movie/fetchSuccess",
                payload: data
            })
            
            
        } catch (error) {
            console.error(error)
        }
    
    }
}

export function loginHandler(input) {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(`${baseUrl}/login`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            })

            const data = await res.json()

            if (!res.ok) {
                throw data
            }

            localStorage.setItem('access_token', data.access_token) 
            localStorage.setItem('fullName', data.fullName) 
            localStorage.setItem('role', data.role) 

            
        } catch (error) {
            console.log(error)
        } 
    }
}








