import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" src='amazon carousel.png' alt="" />

            <div className="home__row">
                <Product title='Combi GA110 Black/Gold' price={117.99} image="watch.jpg" rating ={5}/>
                <Product title='PS5 Controller' price={29.99} image="controller.jpg" rating ={4}/>
            </div>

            <div className="home__row">
            <Product title="Nike Air Force 1 '07 LV8" price={116.59} image="nike.jpg" rating ={4}/>
            <Product title='87-key Mechanical Keyboard' price={99.99} image="kb.jpg" rating ={3}/>
            <Product title='Logitech G402 Hyperion Fury' price={20.99} image="mouse.jpg" rating ={5}/>

 
            </div>

            <div className="home__row">
            <Product title='Samsung 49" LED-LCD Curved Ultrawide Monitor, Black' price={979.99} image="tv.jpg" rating ={5}/>
            </div>
        </div>
    </div>
  )
}

export default Home;