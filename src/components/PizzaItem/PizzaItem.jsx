import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';



function PizzaItem({pizza}) {

    const pizzaList = useSelector(state => state.pizzaList);
    const [clickedAdd, setClickedAdd] = useState();
    const dispatch = useDispatch();

    const handleAdd = () => {
        console.log('clicked add');
        setClickedAdd(!clickedAdd);

        
        dispatch({type: 'ADD_PRICE', payload: Number(pizza.price)});
    }

    const handleRemove = () => {
        console.log('clicked remove');
        setClickedAdd(!clickedAdd);

        dispatch({type: 'SUBTRACT_PRICE', payload: Number(pizza.price)})
    }


    return (
        <section>
            <div>
            {clickedAdd 
            ? <button onClick={handleRemove}>Remove</button> 
            : <button onClick={handleAdd}>Add</button>} 
            </div>
        </section>
    )
}



export default PizzaItem;