import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'

export const DetailsCardPlanets = () => {
    const { store, actions } = useContext(Context)

    console.log(store.listDetailsPlanets)
    
    return (!store.spinner) ? (

        <div className='text-white m-5 p-3 rounded-2'
        style={{ backgroundColor: 'rgb(25, 25, 25, 0.9)' }}>
            <div className='d-flex row mb-3 pb-3 border-bottom border-warning'>
                <div className='col-4'>
                    <img className='rounded' src={`https://starwars-visualguide.com/assets/img/planets/${store.listDetailsPlanets.uid}.jpg`} alt={`imagen_${store.listDetailsPlanets.properties.name}`} />
                </div>
                <div className='col-8'>
                    <div>
                        <p className='text-center'>{store.listDetailsPlanets.uid}</p>
                    </div>
                    <h1 className='text-warning'>
                        <p className='text-center'>{store.listDetailsPlanets.properties.name}</p>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde, nemo dicta blanditiis illo vitae veritatis expedita laudantium voluptates reiciendis tempore molestiae ratione repudiandae cum explicabo aperiam voluptate vel accusantium.
                    </p>
                </div>
            </div>
            <div className='row mt-3 text-center text-warning'>
                <div className='col-2 border-end border-warning'>
                    <h5>Climate</h5>
                </div>
                <div className='col-2 border-end border-warning'>
                    <h5>Diameter</h5>
                </div>
                <div className='col-2 border-end border-warning'>
                    <h5>Gravity</h5>
                </div>
                <div className='col-2 border-end border-warning'>
                    <h5>Orbital</h5>
                </div>
                <div className='col-2 border-end border-warning'>
                    <h5>Rotation</h5>
                </div>
                <div className='col-2'>
                    <h5>Population</h5>
                </div>
            </div>
            <div className='row'>
            <div className='col-2 border-end border-warning'>
                    <p>{store.listDetailsPlanets.properties.climate}</p>
                </div>
                <div className='col-2 border-end border-warning'>
                    <p>{store.listDetailsPlanets.properties.diameter}</p>
                </div>
                <div className='col-2 border-end border-warning'>
                    <p>{store.listDetailsPlanets.properties.gravity}</p>
                </div>
                <div className='col-2 border-end border-warning'>
                    <p>{store.listDetailsPlanets.properties.orbital_period}</p>
                </div>
                <div className='col-2 border-end border-warning'>
                    <p>{store.listDetailsPlanets.properties.rotation_period}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPlanets.properties.population}</p>
                </div>
            </div>
        </div>
    ) : (
        <div className='text-center mt-5 mb-5 bg-dark rounded-2 p-5 mx-5'>
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>

            </div>
            <p className='text-warning'>Cargando, Planets...</p>
        </div>
    )
}