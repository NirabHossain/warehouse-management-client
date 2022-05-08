import { useEffect, useState } from "react";

const useBikes = () =>{
    const [Bikes, setBikes] = useState([]);

    useEffect( ()=>{
        // fetch('https://afternoon-brushlands-48447.herokuapp.com/Bikes')
        // fetch('tour-Bikes.json')
        fetch('https://young-stream-48716.herokuapp.com/bikes/')
        .then(res => res.json())
        .then(data => setBikes(data));
    }, [])
    return [Bikes, setBikes];
}
export default useBikes;