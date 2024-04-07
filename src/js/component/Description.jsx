import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const Description = ({ name }) => {
    const { store, actions } = useContext(Context)


    return (store.spinner2) ? (
        <div>
            {store.listAnyThings.map((ele, idx) =>
                (name === ele.name) ? (
                    <div key={idx}>
                        <p>Gender: {ele.gender}</p>
                        <p>Hair Color: {ele.hair_color}</p>
                        <p>Eye-Color: {ele.eye_color}</p>
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

export default Description