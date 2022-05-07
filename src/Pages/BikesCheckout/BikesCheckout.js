import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Bike from '../Home/Place/Bike';
// import Bikes from '../../Bikes/Bikes';

const BikesCheckout = () => {
    const [bike, setBike] = useState({});
    const { bikeId } = useParams();

    console.log(bikeId);

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${bikeId}`)
            .then(res => res.json())
            .then(data => setBike(data));
    }, [bikeId])

    const { name, price, description, image, supplierName, quantity } = bike;


    return (
        <div>
            <div className='text-center mb-5 pb-5'>
                <div className='bike'>
                    <img src={image} alt="" className='pb-3 w-50' />
                    <h2>{name}</h2>

                    <h5>Estimated cost: <strong>{price} BDT</strong></h5>
                    <h5>Available Quantity: <strong>{quantity} </strong></h5>

                    <p className='text-secondary'>Manufacturer: {supplierName}</p>
                    <p className='w-50 mx-auto'><small>{description}</small></p>
                </div>

            </div>
            {/* <Bike
                key={bike._id}
                service={bike}
            >
            </Bike> */}
        </div>
    );
};

export default BikesCheckout;