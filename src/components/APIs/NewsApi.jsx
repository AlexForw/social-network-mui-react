import React from 'react';

const NewsApi = () => {
    const API = 'https://inshortsapi.vercel.app/news?category='


    const createNews = async (target) => {
        const resp = await fetch(`${API}=${target}`)
        const data = await resp.json()
        console.log(data)
    }

    return (
        <div>

        </div>
    );
};

export default NewsApi;










// const API = 'http://www.omdbapi.com?apikey=47daf436'


// const searchFilm = async (target) =>{
//     const resp = await fetch(`${API}&s=${target}`)
//     const data = await resp.json()
//     setFilm(data.Search)
//   }