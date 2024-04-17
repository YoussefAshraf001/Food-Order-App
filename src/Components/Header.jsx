import { useContext } from "react";

import logo from "../../public/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt-="logo" />
        <h1>Shrine</h1>
      </div>
      <Button textOnly onClick={handleShowCart}>
        Cart ({totalCartItems})
      </Button>
    </header>
  );
}
