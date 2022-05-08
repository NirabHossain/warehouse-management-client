import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBike from '../../hooks/useBike';
// import Bike from '../Home/Place/Bike';
// import Bikes from '../../Bikes/Bikes';

const BikesCheckout = () => {
    
    const { bikeId } = useParams();
    const [bike, setBike] = useBike(bikeId);

    const handleDelivered = (bike) => {
        bike.quantity = bike.quantity - 1;
        setBike(bike);
        const url = `http://localhost:5000/bikes/${bikeId}`;
        fetch(url, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(bike)
        }).then(res => res.json()).then(inf => console.log(inf))

    }
    const {name, price, description, image, supplierName, quantity } = bike;
    return (
        <div>
            <div className='text-center mb-5 pb-5'>
                <div className='bike'>
                    <img src={image} alt="" className='pb-3 w-50' />
                    <h2>{name}</h2>

                    <h5>Estimated cost: <strong>{price} BDT</strong></h5>
                    <p className='text-secondary'>Manufacturer: {supplierName}</p>
                    <p className='w-50 mx-auto'><small>{description}</small></p>

                    <button className='btn btn-secondary px-5' onClick={() => handleDelivered(bike)}>Deliver this Bike</button>
                </div>

            </div>
        </div>
    );
};

export default BikesCheckout;

