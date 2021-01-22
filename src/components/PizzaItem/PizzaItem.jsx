import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PizzaItem() {
  const pizzaList = useSelector((state) => state.pizzaList);
  const [clickedAdd, setClickedAdd] = useState();
  const dispatch = useDispatch();

  const handleAdd = (event) => {
    console.log('clicked add');
    setClickedAdd(!clickedAdd);

    // filtering through pizzaList to find the id of the pizza we clicked on
    // then sending that pizza.price to the reducer
    const payload = pizzaList.filter((pizza) => pizzaList.id === event);
    dispatch({ type: 'TOTAL_PRICE', payload: Number(payload[0].price) });
  };

  return (
    <section>
      <div className="add-btn">
        {clickedAdd ? (
          <button>Remove</button>
        ) : (
          <button onClick={(event) => handleAdd(pizzaList.id)}>Add</button>
        )}
      </div>
    </section>
  );
}

export default PizzaItem;
