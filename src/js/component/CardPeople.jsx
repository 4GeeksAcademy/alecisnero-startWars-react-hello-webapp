import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'
import { FaRegHeart } from "react-icons/fa6";

const CardPeople = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        actions.getListPeople()
    }, [])

    //FUNCION HANDLER PARA GUARDAR LA URL
    async function handlerGetUrlUnic(url, index) {

        navigate(`/detail/${index}`)
        try {
            await actions.getDetail(url)
        } catch (err) {
            alert('Ha ocurrido un Error: ', err)
        }
    }

    console.log(store.listPeople)

    return (
        <div className='text-center'>

            <div>
                {store.spinner && <div>
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>

                    </div>
                    <p className='text-warning'>Cargando, por favor espere...</p>
                </div>}
            </div>

            <div className='d-flex' style={{ overflow: "auto" }}>
              
                {store.listPeople.map((element, index) => {
                    return (
                        <div key={index} className='card col-6 me-3'>
                            <div >
                                <img src='https://t3.ftcdn.net/jpg/02/98/94/38/360_F_298943877_A4W7tVyZPCu6gNGuGXJUerZbXsWmblLb.jpg'
                                    className='card-img-top'
                                />
                            </div>
                            <div className='card-body'>
                                <h5>{element.name}</h5>
                                {/* <p>Gender: {element.result.properties.gender}</p>
                                <p>Hair Color: {element.result.properties.hair_color}</p>
                                <p>Eye-Color: {element.result.properties.eye_color}</p> */}
                                <div className='d-flex justify-content-between'>

                                    <button className='btn btn-outline-primary'
                                        onClick={() => { handlerGetUrlUnic(element.url, element.uid) }}>Learn more...</button>

                                    <button
                                        className='btn btn-warning'
                                        onClick={() => { actions.addFavorite(element.name) }}><FaRegHeart /></button>
                                </div>
                            </div>

                        </div>

                    )
                })}
            </div>




            <button className='btn btn-outline-light mt-5 me-3' onClick={() => { actions.getPreviousPeople() }}>Previous</button>

            {/*  <button className='btn btn-light mt-5 me-3'
                onClick={() => {  }}>Get Data</button> */}

            <button className='btn btn-outline-light mt-5' onClick={() => { actions.getNextPeople() }}>Next</button>
        </div>
    )
}

export default CardPeople