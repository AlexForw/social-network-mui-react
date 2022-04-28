import React from 'react';
import NewsWrapper from './components/assets/NewsWrapper/NewsWrapper';
import Rightbar from './components/assets/Rightbar/Rightbar';




const Home = () => {
    return (
        <>
            <NewsWrapper createNews={createNews} kindOfNews={kindOfNews} searchNews={searchNews} newsArr={newsArr} />
            <Rightbar createNews={createNews} newsArr={newsArr} setKindOfNews={setKindOfNews} />
        </>
    );
};

export default Home;