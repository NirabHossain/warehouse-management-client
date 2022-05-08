import React from 'react';

const Vehicle = ({ vehicle }) => {
    const { name, image} = vehicle;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} height={250} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <a href="#Bikes" className="btn btn-primary">Confirm Supplying {name}</a>
                </div>
            </div>
        </div>

    );
};

export default Vehicle;