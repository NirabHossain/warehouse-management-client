import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Manufacturer = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data.name);
        const msg = `It's a pleasure to have you as a part of our business ${data.name}. We hope to work together in near future`
        toast(msg)
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Become A Manufacturer</h2>

            <div className="text-secondary w-50 mx-auto my-2">We allow not only bikes but also various types of vehicles and parts as per the public demand. So if you are a company supplying to our famous warehouse, please let us know. It will be easy to connect with you if you just let us know by filling this form up</div>

            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Company Name' {...register("companyName", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Supplied Product details' {...register("description")} />
                <input className='mb-2' placeholder='Trade License Number' type="number" {...register("trade")} />
                <input className='mb-2' placeholder='Address' type="text" {...register("address")} />
                <input type="submit" value="Submit Profile" />
            </form>
        </div>
    );
};
export default Manufacturer;