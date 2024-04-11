import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Favorites from './Favorites.jsx'
import logo from '../../img/startWars.png'
import { DiVim } from "react-icons/di";

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  return (
   <div className="navbar mb-3 row navbarEdit">
       
      <span className="col-1 ">
          {/*RESERVADO*/}
      </span>
      <div className="col-8 d-flex justify-content-center pe-5 ">
        <Link to="/">
          <img
            src={logo}
            style={{ height: "130px" }}
          />
        </Link>
      </div>

       {/*Favorites*/}
       <div className="col-1 d-flex justify-content-end me-5">
        <div className=" dropdown">
              <button
                type="button"
                className="btnFav dropdown-toggle"
                data-bs-toggle="dropdown text-center"
                aria-expanded="false"
          
              >
                Favorites <span className={`badge text-bg-${store.favorite.length == 0 ? 'secondary' : 'danger'}`}>{store.favorite.length}</span>
              </button>

              <Favorites />
          </div>
       

      </div>
      <div className="row mt-3 ms-1 me-1 rounded-pill text-warning text-center"
          style={{ backgroundColor: 'rgb(25, 25, 25, 0.8)' }}>
          <div className="col-2 ">
              Character
          </div>
          <div className="col-2 ">
              Films
          </div>
          <div className="col-2 ">
              Planets
          </div>
          <div className="col-2 ">
              Species
          </div>
          <div className="col-2 ">
              StarShips
          </div>
          <div className="col-2 ">
              Vehicles
          </div>
         
        
      </div>
    
   </div>
  );
};
