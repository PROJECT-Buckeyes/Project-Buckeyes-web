import { useParams } from 'react-router-dom';
import data from './data.js';

function OrderDetail() {
    const { id } = useParams();
    const order = data.orders.find((o) => o._id === id);

    return (
        <div>
            <h3>order name: {order?.user.name}</h3>
        </div>
    );


    }