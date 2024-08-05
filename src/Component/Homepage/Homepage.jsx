import React from 'react'
import Introduction from "../Introduction/Introduction.jsx";
import PopularItems from '../HomePopularItems/PopularItems.jsx';
import Menu from '../HomeMenu/Menu';
import ExpertChef from '../HomeExpertChef/ExpertChef.jsx';
import LatestNews from '../HomeLatestNews/LatestNews.jsx';
import Review from '../CustomerReview/Review.jsx';
import HomeBanner from '../HomeBanner/HomeBanner.jsx';

export default function Homepage() {
    return (
        <>

            <HomeBanner/>
            
            <Introduction />
            <PopularItems />
            <Menu />
            <ExpertChef />
            <LatestNews /> 
            <Review />
        </>
    )
}
