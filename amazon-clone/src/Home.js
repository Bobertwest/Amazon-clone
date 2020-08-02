import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_image" src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt="imagen de fondo"/>

            <div className="home_row">
                <Product 
                    id="12345"
                    title="The first product ever: Changing the way people make thair food"
                    price={11.35}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71GvYC0lbkL._AC_SX522_.jpg"
                
                />

                <Product 
                    id="96874"
                    title="Build any kind of program, videogame or web site, laptop with the power of the future"
                    price={1069.99}
                    rating={5}
                    image="https://static.wixstatic.com/media/2cd43b_6d6ab8a11ef44a039871f224dccc5a00~mv2.png/v1/fill/w_320,h_205,fp_0.50_0.50/2cd43b_6d6ab8a11ef44a039871f224dccc5a00~mv2.png"
                
                />      
            </div>

            <div className="home_row">
                <Product 
                    id="45693"
                    title="Increse your knowlege with books, any kind of it"
                    price={5.95}
                    rating={3}
                    image="https://cdn.pixabay.com/photo/2017/05/24/23/25/book-2341848_960_720.png"
                
                />

                <Product 
                    id="854632"
                    title="Funny dolls for your daughter, complete your collection"
                    price={9.63}
                    rating={4}
                    image="https://pngimg.com/uploads/lol_dolls/lol_dolls_PNG87.png"
                
                />

                <Product 
                    id="89573"
                    title="Do excercise, run with this sport shoes, good for run and for hang out"
                    price={20.51}
                    rating={5}
                    image="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5805.png"
                
                />   
            </div>
            <div className="home_row">
                <Product 
                    id="364894"
                    title="Watch movies, series or connect your computer for a better experience"
                    price={205.62}
                    rating={5}
                    image="https://www.pngkit.com/png/full/240-2400186_plasma-tv-png-svg-freeuse-tv-samsung-led.png"
                
                />
            </div>
            
        </div>
    )
}

export default Home
