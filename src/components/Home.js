import React from "react";
import HomeTop from "./HomeTop";
import HomeSecond from './HomeSecond'
import HomeThird from "./HomeThird";
import Footer from "./Footer";
import HomeFourth from "./HomeFourth";

function Home() {
    return (
        <>
        <main>

                <HomeTop/>
                <HomeSecond/>
                <HomeThird/>
                <HomeFourth/>
                <Footer/>
                
        </main>
        </>
    )
}

export default Home