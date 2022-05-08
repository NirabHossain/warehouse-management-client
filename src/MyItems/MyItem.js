import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Bike from '../Pages/Home/Bike/Bike';

const MyItems = () => {
    const [myItem, setMyItem] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    useEffect(() => {
        const url = `http://localhost:5000/bikes`;
        fetch(url).then(res => res.json()).then(data =>setMyItem(data))
    }, [email])
    const userItem = myItem.filter(item=>item.email===user.email);
return (
    <div>
        Total bikes: {myItem.length}
        {
            userItem.map(item=><Bike service={item}/>)
        }
    </div>
);
};
// My item

export default MyItems;