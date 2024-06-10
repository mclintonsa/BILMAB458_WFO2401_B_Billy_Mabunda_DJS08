import React from "react"
import { Link } from "react-router-dom"
import capitalizeFirstLetter from "../utils"



export default function Vans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(function() {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => {
        return (
            <div key={van.id} className="van-tile">
                <Link 
                    to={`/vans/${van.id}`}
                    aria-label={`View details for ${van.name}, 
                    priced at $${van.price} per day`}>
                        <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                        <div className="van-info">
                            <h2>{van.name}</h2>
                            <p>${van.price}<span>/day</span></p>
                        </div>
                        <i className={`van-type ${van.type} selected`}>{capitalizeFirstLetter(van.type)}</i>
                </Link> 
            </div>
          
        )
    })
    

    return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
            {vanElements}
        </div>
    </div>
    )
  }