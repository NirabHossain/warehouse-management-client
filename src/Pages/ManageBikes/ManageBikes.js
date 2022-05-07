import React from 'react';
import useBikes from '../../hooks/useBikes';

const ManageBikes = () => {
    const [Bikes, setBikes] = useBikes();
    const handleDelete = id =>{
        // const proceed = window.confirm('Are you sure?');
        // if(proceed){}
        
        fetch(`https://localhost:5000/bikes/${id}`,{
            method: 'DELETE'
        }).then(res=>res.json()).then(data=>{
            const remaining = Bikes.filter(bike=>bike._id!==id);
            setBikes(remaining);
        })

    }
    return (
        <div className='mb-5 pb-5'>
            <h2>Manage your favorite Bikes</h2>
            {
                Bikes.map(bike=><div key = {bike._id}>
                    <h4>{bike?.name} <button onClick={()=>handleDelete(bike._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageBikes;