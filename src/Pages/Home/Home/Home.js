import React from 'react';
// import Banner from '../Banner/Banner';
import Vehicles from '../Vehicles/Vehicles';
import Bikes from '../Bikes/Bikes';
import ShareHolder from '../ShareHolder/ShareHolder';
import Manufacturer from '../Manufacturer/Manufacturer';

const Home = () => {
    return (
        <div className='mb-5 pb-5'>
            {/* <Banner></Banner> */}
            <Bikes></Bikes>
            <ShareHolder/>
            <Manufacturer/>
            <Vehicles></Vehicles>
        </div>
    );
};
// 
export default Home;