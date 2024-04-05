
import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../store/appContext'
import CardPeople from '../component/CardPeople.jsx'

export const Home = () => {
    const { store, actions } = useContext(Context)

    console.log(store.listPeople)
    return(
        <div>
			<h2 className='text-danger'>Characters</h2>
           <CardPeople />
        </div>
    )
}

