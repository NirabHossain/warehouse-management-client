import React from 'react';
import useBikes from '../../../hooks/useBikes';
import Bike from '../Bike/Bike';
import './Bikes.css';

const Bikes = () => {

    const [bikes] = useBikes();
    const bikes6= bikes.slice(0,6);
    return (
        <div id="bikes" className='container'>
            <h1 className='text-primary text-center mt-5'> Available Bikes</h1>

            <div className="row">
                <div className="bikes-container">
                    {
                        bikes6.map(bike => <Bike
                            key={bike._id}
                            service={bike}
                        >
                        </Bike>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bikes;