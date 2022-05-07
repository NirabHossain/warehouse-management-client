import React from 'react';
import useBikes from '../../hooks/useBikes';
import Table, { Styles } from '../../Table/Table';
import './ManageBikes.css';

const ManageBikes = () => {
    const [bikes, setBikes] = useBikes();
    const handleDelete = id => {
        // const proceed = window.confirm('Are you sure?');
        // if(proceed){}

        fetch(`http://localhost:5000/bikes/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            const remaining = bikes.filter(bike => bike._id !== id);
            setBikes(remaining);
        })

    }
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            // {
            //     Header: 'Manufacturer',
            //     accessor: 'supplierName',
            // },
            {
                Header: 'Price',
                accessor: 'price',
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
            },
        ],
        []
    )


    return (
        <div className='mb-5 pb-5'>
            <h2>Manage your favorite Bikes</h2>
            <div className='d-flex'>
                <Styles>
                    <Table columns={columns} data={bikes} />
                </Styles>
                <div className=' mt-5'>
                    {
                        bikes.map(bike => <div key={bike._id}>
                            <h5 className='margin-handle d-flex align-items-center justify-content-between'><button onClick={() => handleDelete(bike._id)}>Delete</button></h5>
                        </div>)
                    }
                </div>


            </div>
        </div>
    );
};

export default ManageBikes;