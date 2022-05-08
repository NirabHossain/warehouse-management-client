import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useBike from '../../hooks/useBike';
const BikesCheckout = () => {
    const { register, handleSubmit } = useForm();
    const { bikeId } = useParams();
    const [bike, setBike] = useBike(bikeId);
    // Updating to server
    const updateToServer =(bike)=>{
        const url = `http://localhost:5000/bikes/${bikeId}`;
        fetch(url, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(bike)
        }).then(res => res.json()).then(inf => console.log(inf))
    }

    const handleDelivered = (bike) => {
        const quantity = bike.quantity - 1;
        const newBike = {name, price, description, image, supplierName, quantity};
        setBike(newBike);
        updateToServer(newBike);
    }
    const onSubmit = data => {
        const quantity = bike.quantity+(+data.quantity);
        const newBike = {name, price, description, image, supplierName, quantity};
        setBike(newBike);
        updateToServer(newBike);
    }


    const {name, price, description, image, supplierName} = bike;
    return (
        <div className=' mb-5 pb-5'>
            <div className='text-center'>
                <div className='bike'>
                    <img src={image} alt="" className='pb-3 w-50' />
                    <h2>{name}</h2>

                    <h5>Estimated cost: <strong>{price} BDT</strong></h5>
                    <h5>Estimated cost: <strong>{bike?.quantity}</strong></h5>
                    <p className='text-secondary'>Manufacturer: {supplierName}</p>
                    <p className='w-50 mx-auto'><small>{description}</small></p>

                    <button className='btn btn-secondary px-5' onClick={() => handleDelivered(bike)}>Deliver this Bike</button>
                </div>

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex mt-3 align-items-baseline justify-content-center">
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input type="submit" value="Add quantity" />
            </form>

            <Link to="/manage"><button className='w-25 d-block mx-auto py-3 my-2 btn btn-primary'>Manage Bikes</button></Link>
            
        </div>
    );
};

export default BikesCheckout;

