export default function Header() {
  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      <div className="shopping-cart">
        <img
          className="cart-icon"
          src="/images/cart.svg"
          alt="A shopping cart icon"
        />
        <h2>Total: placeholder</h2>
      </div>
    </header>
  );
}
