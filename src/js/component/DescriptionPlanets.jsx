import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const DescriptionPlanets = ({ name }) => {
    const { store, actions } = useContext(Context)


    return (store.spinner) ? (
        <div>
            {store.listAnyThingsPlanets.map((ele, idx) =>
                (name === ele.name) ? (
                    <div key={idx} className='mt-3'>
                        <p><strong>Diameter:</strong> {ele.diameter}</p>
                        <p><strong>Population:</strong> {ele.population}</p>
                        <p><strong>Terrain:</strong> {ele.terrain}</p>
                    </div>
                ) : null
            )}
        </div>
    ) : (

        <div className='text-center mt-5'>
            <div className="spinner-border text-white" role="status">
                <span className="visually-hidden">Loading...</span>

            </div>
            <p className='text-white'>Cargando...</p>
        </div>

    )

}

export default DescriptionPlanets