import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function CustomerForm() {
  const [custName, setCustName] = useState('');
  const [custAddress, setCustAddress] = useState('');
  const [custCity, setCustCity] = useState('');
  const [custZip, setCustZip] = useState('');
  const [custType, setCustType] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();

    const custObj = {
      customer_name: custName,
      street_address: custAddress,
      city: custCity,
      zip: custZip,
      type: custType,
    };

    dispatch({ type: 'SET_CUSTOMER', payload: custObj });

    setCustAddress('');
    setCustName('');
    setCustCity('');
    setCustZip('');
    setCustType('');

    history.push('/checkout');
  };

  return (
    <form>
      <h3>Step 2: Customer Information</h3>
      <input
        value={custName}
        onChange={(event) => setCustName(event.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={custAddress}
        onChange={(event) => setCustAddress(event.target.value)}
        type="text"
        placeholder="Street Address"
      />
      <input
        value={custCity}
        onChange={(event) => setCustCity(event.target.value)}
        type="text"
        placeholder="City"
      />
      <input
        value={custZip}
        onChange={(event) => setCustZip(event.target.value)}
        type="tel"
        placeholder="Zip"
      />
      <br />
      <label htmlFor="pickup">Pickup</label>
      <input
        type="radio"
        name="type"
        value="Pickup"
        onChange={(event) => setCustType(event.target.value)}
      />
      <br />
      <label htmlFor="delivery">Delivery</label>
      <input
        type="radio"
        name="type"
        value="Delivery"
        onChange={(event) => setCustType(event.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        Next
      </button>
    </form>
  );
}
