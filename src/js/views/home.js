
import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../store/appContext'
import CardPeople from '../component/CardPeople.jsx'
import CardPlanets from '../component/CardPlanets.jsx'

export const Home = () => {
    const { store, actions } = useContext(Context)

    
    return(
        <div className='container'>
           <CardPeople />
           <CardPlanets />
        </div>
    )
}

