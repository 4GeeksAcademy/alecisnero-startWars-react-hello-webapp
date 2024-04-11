
import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../store/appContext'

import Carousel from '../component/Carousel.jsx'
import CardPeople from '../component/CardPeople.jsx'
import CardPlanets from '../component/CardPlanets.jsx'
import Footer from '../component/footer.js'
export const Home = () => {
    const { store, actions } = useContext(Context)

    
    return(
        <div>
            <div className='container-fluid'>
                <Carousel />
                <CardPeople />
                <CardPlanets />
            </div>
           
           <Footer />
        </div>
    )
}

