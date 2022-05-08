import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bike.css';

const Bike = ({ service }) => {
    // const {_id, name, picture, about, cost, address, isAvailable} = service;
    const { _id, name, image, description, price, quantity, supplierName } = service;
    const navigate = useNavigate();
    

    const navigateToServiceDetail = id => {
        navigate(`/bikes/${id}`);
    }
    return (
            <div className="card">
                <img width="100%" src={image} alt="" className='pb-3' />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className='text-secondary'>Manufacturer: {supplierName}</p>

                    <small className="card-text"><small>{description}</small></small>
                    <h6>Price: <strong>{price} tk</strong></h6>
                    <small>Quantity available: {quantity}</small>

                </div>
                <button className="card-footer text-center update-button border border-0 border-top" onClick={() => navigateToServiceDetail(_id)} >Stock Update
                </button>
            </div>
    );
};

export default Bike;