import './Checkout.css'

function Checkout() {

    const handleClickCheckout = () => {
        console.log('clicked checkout');
        // post to db
        // show confirmation dialogue
        // route back to pizza page (step 1)
    }

    return (
        <div>
            <h3>Step 3: Checkout</h3>
            <p>
                Name (psuedocode)
                Address (psuedocode)
            </p>
            <p>Pickup Type (pseudocode)</p>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Cost</th>
                </thead>

                <tbody>
                    {/* map over TRs */}
                    <tr>
                        <td>name (pseudocode)</td>
                        <td>cost (pseudocode)</td>
                    </tr>
                </tbody>
            </table>
            <h3>Total: total cost (pseudocode)</h3>
            <button onClick={handleClickCheckout}>Checkout</button>
        </div>
    )
}

export default Checkout;