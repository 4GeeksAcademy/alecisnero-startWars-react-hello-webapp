import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'
import { FaRegHeart } from "react-icons/fa6";
import DescriptionPeople from './DescriptionPeople.jsx';

const CardPeople = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        actions.getListPeople()
    }, [])

    //FUNCION HANDLER PARA GUARDAR LA URL
    async function handlerGetUrlUnicPeople(url, index) {

        navigate(`/detail/${index}`)
        try {
            await actions.getDetailPeople(url)
        } catch (err) {
            alert('Ha ocurrido un Error: ', err)
        }
    }



    return (!store.spinner) ? (
        <div
            className='p-3 rounded mb-5'
            style={{ backgroundColor: 'rgb(25, 25, 25, 0.8)' }}>
            <h2 className='text-danger text-start mb-3'>Characters</h2>
            <div className='d-flex' style={{ overflow: "auto" }}>

                {store.listPeople.map((element, index) => {
                    return (
                        <div key={index} className='card col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-12 me-3'
                        style={{width: '14rem'}}>
                            <div >
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`}
                                    className='card-img-top'
                                    
                                />
                            </div>
                            <div className='card-body'>
                                <h5>{element.name}</h5>

                                <DescriptionPeople name={element.name} />

                                <div className='d-flex justify-content-between'>

                                    <button className='btn btn-outline-primary'
                                        onClick={() => { handlerGetUrlUnicPeople(element.url, element.uid) }}>Learn more...</button>

                                    <button
                                        className='btn btn-warning'
                                        onClick={() => { actions.addFavorite(element.name) }}><FaRegHeart /></button>
                                </div>
                            </div>

                        </div>

                    )
                })}
            </div>

            <div className='text-center'>
                <button className='btn btn-outline-light mt-3 me-3' onClick={() => { actions.getPreviousPeople() }}>Previous</button>

                <button className='btn btn-outline-light mt-3' onClick={() => { actions.getNextPeople() }}>Next</button>
            </div>
        </div>
    ) : (
        <div className='text-center mt-5 mb-5'>
            {store.spinner && <div>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>

                </div>
                <p className='text-warning'>Cargando, People...</p>
            </div>}
        </div>
    )
}

export default CardPeople