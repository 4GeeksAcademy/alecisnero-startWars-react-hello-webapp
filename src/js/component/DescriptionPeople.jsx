import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const DescriptionPeople = ({ name }) => {
    const { store, actions } = useContext(Context)


    return (store.spinner2) ? (
        <div>
            {store.listAnyThingsPeople.map((ele, idx) =>
                (name === ele.name) ? (
                    <div key={idx} className='mt-3'>
                        <p><strong>Gender:</strong> {ele.gender}</p>
                        <p><strong>Hair Color:</strong> {ele.hair_color}</p>
                        <p><strong>Eye-Color:</strong> {ele.eye_color}</p>
                    </div>
                ) : null
            )}
        </div>
    ) : (

        <div className='text-center mt-5 mb-5'>
            <div className="spinner-border text-white" role="status">
                <span className="visually-hidden">Loading...</span>

            </div>
            <p className='text-white'>Cargando...</p>
        </div>

    )

}

export default DescriptionPeople