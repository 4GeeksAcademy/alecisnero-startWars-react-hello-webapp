
import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../store/appContext'
import CardPeople from '../component/CardPeople.jsx'

export const Home = () => {
    const { store, actions } = useContext(Context)

    
    return(
        <div className='container'>
           <CardPeople />
        </div>
    )
}

