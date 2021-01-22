import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PizzaItem({ pizza }) {
  const pizzaList = useSelector((state) => state.pizzaList);
  const [clickedAdd, setClickedAdd] = useState();
  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log('clicked add');
    setClickedAdd(!clickedAdd);

    dispatch({ type: 'ADD_PRICE', payload: Number(pizza.price) });
    dispatch({ type: 'ADD_CART', payload: pizza });
  };

  const handleRemove = () => {
    console.log('clicked remove');
    setClickedAdd(!clickedAdd);

    dispatch({ type: 'SUBTRACT_PRICE', payload: Number(pizza.price) });
    dispatch({ type: 'REMOVE_CART', payload: pizza });
    // filtering through pizzaList to find the id of the pizza we clicked on
    // then sending that pizza.price to the reducer
    dispatch({ type: 'TOTAL_PRICE', payload: Number(pizza.price) });
  };

  return (
    <section>
      <div className="add-btn">
        {clickedAdd ? (
          <button onClick={handleRemove}>Remove</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>
    </section>
  );
}

export default PizzaItem;
