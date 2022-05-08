import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const AddBikes = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const displayName = user?.displayName;
    const email = user?.email;

    const onSubmit = data => {
        const url = `"https://young-stream-48716.herokuapp.com/bikes"`;
        console.log(data);
        fetch(url,{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(inf=>{
            if(inf.insertedId)toast("Successfully Added");
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Add your favorite bike</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-2' value={displayName} readOnly {...register("userName", { required: true, maxLength: 20, })} />
                <input className='mb-2' value={email} readOnly {...register("email", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Manufacturer' type="text" {...register("supplierName")} />
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

