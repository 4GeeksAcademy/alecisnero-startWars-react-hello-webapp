import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext.js'
import { DetailsCardPlanets } from '../component/DetailsCardPlanets.jsx'

export const DetailPlanets = () => {

    const { store, actions } = useContext(Context)

    return(
        <div className='text-white'>
            <h1>ESTOY EN EL DETAILS DE CADA PERSONAJE</h1>
            <DetailsCardPlanets />
        </div>
    )
}