import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'

export const DetailsCardPeople = () => {
    const { store, actions } = useContext(Context)


    return (!store.spinner) ? (

        <div className='text-white'>
            <div className='d-flex'>
                <div >
                    <img className='rounded' src="https://t3.ftcdn.net/jpg/02/98/94/38/360_F_298943877_A4W7tVyZPCu6gNGuGXJUerZbXsWmblLb.jpg" alt={`imagen_${store.listDetailsPeople.name}`} />
                </div>
                <div>
                    <h1>
                        {store.listDetailsPeople.name}
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
                    <p>{store.listDetailsPeople.name}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.birth_year}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.gender}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.height}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.skin_color}</p>
                </div>
                <div className='col-2'>
                    <p>{store.listDetailsPeople.eye_color}</p>
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