import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { TiDeleteOutline } from "react-icons/ti";

const Favorites = () => {
    const { store, actions } = useContext(Context)

    
    return (
        <div>
            <ul className="dropdown-menu dropdown-menu-end">

                {store.favorite.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <li >
                                    <a className="dropdown-item" href="#">
                                        <div className='d-flex justify-content-between'>
                                            <div>{item}</div>
                                            <div>
                                                <button onClick={ ()=>{actions.deleteFavorite(index)} } className='btn btn-outline-secondary'>
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