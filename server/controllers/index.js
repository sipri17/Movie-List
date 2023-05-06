const apiKey = process.env.apikey
const axios = require('axios')
let url ;

class Controller {


    static async fetchMovies(req, res, next) {
        try {
            let { page, search, type } = req.query
            if (!page) page = 1
            if (type == 'none') {
                url = "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + search + "&page=" + page
                
            } else {
                url = "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + search + "&page=" + page + "&type=" + type
            }
            const { data } = await axios({
                method: 'get',
                url
            })
            console.log(url, '<<<<link');

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async fetchMovie(req, res, next) {
        try {
            let { id } = req.params

            const { data } = await axios({
                method: 'get',
                url: "http://www.omdbapi.com/?apikey=" + apiKey + "&i=" + id
            })
            console.log(data, '<<<<data');

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }




}

module.exports = Controller