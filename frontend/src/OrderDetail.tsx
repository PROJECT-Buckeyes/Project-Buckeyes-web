import data from './data';
import { userParams } from 'react-router-dom';

function OrderDetail() {
    const { id } = userParams();
    const order = data.orders.find((o) => o._id === parseInt(id as string));

    return (
        <div>
            <h3>order name: {order?.user.name}</h3>
        </div>
    );


    }