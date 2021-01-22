import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';



function PizzaItem({pizza}) {

    const pizzaList = useSelector(state => state.pizzaList);
    const [clickedAdd, setClickedAdd] = useState();
    const dispatch = useDispatch();

    const handleAdd = () => {
        console.log('clicked add');
        setClickedAdd(!clickedAdd);

        // filtering through pizzaList to find the id of the pizza we clicked on
        // then sending that pizza.price to the reducer
        dispatch({type: 'TOTAL_PRICE', payload: Number(pizza.price)});
        dispatch({ type: 'ADD_CART', payload: pizza });
    }


    return (
        <section>
            <div>
            {clickedAdd ? <button>Remove</button> : <button onClick={handleAdd}>Add</button>} 
            </div>
        </section>
    )
}



export default PizzaItem;