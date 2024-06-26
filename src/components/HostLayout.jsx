import React from "react";
import { Outlet, NavLink } from "react-router-dom";


export default function Layout(){

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div>
            <nav className="host-nav">
                <NavLink 
                to='/host' 
                end
                style={({isActive})=> isActive? activeStyle: null}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                to='/host/income' 
                style={({isActive})=> isActive? activeStyle: null}
                >
                    Income
                </NavLink>
                <NavLink 
                to='/host/reviews' 
                style={({isActive})=> isActive? activeStyle: null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}