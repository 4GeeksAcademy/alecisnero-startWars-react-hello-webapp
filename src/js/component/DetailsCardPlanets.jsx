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
                    <h1 className='text-warning'>
                        {store.listDetailsPlanets.properties.name}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde, nemo dicta blanditiis illo vitae veritatis expedita laudantium voluptates reiciendis tempore molestiae ratione repudiandae cum explicabo aperiam voluptate vel accusantium.
                    </p>
                </div>
            </div>
            <div className='row mt-3 text-center text-warning'>
                <div className='col-2 border-end border-warning'>
                    <h5>Name</h5>
                </div>
                <div className='col-2 border-end border-warning'>
                    <h5>birth Year</h5>
                </div>
                <div className='col-2 border-end border-warning'>
                    <h5>Gender</h5>
                </div>
                <div className='col-2 border-end border-warning'>
                    <h5>Height</h5>
                </div>
                <div className='col-2 border-end border-warning'>
                    <h5>Skin Color</h5>
                </div>
                <div className='col-2'>
                    <h5>Eye Color</h5>
                </div>
            </div>
            <div className='row text-center'>
                <div className='col-2 border-end border-warning'>
                    <p>{store.listDetailsPlanets.properties.name}</p>
                </div>
                <div className='col-2 border-end border-warning'>
                    <p>{store.listDetailsPlanets.properties.birth_year}</p>
                </div>
                <div className='col-2 border-end border-warning'>
                    <p>{store.listDetailsPlanets.properties.gender}</p>
                </div>
                <div className='col-2 border-end border-warning'>
                    <p>{store.listDetailsPlanets.properties.height}</p>
                </div>
                <div className='col-2 border-end border-warning'>
                    <p>{store.listDetailsPlanets.properties.skin_color}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPlanets.properties.eye_color}</p>
                </div>
            </div>
        </div>
    ) : (
        <div className='text-center mt-5 mb-5'>
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>

            </div>
            <p className='text-warning'>Cargando, Planets...</p>
        </div>
    )
}