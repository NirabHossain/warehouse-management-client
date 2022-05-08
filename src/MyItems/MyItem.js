import { async } from '@firebase/util';
import React, { useState, useEffect } from 'react';

const MyItems = () => {
    const [myItem, setMyItem] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/bikes";
        fetch(url).then(res => res.json()).then(data =>setMyItem(data))
    }, [])

return (
    <div>
        Total bikes: {myItem.length}
    </div>
);
};

export default MyItems;