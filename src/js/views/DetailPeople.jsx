import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext.js'
import { DetailsCardPeople } from '../component/DetailsCardPeople.jsx'

export const DetailPeople = () => {

    const { store, actions } = useContext(Context)

    return(
        <div className='text-white'>
            <DetailsCardPeople />
        </div>
    )
}