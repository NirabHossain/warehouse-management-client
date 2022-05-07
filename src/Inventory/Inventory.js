import React from 'react';
import useBikes from '../hooks/useBikes';
import Bike from '../Pages/Home/Bike/Bike';

const Inventory = () => {
    const [bikes] = useBikes();
    return (
        <div id="bikes" className='container'>
            <h1 className='text-primary text-center mt-5'> Available Bikes</h1>

            <div className="row">
                <div className="bikes-container">
                    {
                        bikes.map(bike => <Bike
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

export default Inventory;