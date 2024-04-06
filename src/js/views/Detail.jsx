import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'
import { DetailsCardPeople } from '../component/DetailsCardPeople.jsx'

export const Detail = () => {

    const { store, actions } = useContext(Context)

    return(
        <div className='text-white'>
            <h1>ESTOY EN EL DETAILS DE CADA PERSONAJE</h1>
            <DetailsCardPeople />
        </div>
    )
}