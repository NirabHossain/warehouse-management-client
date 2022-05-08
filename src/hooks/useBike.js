import { useEffect, useState } from "react";

const useBike = bikeId => {
    const [bike, setBike] = useState({});

    useEffect(() => {
        fetch(`https://young-stream-48716.herokuapp.com/bikes/${bikeId}`)
            .then(res => res.json())
            .then(data => setBike(data));
    }, [bikeId])
    return [bike, setBike];
}
export default useBike;

