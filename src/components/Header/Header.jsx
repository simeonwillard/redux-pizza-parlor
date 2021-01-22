import {useSelector} from 'react-redux';

export default function Header() {

  const total = useSelector(store => store.priceTotalReducer)
  const roundedTotal = (Math.round(total * 100) / 100).toFixed(2)

  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      <div className="shopping-cart">
        <img
          className="cart-icon"
          src="/images/cart.svg"
          alt="A shopping cart icon"
        />
        <h2>Total: {roundedTotal}</h2>
      </div>
    </header>
  );
}
