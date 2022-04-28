import React from 'react';
import NewsWrapper from '../../assets/NewsWrapper/NewsWrapper';
import Rightbar from '../../assets/Rightbar/Rightbar';




const Home = ({createNews, newsArr, kindOfNews, searchNews, setKindOfNews}) => {
    return (
        <>
            <NewsWrapper createNews={createNews} kindOfNews={kindOfNews} searchNews={searchNews} newsArr={newsArr} />
            <Rightbar createNews={createNews} newsArr={newsArr} setKindOfNews={setKindOfNews} />
        </>
    );
};

export default Home;