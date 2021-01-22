import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {


    const pizzaList = useSelector(state => state.pizzaList);
    console.log(pizzaList);

    const dispatch = useDispatch();

    function getPizza() {
        axios.get('/api/pizza')
            .then(response => {
                const action = {
                    type: 'SET_PIZZA',
                    payload: response.data
                }
                dispatch(action);
            }).catch(error => {
                alert('error in GET');
                console.log(error);
            });
    }

    useEffect(() => {
        console.log('in useEffect');
        getPizza();
    }, []);

    // const handleAdd = (event) => {

        // filtering through pizzaList to find the id of the pizza we clicked on
        // then sending that pizza.price to the reducer
        const payload = pizzaList.filter((pizza) => pizza.id === event)
        dispatch({type: 'TOTAL_PRICE', payload: Number(payload[0].price)});
        const pizzaload = pizzaList.filter((pizza) => pizza.id === event)
        dispatch({type: 'ADD_CART', payload: pizzaload});
    }
    //     // filtering through pizzaList to find the id of the pizza we clicked on
    //     // then sending that pizza.price to the reducer
    //     const payload = pizzaList.filter((pizza) => pizza.id === event);
    //     dispatch({type: 'TOTAL_PRICE', payload: Number(payload[0].price)});
        

    // }

    return (
        <div>
            {pizzaList.map((pizza) => (
        
                <div key={pizza.id}>
                    <div><img src={pizza.image_path} />
                    <div><h4><b>{pizza.name}</b></h4>
                    <p>{pizza.description}</p>
                    <p>Price: {pizza.price}</p>
                    </div>
                    </div>
                    {/* {clickedAdd ? <button>Remove</button> : <button onClick={(event) => handleAdd(pizza.id)}>Add</button>} */}
                    <PizzaItem />
                    
                </div>  
            ))}
        </div>
    )
}


export default PizzaList;