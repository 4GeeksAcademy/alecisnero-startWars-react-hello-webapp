import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'
import { FaRegHeart } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import DescriptionPeople from './DescriptionPeople.jsx';

const CardPeople = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        actions.getListPeople()
    }, [])

    //FUNCION HANDLER PARA GUARDAR LA URL
    async function handlerGetUrlUnicPeople(url, index) {

        navigate(`/detailPeople/${index}`)
        try {
            await actions.getDetailPeople(url)
        } catch (err) {
            alert('Ha ocurrido un Error: ', err)
        }
    }



    return (
        <div
            className='p-3 rounded m-5'
            style={{ backgroundColor: 'rgb(25, 25, 25, 0.8)' }}>
            <div className='d-flex rounded-pill mb-5 p-1 mt-5 bg-dark'>
                <div className='col-3 d-flex align-items-center'>
                    <span className='bg-warning rounded-pill text-dark border-0 ps-3 pe-3'>
                        <p className='fs-4 d-inline-flex mt-2 mb-2 ms-5 me-5' id='people'>Home</p>
                    </span>
                </div>
                <div className='col text-end me-5'>
                    <h1 className='text-warning titlePeople'>Character</h1>
                </div>
            </div>

            {/*    CARGA DE PEOPLE    */}
            { 
                (!store.spinnerPeople) ?  <div className='d-flex' style={{ overflow: "auto" }}>

                {store.listPeople.map((element, index) => {
                    return (
                        <div key={index} className='card border-0 rounded-5 text-white bg-dark col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-12 me-3'
                        style={{width: '14rem'}}>
                            <div >
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`}
                                    className='card-img-top rounded-5 border border-white' 
                                    
                                />
                            </div>
                            <div className='card-body'>
                                <div className='d-flex cajaIcon rounded-pill d-flex justify-content-center align-items-center'>
                                    
                                    <div className='col-1 iconId d-flex justify-content-center align-items-center'
                                        style={{backgroundColor: '#FFC107'}}>
                                        <span >{element.uid}</span>
                                    </div> 
                                    <div className='col d-flex justify-content-center align-items-end'>
                                        <h5 className='iconName my-auto mx-auto'>{element.name}</h5>
                                    </div>
                                    
                                </div>

                                <div className='my-1 mb-5'>
                                   <DescriptionPeople name={element.name} /> 
                                </div>
                                

                                <div className='d-flex justify-content-between'>

                                    <button className='btnLearnMore'
                                        onClick={() => { handlerGetUrlUnicPeople(element.url, element.uid) }}>Learn more...</button>

                                    <button
                                        className='btnIconHearth'
                                        onClick={() => { actions.addFavorite(element.name) }}><FaRegHeart /></button>
                                </div>
                            </div>

                        </div>

                    )
                })}
            </div> 
            
            : <div className='text-center mt-5 mb-5 bg-dark rounded-2 p-5'>
                <div className='p-5'>
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>

                    </div>
                    <p className='text-warning'>Cargando, People...</p>
                </div>
            </div>
            }
           

            <div className='row rounded-pill mt-5 mb-5 bg-dark cajaBtn'>
                <div className='col-4 text-start'>
                    <button className='bg-warning rounded-pill ms-5 me-5 mt-2 ps-5 pe-5 pt-1 pb-1 border-0' onClick={() => { actions.getPreviousPeople() }}>
                        <p className='fs-3 d-inline-flex mt-0 mb-0'>Previous</p>
                    </button>
                </div>

                <div className='col-4  text-center'>
                    <button className='bg-warning iconHome'>
                        <p className='d-inline-flex fs-2 ps-3 pe-3 pt-3'><GoHomeFill /></p>
                    </button>
                </div>

                <div className='col-4  text-end'>
                    <button className='bg-warning rounded-pill ms-5 me-5 mt-2 ps-5 pe-5 pt-1 pb-1 border-0' onClick={() => { actions.getNextPeople() }}>
                        <p className='fs-3 d-inline-flex mt-0 mb-0'>Next</p>
                    </button>
                </div>
            </div>
        </div>
    )  
       
    
}

export default CardPeople