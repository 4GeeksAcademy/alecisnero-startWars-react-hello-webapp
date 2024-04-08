import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'

export const DetailsCardPeople = () => {
    const { store, actions } = useContext(Context)


    return (!store.spinner) ? (

        <div className='text-white'>
            <div className='d-flex'>
                <div >
                    <img className='rounded' src={`https://starwars-visualguide.com/assets/img/characters/${store.listDetailsPeople.uid}.jpg`} alt={`imagen_${store.listDetailsPeople.properties.name}`} />
                </div>
                <div>
                    <h1>
                        {store.listDetailsPeople.properties.name}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde, nemo dicta blanditiis illo vitae veritatis expedita laudantium voluptates reiciendis tempore molestiae ratione repudiandae cum explicabo aperiam voluptate vel accusantium.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <h5>Name</h5>
                </div>
                <div className='col-2'>
                    <h5>birth Year</h5>
                </div>
                <div className='col-2'>
                    <h5>Gender</h5>
                </div>
                <div className='col-2'>
                    <h5>Height</h5>
                </div>
                <div className='col-2'>
                    <h5>Skin Color</h5>
                </div>
                <div className='col-2'>
                    <h5>Eye Color</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.properties.name}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.properties.birth_year}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.properties.gender}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.properties.height}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.properties.skin_color}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.properties.eye_color}</p>
                </div>
            </div>
        </div>
    ) : (
        <div className='text-center'>
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>

            </div>
            <p className='text-warning'>Cargando, por favor espere...</p>
        </div>
    )
}