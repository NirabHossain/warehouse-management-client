import { useEffect, useState } from "react";

const useBike = bikeId => {
    const [bike, setBike] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${bikeId}`)
            .then(res => res.json())
            .then(data => setBike(data));
    }, [bikeId])
    return [bike, setBike];
}
export default useBike;

