import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {useEffect} from 'react';

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
    

    return (
        <div>
            {pizzaList.map((pizza, i) => (
                <div key={i}>
                    <div><img src={pizza.image_path} />
                    <div><h4><b>{pizza.name}</b></h4>
                    <p>{pizza.description}</p>
                    <p>Price: {pizza.price}</p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default PizzaList;