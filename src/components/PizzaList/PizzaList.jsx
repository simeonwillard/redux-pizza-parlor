import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function PizzaList() {

    const [clickedAdd, setClickedAdd] = useState(false);
    const [buttonText, setButtonText] = useState('Add');
    const [addPrice, setAddPrice] = useState(0);

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

    const handleAdd = (event) => {
        console.log('clicked add');
        setClickedAdd(!clickedAdd);
        setButtonText('Remove');

        // filtering through pizzaList to find the id of the pizza we clicked on
        // then sending that pizza.price to the reducer
        const payload = pizzaList.filter((pizza) => pizza.id === event)
        dispatch({type: 'TOTAL_PRICE', payload: Number(payload[0].price)});

    }

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
                    <button onClick={(event) => handleAdd(pizza.id)}>{buttonText}</button>
                </div>  
            ))}
        </div>
    )
}


export default PizzaList;