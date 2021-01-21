

function PizzaList() {

    return (
        <div>
            {pizzaList.map((pizza) => (
                <div>
                <div><img src={pizza.image_path} /></div>
                <div>{pizza.name}</div>
                <div>{pizza.description}</div>
                <div>{pizza.price}</div>
                </div>
            ))}
        </div>
    )
}


export default PizzaList;