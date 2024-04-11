import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { TiDeleteOutline } from "react-icons/ti";

const Favorites = () => {
    const { store, actions } = useContext(Context)

    
    return (
        <div>
            <ul className="dropdown-menu dropdown-menu-end bg-transparent border border-warning rounded-3">

                {store.favorite.map((item, index) => {
                    return (
                        <div key={index} >
                            <div>
                                <li>
                                    <a className="dropdown-item anchor" href="#">
                                        <div className='d-flex justify-content-between align-items-center bg-dark pe-1 ps-1 pt-2 pb-2 rounded-2'>
                                            <div className='me-5 fs-5 text-white'>{item}</div>
                                            <div>
                                                <button onClick={ ()=>{actions.deleteFavorite(index)} } className='btnIcon btn btn-secondary fs-2 d-flex justify-content-between align-items-center'
                                                style={{width: '80%', height: '80%'}}>
                                                    <TiDeleteOutline />
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </div>

                        </div>

                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites