import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../store/appContext'
import { FaRegHeart } from "react-icons/fa6";

const CardPeople = () => {
    const { store, actions } = useContext(Context)


    return (
        <div className='text-center'>

            <div>
                {store.spinner && <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
            </div>

            <div className='d-flex' style={{ overflow: "auto" }}>
                {store.listPeople.map((element, index) => {
                    return (
                        <div key={index} className='card col-3 me-3'>
                            <div >
                                <img src='https://t3.ftcdn.net/jpg/02/98/94/38/360_F_298943877_A4W7tVyZPCu6gNGuGXJUerZbXsWmblLb.jpg'
                                    className='card-img-top'
                                />
                            </div>
                            <div className='card-body'>
                                <h5>{element.name}</h5>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn btn-outline-primary'>Learn more...</button>
                                    <button 
                                    className='btn btn-warning'
                                    onClick={ ()=>{actions.addFavorite( element.name)} }><FaRegHeart /></button>
                                </div>
                            </div>

                        </div>

                    )
                })}
            </div>




            <button className='btn btn-outline-light mt-5 me-3' onClick={() => { actions.getPreviousPeople() }}>Previous</button>

            <button className='btn btn-light mt-5 me-3' 
            onClick={() => { actions.getListPeople()} }>Get Data</button>

            <button className='btn btn-outline-light mt-5' onClick={() => { actions.getNextPeople() }}>Next</button>
        </div>
    )
}

export default CardPeople