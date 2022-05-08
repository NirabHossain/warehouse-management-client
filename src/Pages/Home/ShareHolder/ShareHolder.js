import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ShareHolder = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data.name);
        const msg = `Thank you, ${data.name}!! We will contact you soon`
        toast(msg)
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Become A Share Holder</h2>
            <div className="text-secondary mx-auto w-50  my-2">If you want to buy a share, please fill this form out. We will contact with you and invite you to our company</div>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Company Name' {...register("companyName", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Why do you want a partnership?' {...register("description")} />
                <input className='mb-2' placeholder='How much portion you want to buy' type="number" {...register("percentage")} />
                <input className='mb-2' placeholder='Trade License Number' type="number" {...register("trade")} />
                <input className='mb-2' placeholder='Address' type="text" {...register("address")} />
                <input className='mb-2' placeholder='Passport size Photo' type="text" {...register("image")} />
                <input type="submit" value="Submit Profile" />
            </form>
        </div>
    );
};
export default ShareHolder;