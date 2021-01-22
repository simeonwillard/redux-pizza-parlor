import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert';

function Checkout() {

    const dispatch = useDispatch();
    const history = useHistory();

    const cart = useSelector(state => state.pizzaCart);
    const customer = useSelector(state => state.customerReducer);
    const total = useSelector(state => state.priceTotalReducer);

    console.log('the cart is', cart);
    console.log('the customer is', customer);
    console.log('the total is', total);

    const handleClickCheckout = () => {
        console.log('clicked checkout');
        swal({
            title: "Checkout",
            text: "Make sure your order is perfect before submitting!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Order submitted. Yum!", {
                        icon: "success",
                    });
                    const order = {
                        customer_name: customer.customer_name,
                        street_address: customer.street_address,
                        city: customer.city,
                        zip: customer.zip,
                        total: total,
                        type: customer.type,
                        pizzas: [{
                            id: cart.id,
                            quantity: 1
                        }]
                    }
                    console.log(order);
                    axios.post('/api/order', order)
                        .then((response) => {
                            // post to db
                            // route back to pizza page (step 1)
                            history.push('/')
                            // clear dispatches
                        }).catch((error) => {
                            console.error(error);
                        });
                } else {
                    swal("See ya soon!");
                }
            });
    }

    return (
        <div>
            <h3>Step 3: Checkout</h3>
            <p>Name: {customer.customer_name}</p>
            <p>Address: {customer.street_address}</p>
            <p>Pickup Type: {customer.type}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map over TRs */}
                    {cart.map((pizza) => {
                        return <tr key={pizza.id}><td>{pizza.name}</td><td>{pizza.price}</td></tr>
                    })}
                    <tr>
                        <td>{cart.name}</td>
                        <td>{cart.price}</td>
                    </tr>
                </tbody>
            </table>
            <h3>Total: {total}</h3>
            <button onClick={handleClickCheckout}>Checkout</button>
        </div>
    )
}

export default Checkout;