import './Checkout.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

function Checkout() {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.pizzaList);
    const customer = useSelector(state => state.customerReducer);
    const total = useSelector(state => state.priceTotalReducer);

    console.log('the cart is', cart);
    console.log('the customer is', customer);
    console.log('the total is', total);

    const handleClickCheckout = () => {
        console.log('clicked checkout');

        // show confirmation dialogue

        const order = {
            customer_name: customer.customer_name,
            street_address: customer.street_address,
            city: customer.city,
            zip: customer.zip,
            total: total,
            type: customer.type,
            pizzas: [{
                id: cart.id,
                quantity: cart.quantity
            }]
            // what here ^^ ?
        }

        axios.post('/api/order', { order })
            .then((response) => {
                // post to db
                // route back to pizza page (step 1)
            }).catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <h3>Step 3: Checkout</h3>
            <p>Name {customer.customer_name}</p>
            <p>Address {customer.street_address}</p>
            <p>Pickup Type {customer.type}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>

                <tbody>
                    {/* map over TRs */}
                    <tr>
                        <td>{cart.name}</td>
                        <td>{cart.price}</td>
                    </tr>
                </tbody>
            </table>
            <h3>Total: total cost {total}</h3>
            <button onClick={handleClickCheckout}>Checkout</button>
        </div>
    )
}

export default Checkout;