import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Favorites from './Favorites.jsx'

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  return (
    <nav
      className="navbar navbar-dark mb-3 ms-3"
      style={{ backgroundColor: "black" }}
    >
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4pe8p0JN2pAJpTdOhX-ono5eBfG4gZ5-vGcWaHMvgg&s"
          style={{ height: "80px" }}
        />
      </Link>
      <div className="me-3">
        
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
			  
            >
              Favorites <span className={`badge text-bg-${store.favorite.length == 0 ? 'secondary' : 'danger'}`}>{store.favorite.length}</span>
            </button>

            <Favorites />
          </div>
        
      </div>
    </nav>
  );
};
