import React, { useEffect, useState } from 'react';
import Vehicle from '../Vehicle/Vehicle';


const Vehicles = () => {
    const [vehicles, setVehicles]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/vehicles').then(res=>res.json()).then(data=>setVehicles(data));
    })
    return (
        <div id="vehicles" className='container mb-5 pb-5 experts'>
            <h2 className='text-primary text-center mt-5'>Offered Buying Vehicle Types</h2>
            <div className="row">
                {vehicles.map(vehicle => <Vehicle key={vehicle.id} vehicle= {vehicle}></Vehicle>)}
            </div>
        </div>
    );
};

export default Vehicles;