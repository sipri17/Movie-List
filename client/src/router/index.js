import { createBrowserRouter, redirect } from "react-router-dom";
import Root from '../views/Root'
import MovieList from "../views/MovieList";
import MovieDetail from "../views/MovieDetail"
import NotFound404 from "../views/NotFound404" 



const router = createBrowserRouter([

    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <MovieList />
            }, 
            {
                path: "/:id",
                element: <MovieDetail />
            },     
              
            {
                path: "*",
                element: <NotFound404 />
            },
           
        ],
    
    }
]);

export default router