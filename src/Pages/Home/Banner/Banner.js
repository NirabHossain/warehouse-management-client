import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import useBikes from '../../../hooks/useBikes';

const Banner = () => {
    const [bikes] = useBikes();
    const banners = bikes.slice(0, 8);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                banners.map(banner =>
                    <Carousel.Item key={banner._id}>
                        <img className="d-block w-100 mx-auto" src={banner.image} alt="First slide" height={650} />
                        <Carousel.Caption>
                            <h3>{banner.name}</h3>
                            <p>{banner.supplierName}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    );
};
//
export default Banner;