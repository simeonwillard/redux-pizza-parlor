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

    const trackOrder = () => {

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
                        <td>Order Status</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((customer) =>
                        <tr key={customer.id}>
                            <td>{customer.customer_name}</td>
                            <td>{customer.time}</td>
                            <td>{customer.type}</td>
                            <td>${customer.total}</td>
                            <td><a href='https://melmagazine.com/wp-content/uploads/2019/05/3.png'>Tracker</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Admin