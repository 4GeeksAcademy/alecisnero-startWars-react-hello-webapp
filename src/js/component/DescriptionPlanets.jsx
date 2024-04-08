import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const DescriptionPlanets = ({ name }) => {
    const { store, actions } = useContext(Context)


    return (store.spinner2) ? (
        <div>
            {store.listAnyThingsPlanets.map((ele, idx) =>
                (name === ele.name) ? (
                    <div key={idx}>
                        <p>Diameter: {ele.diameter}</p>
                        <p>Population: {ele.population}</p>
                        <p>Terrain: {ele.terrain}</p>
                    </div>
                ) : null
            )}
        </div>
    ) : (

        <div className='text-center'>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>

            </div>
            <p className='text-danger'>Cargando...</p>
        </div>

    )

}

export default DescriptionPlanets