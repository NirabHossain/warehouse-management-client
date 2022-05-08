import React from 'react';
import { useForm } from "react-hook-form";


const AddBikes = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const url = `http://localhost:5000/bikes`;
        fetch(url,{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(inf=>console.log(inf))
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>This is the place to add</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplierName")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
                <input type="submit" value="Add the Bike" />
            </form>
        </div>
    );
};
// https://stackoverflow.com/questions/72146404/react-was-conflicted-between-package-json-eslint-config-react-app
// , { min: 18, max: 99 }
// , { pattern: /^[A-Za-z]+$/i }//

export default AddBikes;

