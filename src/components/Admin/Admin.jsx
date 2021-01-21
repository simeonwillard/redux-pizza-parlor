import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';

function Admin() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchOrders();
    }, [])

    const fetchOrders = () => {
        axios.get('/api/order')
        .then((response) => {
            setOrders(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Prime Pizza Orders</h1>
            <br/>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Time Order Placed</td>
                        <td>Type</td>
                        <td>Cost</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((customer) =>
                        <tr key={customer.id}>
                            <td>{customer.customer_name}</td>
                            <td>{customer.time}</td>
                            <td>{customer.type}</td>
                            <td>${customer.total}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Admin