
function Admin() {

    const testArray = [
        {
            id: 1,
            customer_name: 'Chris',
            time: '5:00pm',
            type: 'Delivery',
            total: 10.34
        },
        {
            id: 2,
            customer_name: 'Dianne',
            time: '2:00pm',
            type: 'Pickup',
            total: 23.54
        }
    ]


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
                    {testArray.map((customer) =>
                        <tr key={customer.id}>
                            <td>{customer.customer_name}</td>
                            <td>{customer.time}</td>
                            <td>{customer.type}</td>
                            <td>{customer.total}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Admin